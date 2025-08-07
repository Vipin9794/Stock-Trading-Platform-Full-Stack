const {Schema} = require("mongoose");
const mongoose = require("mongoose");

const OrdersSchema = new Schema({
 
    name: String,
    qty: Number,
    price: Number,
    mode: {
    type: String,
    enum: ["BUY", "SELL"], // dono mode allowed
    
  },
   userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = {OrdersSchema};