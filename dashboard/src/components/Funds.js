import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  const [availableBalance, setAvailableBalance] = useState(4043.1);
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState("add");

  const summary = useMemo(
    () => ({
      available: availableBalance,
      used: 3757.3,
      opening: 4043.1,
      payin: 4064.0,
    }),
    [availableBalance]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = Number(amount);
    if (Number.isNaN(value) || value <= 0) {
      alert("Enter a valid amount.");
      return;
    }
    if (action === "withdraw" && value > availableBalance) {
      alert("Insufficient balance.");
      return;
    }
    setAvailableBalance((prev) =>
      action === "add" ? prev + value : prev - value
    );
    setAmount("");
  };

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <div className="funds-actions">
          <button
            className={`funds-chip ${action === "add" ? "active" : ""}`}
            onClick={() => setAction("add")}
          >
            Add funds
          </button>
          <button
            className={`funds-chip ${action === "withdraw" ? "active" : ""}`}
            onClick={() => setAction("withdraw")}
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="funds-panel">
        <div>
          <h4>{action === "add" ? "Add funds" : "Withdraw funds"}</h4>
          <p>Available balance: {summary.available.toFixed(2)}</p>
        </div>
        <form className="funds-form" onSubmit={handleSubmit}>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit">
            {action === "add" ? "Add now" : "Withdraw now"}
          </button>
        </form>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">
                {summary.available.toFixed(2)}
              </p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{summary.used.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{summary.available.toFixed(2)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{summary.opening.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>{summary.payin.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
