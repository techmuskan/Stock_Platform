import React from "react";

const accountCharges = [
  { type: "Online account", charges: <span className="badge bg-success">FREE</span> },
  { type: "Offline account", charges: <span className="badge bg-success">FREE</span> },
  { type: "NRI account (offline only)", charges: "₹ 500" },
  { type: "Partnership, LLP, HUF, or Corporate accounts (offline only)", charges: "₹ 500" },
];

const ChargesForAccOpening = () => {
  return (
    <div className="container mt-3 p-5 ">
      <div className="fs-4 fw-semibold mb-3 px-5 mx-2">
        Charges for account opening
      </div>

      <div className="row px-5 mx-2">
        <table className="table table-striped">
        <thead className="border">
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          {accountCharges.map((account, index) => (
            <tr key={index}>
              <td>{account.type}</td>
              <td>{account.charges}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ChargesForAccOpening;
