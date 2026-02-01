require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./models/Holdingsmodel");
const {PositionsModel} = require("./models/PositionsModel");
const {OrdersModel} = require('./models/OrdersModel');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "TATA MOTORS",
//       qty: 50,
//       avg: 620.5,
//       price: 645.3,
//       net: "+4.00%",
//       day: "+1.25%",
//     },
//     {
//       name: "RELIANCE",
//       qty: 20,
//       avg: 2450.0,
//       price: 2389.75,
//       net: "-2.46%",
//       day: "-0.85%",
//     },
//     {
//       name: "INFOSYS",
//       qty: 35,
//       avg: 1480.2,
//       price: 1502.6,
//       net: "+1.51%",
//       day: "+0.60%",
//     },
//     {
//       name: "HDFC BANK",
//       qty: 40,
//       avg: 1650.0,
//       price: 1678.9,
//       net: "+1.75%",
//       day: "+0.95%",
//     },
//     {
//       name: "ICICI BANK",
//       qty: 60,
//       avg: 925.4,
//       price: 940.1,
//       net: "+1.59%",
//       day: "+0.42%",
//     },

//     {
//       name: "SBIN",
//       qty: 100,
//       avg: 585.2,
//       price: 602.8,
//       net: "+3.01%",
//       day: "+1.10%",
//     },
//     {
//       name: "AXIS BANK",
//       qty: 45,
//       avg: 1020.5,
//       price: 995.3,
//       net: "-2.47%",
//       day: "-0.90%",
//     },
//     {
//       name: "LT",
//       qty: 10,
//       avg: 2890.0,
//       price: 2955.5,
//       net: "+2.27%",
//       day: "+0.75%",
//     },
//     {
//       name: "ASIAN PAINTS",
//       qty: 12,
//       avg: 3150.75,
//       price: 3080.4,
//       net: "-2.23%",
//       day: "-1.20%",
//     },
//     {
//       name: "MARUTI",
//       qty: 8,
//       avg: 9800.0,
//       price: 9955.6,
//       net: "+1.59%",
//       day: "+0.50%",
//     },

//     {
//       name: "WIPRO",
//       qty: 70,
//       avg: 420.6,
//       price: 435.8,
//       net: "+3.61%",
//       day: "+1.80%",
//     },
//     {
//       name: "HCL TECH",
//       qty: 25,
//       avg: 1120.3,
//       price: 1148.9,
//       net: "+2.55%",
//       day: "+0.90%",
//     },
//     {
//       name: "BAJAJ FINANCE",
//       qty: 15,
//       avg: 7200.0,
//       price: 7050.4,
//       net: "-2.08%",
//       day: "-0.60%",
//     },
//     {
//       name: "KOTAK BANK",
//       qty: 30,
//       avg: 1825.5,
//       price: 1802.3,
//       net: "-1.27%",
//       day: "-0.35%",
//     },
//     {
//       name: "ADANI PORTS",
//       qty: 55,
//       avg: 810.4,
//       price: 845.2,
//       net: "+4.29%",
//       day: "+1.55%",
//     },

//     {
//       name: "ITC",
//       qty: 120,
//       avg: 420.1,
//       price: 432.6,
//       net: "+2.97%",
//       day: "+0.80%",
//     },
//     {
//       name: "ULTRATECH CEMENT",
//       qty: 6,
//       avg: 8650.0,
//       price: 8725.4,
//       net: "+0.87%",
//       day: "+0.30%",
//     },
//     {
//       name: "POWER GRID",
//       qty: 90,
//       avg: 215.75,
//       price: 223.1,
//       net: "+3.41%",
//       day: "+1.10%",
//     },
//     {
//       name: "ONGC",
//       qty: 110,
//       avg: 182.4,
//       price: 176.8,
//       net: "-3.07%",
//       day: "-1.40%",
//     },
//     {
//       name: "NTPC",
//       qty: 85,
//       avg: 245.6,
//       price: 252.9,
//       net: "+2.97%",
//       day: "+1.05%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("done");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "MIS",
//       name: "TATA MOTORS",
//       qty: 25,
//       avg: 630.5,
//       price: 618.3,
//       net: "-1.93%",
//       day: "-0.80%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "RELIANCE",
//       qty: 10,
//       avg: 2400.0,
//       price: 2475.4,
//       net: "+3.14%",
//       day: "+1.20%",
//       isLoss: false,
//     },
//     {
//       product: "MIS",
//       name: "INFOSYS",
//       qty: 15,
//       avg: 1485.2,
//       price: 1460.8,
//       net: "-1.64%",
//       day: "-0.50%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "HDFC BANK",
//       qty: 20,
//       avg: 1650.0,
//       price: 1692.6,
//       net: "+2.58%",
//       day: "+0.90%",
//       isLoss: false,
//     },
//     {
//       product: "MIS",
//       name: "ICICI BANK",
//       qty: 30,
//       avg: 935.4,
//       price: 950.2,
//       net: "+1.58%",
//       day: "+0.45%",
//       isLoss: false,
//     },

//     {
//       product: "CNC",
//       name: "SBIN",
//       qty: 50,
//       avg: 590.3,
//       price: 575.4,
//       net: "-2.52%",
//       day: "-1.10%",
//       isLoss: true,
//     },
//     {
//       product: "MIS",
//       name: "AXIS BANK",
//       qty: 22,
//       avg: 1015.5,
//       price: 990.2,
//       net: "-2.49%",
//       day: "-0.85%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "LT",
//       qty: 8,
//       avg: 2920.0,
//       price: 2985.6,
//       net: "+2.25%",
//       day: "+0.70%",
//       isLoss: false,
//     },
//     {
//       product: "MIS",
//       name: "ASIAN PAINTS",
//       qty: 6,
//       avg: 3120.75,
//       price: 3055.2,
//       net: "-2.10%",
//       day: "-1.30%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "MARUTI",
//       qty: 4,
//       avg: 9900.0,
//       price: 10085.4,
//       net: "+1.87%",
//       day: "+0.55%",
//       isLoss: false,
//     },

//     {
//       product: "MIS",
//       name: "WIPRO",
//       qty: 40,
//       avg: 428.6,
//       price: 442.8,
//       net: "+3.31%",
//       day: "+1.50%",
//       isLoss: false,
//     },
//     {
//       product: "CNC",
//       name: "HCL TECH",
//       qty: 12,
//       avg: 1110.3,
//       price: 1088.9,
//       net: "-1.93%",
//       day: "-0.70%",
//       isLoss: true,
//     },
//     {
//       product: "MIS",
//       name: "BAJAJ FINANCE",
//       qty: 7,
//       avg: 7150.0,
//       price: 7035.4,
//       net: "-1.60%",
//       day: "-0.45%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "KOTAK BANK",
//       qty: 18,
//       avg: 1805.5,
//       price: 1848.3,
//       net: "+2.37%",
//       day: "+0.80%",
//       isLoss: false,
//     },
//     {
//       product: "MIS",
//       name: "ADANI PORTS",
//       qty: 28,
//       avg: 825.4,
//       price: 860.2,
//       net: "+4.22%",
//       day: "+1.60%",
//       isLoss: false,
//     },

//     {
//       product: "CNC",
//       name: "ITC",
//       qty: 60,
//       avg: 425.1,
//       price: 418.6,
//       net: "-1.53%",
//       day: "-0.40%",
//       isLoss: true,
//     },
//     {
//       product: "MIS",
//       name: "ULTRATECH CEMENT",
//       qty: 3,
//       avg: 8680.0,
//       price: 8795.4,
//       net: "+1.33%",
//       day: "+0.35%",
//       isLoss: false,
//     },
//     {
//       product: "CNC",
//       name: "POWER GRID",
//       qty: 45,
//       avg: 220.75,
//       price: 228.1,
//       net: "+3.33%",
//       day: "+1.20%",
//       isLoss: false,
//     },
//     {
//       product: "MIS",
//       name: "ONGC",
//       qty: 55,
//       avg: 184.4,
//       price: 178.8,
//       net: "-3.04%",
//       day: "-1.50%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "NTPC",
//       qty: 42,
//       avg: 248.6,
//       price: 255.9,
//       net: "+2.94%",
//       day: "+1.10%",
//       isLoss: false,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPositions = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPositions.save();
//   });
//   res.send("done");
// });


app.get('/allHoldings', async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.status(200).json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get('/allPositions', async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.status(200).json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/newOrder", async(req, res)=>{
  let newOrder = new OrdersModel({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
  });

  newOrder.save();
  res.send("order saved");
});


app.listen(PORT, () => {
  console.log("App started");
  mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
});
