import React, { useState, useEffect } from "react";
import api from "../api/client";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const formatNumber = (value) => {
    const num = Number(value);
    if (Number.isNaN(num)) {
      return "0.00";
    }
    return num.toFixed(2);
  };

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await api.get("/allPositions");
        setAllPositions(res.data);
      } catch (err) {
        console.error("Axios error:", err);
        if (err.response?.status === 401) {
          setError("Session expired. Please login again.");
        } else {
          setError("Could not load positions. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPositions();
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      {loading && <div>Loading positions...</div>}
      {!loading && error && <div>{error}</div>}
      {!loading && !error && allPositions.length === 0 && (
        <div>No open positions.</div>
      )}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const qty = Number(stock.qty) || 0;
              const avg = Number(stock.avg) || 0;
              const price = Number(stock.price) || 0;
              const curValue = price * qty;
              const isProfit = curValue - avg * qty >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product || "—"}</td>
                  <td>{stock.name || "—"}</td>
                  <td>{qty}</td>
                  <td>{formatNumber(avg)}</td>
                  <td>{formatNumber(price)}</td>
                  <td className={profClass}>
                    {formatNumber(curValue - avg * qty)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
