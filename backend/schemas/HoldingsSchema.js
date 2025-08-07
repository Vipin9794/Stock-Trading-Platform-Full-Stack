const {Schema} = require("mongoose");

const HoldingSchema = new Schema({
    UserHolding:{
    type:Schema.Types.ObjectId,
    ref: 'UserModel',

    },
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,

});

module.exports = {HoldingSchema};