import React, { useState, useContext } from "react";
import api from "../api/client";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // reuse same CSS

const SellActionWindow = ({ uid, availableQty }) => {
  const { closeSellWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSellClick = async () => {
  if (stockQuantity <= 0 || stockPrice <= 0) {
    alert("Quantity and Price must be greater than 0");
    return;
  }

  if (stockQuantity > availableQty) {
    alert("Cannot sell more than available quantity");
    return;
  }

  try {
    setLoading(true);

    await api.post("/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL"
    });

    closeSellWindow();
    window.location.reload(); // temporary refresh

  } catch (error) {
    console.error("Sell order failed:", error.response?.data || error);
    alert("Sell failed. Please check backend.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <h3 className="title">Sell {uid}</h3>

        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              max={availableQty}
              value={stockQuantity}
              onChange={(e) => setStockQuantity(+e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              min="0"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(+e.target.value)}
            />
          </fieldset>
        </div>

        <p style={{ marginTop: "10px", fontSize: "12px", color: "#888" }}>
          Available Qty: {availableQty}
        </p>
      </div>

      <div className="buttons">
        <span>
          Est. Credit ₹{(stockQuantity * stockPrice).toFixed(2)}
        </span>

        <div>
          <button
            className="btn btn-red"
            onClick={handleSellClick}
            disabled={loading}
          >
            {loading ? "Placing Order..." : "Sell"}
          </button>

          <button className="btn btn-grey" onClick={closeSellWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
