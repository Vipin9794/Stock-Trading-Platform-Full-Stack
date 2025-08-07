// require("dotenv").config();
// const cookieParser = require('cookie-parser');
// const app = express();
// app.use(cors());
// app.use(bodyparser.json());

// const express = require("express");
// const mongoose = require("mongoose");
// const { HoldingsModel } = require("./model/HoldingsModel");
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");
// const {verifyToken} = require("./middleware/verifyToken");
// const authRoute = require("./routes/AuthRoute");
// const bodyparser = require("body-parser");
// const cors = require("cors");

// const PORT = process.env.PORT || 3002;
// const url = process.env.MONGO_URL;
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // app.get("/addHoldings", async (req, res) => {
// //   let tempHildings = [
// //     {
// //       name: "BHARTIARTL",
// //       qty: 2,
// //       avg: 538.05,
// //       price: 541.15,
// //       net: "+0.58%",
// //       day: "+2.99%",
// //     },
// //     {
// //       name: "HDFCBANK",
// //       qty: 2,
// //       avg: 1383.4,
// //       price: 1522.35,
// //       net: "+10.04%",
// //       day: "+0.11%",
// //     },
// //     {
// //       name: "HINDUNILVR",
// //       qty: 1,
// //       avg: 2335.85,
// //       price: 2417.4,
// //       net: "+3.49%",
// //       day: "+0.21%",
// //     },
// //     {
// //       name: "INFY",
// //       qty: 1,
// //       avg: 1350.5,
// //       price: 1555.45,
// //       net: "+15.18%",
// //       day: "-1.60%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "ITC",
// //       qty: 5,
// //       avg: 202.0,
// //       price: 207.9,
// //       net: "+2.92%",
// //       day: "+0.80%",
// //     },
// //     {
// //       name: "KPITTECH",
// //       qty: 5,
// //       avg: 250.3,
// //       price: 266.45,
// //       net: "+6.45%",
// //       day: "+3.54%",
// //     },
// //     {
// //       name: "M&M",
// //       qty: 2,
// //       avg: 809.9,
// //       price: 779.8,
// //       net: "-3.72%",
// //       day: "-0.01%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "RELIANCE",
// //       qty: 1,
// //       avg: 2193.7,
// //       price: 2112.4,
// //       net: "-3.71%",
// //       day: "+1.44%",
// //     },
// //     {
// //       name: "SBIN",
// //       qty: 4,
// //       avg: 324.35,
// //       price: 430.2,
// //       net: "+32.63%",
// //       day: "-0.34%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "SGBMAY29",
// //       qty: 2,
// //       avg: 4727.0,
// //       price: 4719.0,
// //       net: "-0.17%",
// //       day: "+0.15%",
// //     },
// //     {
// //       name: "TATAPOWER",
// //       qty: 5,
// //       avg: 104.2,
// //       price: 124.15,
// //       net: "+19.15%",
// //       day: "-0.24%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "TCS",
// //       qty: 1,
// //       avg: 3041.7,
// //       price: 3194.8,
// //       net: "+5.03%",
// //       day: "-0.25%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "WIPRO",
// //       qty: 4,
// //       avg: 489.3,
// //       price: 577.75,
// //       net: "+18.08%",
// //       day: "+0.32%",
// //     },
// //   ];

// //   tempHildings.forEach((item) => {
// //     let newHolding = new HoldingsModel({
// //       name: item.name,
// //       qty: item.qty,
// //       avg: item.avg,
// //       price: item.price,
// //       net: item.net,
// //       day: item.day,
// //     });
// //     newHolding.save();
// //   });
// //   res.send("Done");
// // });

// // app.get("/addPositions", async (req, res) => {
// //   let tempPositions = [
// //     {
// //       product: "CNC",
// //       name: "EVEREADY",
// //       qty: 2,
// //       avg: 316.27,
// //       price: 312.35,
// //       net: "+0.58%",
// //       day: "-1.24%",
// //       isLoss: true,
// //     },
// //     {
// //       product: "CNC",
// //       name: "JUBLFOOD",
// //       qty: 1,
// //       avg: 3124.75,
// //       price: 3082.65,
// //       net: "+10.04%",
// //       day: "-1.35%",
// //       isLoss: true,
// //     },
// //   ];
// //   tempPositions.forEach((item) => {
// //     let newPositions = new PositionsModel({
// //       product: item.product,
// //       name: item.name,
// //       qty: item.qty,
// //       avg: item.avg,
// //       price: item.price,
// //       net: item.net,
// //       day: item.day,
// //       isLoss: item.isLoss,
// //     });
// //     newPositions.save();
// //   });
// //   res.send("Done Position");
// // });

// app.use("/", authRoute);

// // app.get("/allHoldings", async (req, res) => {
// //   let newHolding = await HoldingsModel.find({});
// //   res.json(newHolding);
// // });

//   app.get("/allHoldings",verifyToken, async (req, res)=>{
//     try{
//      // Get user ID from the token
//     if(!req.userId){
//       console.log("User not authenticated here !!!  ");
//       return res.json({message: "User not authenticated"});

//     }
//      console.log("User ID from token: " + req.userId);
//      const user= new mongoose.Types.ObjectId(req.userId);
//      console.log("User ID as ObjectId: " + user);
//     const allHoldings= await HoldingsModel.find();
//     console.log("111"+allHoldings);
//     return res.json(allHoldings);
//   }catch(err){
//     console.error("Error fetching holdings:", err);
//     return res.status(500).json({ message: "Internal server error" });
//   }

//   })

// app.get("/allPositions", async (req, res) => {
//   let newPositions = await PositionsModel.find({});
//   res.json(newPositions);
// });
// app.post("/newOrder", async (req, res) => {
//   try {
//     console.log("Request body:", req.body);

//     const newOrder = new OrdersModel({
//       name: req.body.name,
//       qty: req.body.qty,
//       price: req.body.price,
//       mode: req.body.mode,
//     });

//     const savedOrder = await newOrder.save();

//     console.log("Order saved:", savedOrder);
//     res.status(201).send("Order Saved!");
//   } catch (err) {
//     console.error("Error saving order:", err.message);
//     res.status(500).send("Failed to save order");
//   }
// });
// app.get("/allOrders", async (req, res) => {
//   let newOrder = await OrdersModel.find({});
//   res.json(newOrder);
// });

// app.listen(PORT, () => {
//   console.log("app Started");
//   mongoose.connect(url);
//   console.log("DB connected!");
// });

// Import dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Import models and middlewares
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { verifyToken } = require("./middleware/verifyToken");
const authRoute = require("./routes/AuthRoute");

// App setup
const app = express();
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes

app.use("/", authRoute);

// Fetch all holdings for a user
app.get("/allHoldings", verifyToken, async (req, res) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const allHoldings = await HoldingsModel.find({});

    res.json(allHoldings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Fetch positions
app.get("/allPositions", async (req, res) => {
  try {
    const newPositions = await PositionsModel.find({});
    res.json(newPositions);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch positions" });
  }
});

// Create a new order
app.post("/newOrder", async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
      userId: req.body.userId,
    });

    const savedOrder = await newOrder.save();

    console.log("Order saved:", savedOrder);
    res.status(201).send("Order Saved!");
  } catch (err) {
    console.error("Error saving order:", err.message);
    res.status(500).send("Failed to save order");
  }
});

// Fetch all orders
app.get("/allOrders", async (req, res) => {
  try {
    const userId = req.query.userId; // or use req.user._id if using auth middleware

    if (!userId) {
      return res.status(401).json({ message: "User ID is required" });
    }
    const allOrders = await OrdersModel.find({ userId: userId });
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

// Connect to DB and start server
mongoose
  .connect(url)
  .then(() => {
    console.log("DB connected!");
    app.listen(PORT, () => console.log(`App started on port ${PORT}`));
  })
  .catch((err) => console.error("DB connection error:", err));
