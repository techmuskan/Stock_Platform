require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const { HoldingsModel } = require("./models/Holdingsmodel");
const { OrdersModel } = require("./models/OrdersModel");
const {PositionsModel}  = require("./models/PositionsModel");
const authRoute = require("./Routes/AuthRoute");
const { requireAuth } = require("./Middlewares/AuthMiddleware");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3002;

// Trust proxy in production (needed for secure cookies behind proxies)
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

const corsOrigins = (() => {
  if (process.env.CORS_ORIGIN) {
    return process.env.CORS_ORIGIN.split(",").map((s) => s.trim()).filter(Boolean);
  }
  const list = [];
  if (process.env.FRONTEND_URL) list.push(process.env.FRONTEND_URL);
  if (process.env.DASHBOARD_URL) list.push(process.env.DASHBOARD_URL);
  if (list.length > 0) return list;
  return ["http://localhost:5173", "http://localhost:3000"];
})();

app.use(
  cors({
    origin: corsOrigins,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoute);


// ------------------ GET ROUTES ------------------

app.get("/allHoldings", requireAuth, async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({ userId: req.user._id });
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allPositions", requireAuth, async (req, res) => {
  try {
    const positions = await PositionsModel.find({ userId: req.user._id });
    res.json(positions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/allOrders", requireAuth, async (req, res) => {
  try {
    const orders = await OrdersModel.find({ userId: req.user._id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ------------------ ORDER ROUTE ------------------

app.post("/newOrder", requireAuth, async (req, res) => {
  try {
    let { name, qty, price, mode } = req.body;

    // Convert to numbers
    qty = Number(qty);
    price = Number(price);

    // Validate
    if (!name || qty <= 0 || price <= 0 || !mode) {
      return res.status(400).json({ error: "Invalid order data" });
    }

    // Save order
    await OrdersModel.create({ userId: req.user._id, name, qty, price, mode });

    // Handle BUY
    if (mode === "BUY") {
      let holding = await HoldingsModel.findOne({ userId: req.user._id, name });

      if (holding) {
        const totalQty = holding.qty + qty;              // both numbers now
        const totalCost = holding.qty * holding.avg + qty * price;

        holding.qty = totalQty;
        holding.avg = totalCost / totalQty;
        holding.price = price;

        await holding.save();
      } else {
        await HoldingsModel.create({
          userId: req.user._id,
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
        });
      }
    }

    // Handle SELL
    if (mode === "SELL") {
      let holding = await HoldingsModel.findOne({ userId: req.user._id, name });
      if (!holding || holding.qty < qty) {
        return res.status(400).json({ error: "Not enough quantity" });
      }

      holding.qty -= qty;
      holding.price = price;

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ userId: req.user._id, name });
      } else {
        await holding.save();
      }
    }

    res.json({ message: `${mode} successful` });
  } catch (err) {
    console.error("ORDER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});



// ------------------ STATIC HOSTING (PROD) ------------------

if (process.env.NODE_ENV === "production") {
  const frontendDist = path.join(__dirname, "..", "frontend", "dist");
  const dashboardBuild = path.join(__dirname, "..", "dashboard", "build");

  if (fs.existsSync(dashboardBuild)) {
    app.use("/dashboard", express.static(dashboardBuild));
    app.get("/dashboard/*", (_req, res) => {
      res.sendFile(path.join(dashboardBuild, "index.html"));
    });
  }

  if (fs.existsSync(frontendDist)) {
    app.use(express.static(frontendDist));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(frontendDist, "index.html"));
    });
  }
}

// ------------------ START SERVER ------------------

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error(err));
