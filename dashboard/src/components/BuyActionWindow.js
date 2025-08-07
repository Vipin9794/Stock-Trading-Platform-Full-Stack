import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // Context se function lena
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleOrderClick = async (orderMode) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      if (!user) {
        alert("You must be logged in to place an order.");
        return;
      }
      const orderData = {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: orderMode.toUpperCase(), // "BUY" ya "SELL"
        userId: user._id,
      };

      console.log("Sending order:", orderData); // Debug log

      await axios.post("https://stock-trading-platform-full-stack-backend.onrender.com", orderData);
      closeBuyWindow();
    } catch (err) {
      console.error("Order failed:", err.message);
      alert("Failed to place order. Please try again.");
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockPrice * stockQuantity).toFixed(2)}</span>
        <div>
          <Link
            className={`btn ${mode === "BUY" ? "btn-blue" : "btn-red"}`}
            onClick={() => handleOrderClick(mode)}
          >
            {mode.toUpperCase()}
          </Link>

          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
