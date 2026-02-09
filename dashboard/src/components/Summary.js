import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthContext";
import api from "../api/client";

const Summary = () => {
  const { user } = useAuth();
  const [holdings, setHoldings] = useState([]);
  const [positions, setPositions] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [orderForm, setOrderForm] = useState({
    name: "",
    qty: "",
    price: "",
    mode: "BUY",
  });

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        setError("");
        const [holdingsRes, positionsRes, ordersRes] = await Promise.all([
          api.get("/allHoldings"),
          api.get("/allPositions"),
          api.get("/allOrders"),
        ]);
        setHoldings(holdingsRes.data || []);
        setPositions(positionsRes.data || []);
        setOrders(ordersRes.data || []);
      } catch (err) {
        console.error("Summary fetch error:", err);
        setError("Could not load portfolio data. Please refresh.");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const totals = useMemo(() => {
    const investment = holdings.reduce(
      (sum, item) => sum + Number(item.avg || 0) * Number(item.qty || 0),
      0
    );
    const marketValue = holdings.reduce(
      (sum, item) => sum + Number(item.price || 0) * Number(item.qty || 0),
      0
    );
    const pnl = marketValue - investment;
    const pnlPct = investment > 0 ? (pnl / investment) * 100 : 0;
    return { investment, marketValue, pnl, pnlPct };
  }, [holdings]);

  const handleOrderChange = (e) => {
    setOrderForm({ ...orderForm, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/newOrder", {
        name: orderForm.name.trim(),
        qty: Number(orderForm.qty),
        price: Number(orderForm.price),
        mode: orderForm.mode,
      });
      alert("Order placed successfully.");
      setOrderForm({ name: "", qty: "", price: "", mode: "BUY" });
      const [holdingsRes, ordersRes] = await Promise.all([
        api.get("/allHoldings"),
        api.get("/allOrders"),
      ]);
      setHoldings(holdingsRes.data || []);
      setOrders(ordersRes.data || []);
    } catch (err) {
      console.error("Order error:", err);
      alert(err.response?.data?.error || "Failed to place order.");
    }
  };

  const recentOrders = orders.slice(0, 5);

  if (loading) return <div>Loading portfolio...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="username">
        <h6>Hi, {user || "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Portfolio overview</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{totals.marketValue.toFixed(2)}</h3>
            <p>Market value</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Investment <span>{totals.investment.toFixed(2)}</span>{" "}
            </p>
            <p>
              P&amp;L{" "}
              <span className={totals.pnl >= 0 ? "profit" : "loss"}>
                {totals.pnl.toFixed(2)} ({totals.pnlPct.toFixed(2)}%)
              </span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={totals.pnl >= 0 ? "profit" : "loss"}>
              {totals.pnl.toFixed(2)}{" "}
              <small>
                {totals.pnl >= 0 ? "+" : ""}
                {totals.pnlPct.toFixed(2)}%
              </small>{" "}
            </h3>
            <p>Unrealized P&amp;L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{totals.marketValue.toFixed(2)}</span>{" "}
            </p>
            <p>
              Investment <span>{totals.investment.toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Quick order</p>
        </span>
        <form className="quick-order" onSubmit={handleOrderSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Symbol (e.g. AAPL)"
            value={orderForm.name}
            onChange={handleOrderChange}
            required
          />
          <input
            type="number"
            name="qty"
            placeholder="Qty"
            value={orderForm.qty}
            onChange={handleOrderChange}
            required
            min="1"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={orderForm.price}
            onChange={handleOrderChange}
            required
            min="0"
            step="0.01"
          />
          <select
            name="mode"
            value={orderForm.mode}
            onChange={handleOrderChange}
          >
            <option value="BUY">BUY</option>
            <option value="SELL">SELL</option>
          </select>
          <button type="submit">Place order</button>
        </form>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Recent activity</p>
        </span>
        {recentOrders.length === 0 ? (
          <p className="text-muted">No recent orders.</p>
        ) : (
          <div className="activity-list">
            {recentOrders.map((order, index) => (
              <div className="activity-item" key={`${order.name}-${index}`}>
                <div>
                  <strong>{order.mode}</strong> {order.name}
                  <span>
                    {order.qty} @ {Number(order.price).toFixed(2)}
                  </span>
                </div>
                <span>
                  {Number(order.qty * order.price).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Summary;
