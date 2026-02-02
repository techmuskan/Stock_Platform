require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./models/Holdingsmodel");
const { OrdersModel } = require("./models/OrdersModel");
const {PositionsModel}  = require("./models/PositionsModel");
const authRoute = require("./Routes/AuthRoute");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors(
  {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }
));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoute);


// ------------------ GET ROUTES ------------------

app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/allOrders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ------------------ ORDER ROUTE ------------------

app.post("/newOrder", async (req, res) => {
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
    await OrdersModel.create({ name, qty, price, mode });

    // Handle BUY
    if (mode === "BUY") {
      let holding = await HoldingsModel.findOne({ name });

      if (holding) {
        const totalQty = holding.qty + qty;              // both numbers now
        const totalCost = holding.qty * holding.avg + qty * price;

        holding.qty = totalQty;
        holding.avg = totalCost / totalQty;
        holding.price = price;

        await holding.save();
      } else {
        await HoldingsModel.create({
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
      let holding = await HoldingsModel.findOne({ name });
      if (!holding || holding.qty < qty) {
        return res.status(400).json({ error: "Not enough quantity" });
      }

      holding.qty -= qty;
      holding.price = price;

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
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
