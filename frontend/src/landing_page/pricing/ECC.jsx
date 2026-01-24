import React from "react";

const tabData = [
  {
    id: "tab1",
    label: "Equity",
    headers: [
      "",
      "Equity delivery",
      "Equity intraday",
      "F&O - Futures",
      "F&O - Options",
    ],
    rows: [
      {
        name: "Brokerage",
        values: [
          "Zero Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
        ],
      },
      {
        name: "STT/CTT",
        values: [
          "0.1% on buy & sell",
          "0.025% on the sell side",
          "0.02% on the sell side",
          "0.125% of intrinsic value on bought & exercised options; 0.1% on sell (premium)",
        ],
      },
      {
        name: "Transaction charges",
        values: [
          "NSE: 0.00297%, BSE: 0.00375%",
          "NSE: 0.00297%, BSE: 0.00375%",
          "NSE: 0.00173%, BSE: 0",
          "NSE: 0.03503% (premium), BSE: 0.0325% (premium)",
        ],
      },
      {
        name: "GST",
        values: [
          "18% on (brokerage + SEBI + transaction charges)",
          "18% on (brokerage + SEBI + transaction charges)",
          "18% on (brokerage + SEBI + transaction charges)",
          "18% on (brokerage + SEBI + transaction charges)",
        ],
      },
      {
        name: "SEBI charges",
        values: ["₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
      },
      {
        name: "Stamp charges",
        values: [
          "0.015% or ₹1500 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      },
    ],
  },
  {
    id: "tab2",
    label: "Currency",
    headers: ["", "Currency futures", "Currency options"],
    rows: [
      {
        name: "Brokerage",
        values: [
          "0.03% or ₹20/executed order whichever is lower",
          "₹20/executed order",
        ],
      },
      { name: "STT/CTT", values: ["No STT", "No STT"] },
      {
        name: "Transaction charges",
        values: ["NSE: 0.00035%, BSE: 0.00045%", "NSE: 0.0311%, BSE: 0.001%"],
      },
      {
        name: "GST",
        values: [
          "18% on (brokerage + SEBI + transaction charges)",
          "18% on (brokerage + SEBI + transaction charges)",
        ],
      },
      { name: "SEBI charges", values: ["₹10 / crore", "₹10 / crore"] },
      {
        name: "Stamp charges",
        values: ["0.0001% or ₹10 / crore", "0.0001% or ₹10 / crore"],
      },
    ],
  },
  {
    id: "tab3",
    label: "Commodity",
    headers: ["", "Commodity futures", "Commodity options"],
    rows: [
      {
        name: "Brokerage",
        values: [
          "0.03% or Rs. 20/executed order whichever is lower",
          "₹20/executed order",
        ],
      },
      {
        name: "STT/CTT",
        values: ["0.01% on sell side (Non-Agri)", "0.05% on sell side"],
      },
      {
        name: "Transaction charges",
        values: ["MCX: 0.0021%, NSE: 0.0001%", "MCX: 0.0418%, NSE: 0.001%"],
      },
      {
        name: "GST",
        values: [
          "18% on (brokerage + SEBI + transaction charges)",
          "18% on (brokerage + SEBI + transaction charges)",
        ],
      },
      {
        name: "SEBI charges",
        values: ["Agri: ₹1 / crore, Non-agri: ₹10 / crore", "₹10 / crore"],
      },
      {
        name: "Stamp charges",
        values: ["0.002% or ₹200 / crore", "0.003% or ₹300 / crore"],
      },
    ],
  },
];

const ECC = () => {
  return (
    <div className="container mt-4 px-5 ">
      <div className="row mx-2">
        {/* Tabs */}
        <ul className="nav nav-underline fs-4 gap-4 px-5" role="tablist">
          {tabData.map((tab, idx) => (
            <li className="nav-item" key={tab.id}>
              <button
                className={`nav-link ${idx === 0 ? "active" : ""}`}
                data-bs-toggle="tab"
                data-bs-target={`#${tab.id}`}
                type="button"
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="tab-content pt-4 px-5 mx-2">
        {tabData.map((tab, idx) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${idx === 0 ? "show active" : ""}`}
            id={tab.id}
          >
            <div className="table-responsive">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    {tab.headers.map((header, i) => (
                      <th key={i}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tab.rows.map((row, i) => (
                    <tr key={i} className={i % 2 ? "bg-body-secondary" : ""}>
                      <td className="text-secondary">{row.name}</td>
                      {row.values.map((val, j) => (
                        <td key={j}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <p className="fs-5 text-center mt-4">
        <span className="text-primary">Calculate your costs upfront</span> using
        our brokerage calculator
      </p>
    </div>
  );
};

export default ECC;
