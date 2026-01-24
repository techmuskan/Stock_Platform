import React from "react";

const amcData = [
  { holdings: "Up to ₹4 lakh", amc: <span className="badge bg-success">FREE*</span> },
  { holdings: "₹4 lakh - ₹10 lakh", amc: "₹ 100 per year, charged quarterly*" },
  { holdings: "Above ₹10 lakh", amc: "₹ 300 per year, charged quarterly" },
];

const DematAMC = () => {
  return (
    <div className="container mt-3 p-5">
      <div className="fs-4 fw-semibold mb-3 px-5 mx-2">
        Demat AMC (Annual Maintenance Charge)
      </div>

      <div className="row px-5 mx-2">
        <table className="table table-striped">
        <thead className="border">
          <tr>
            <th>Value of holdings</th>
            <th>AMC</th>
          </tr>
        </thead>
        <tbody>
          {amcData.map((item, index) => (
            <tr key={index}>
              <td>{item.holdings}</td>
              <td>{item.amc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <p className="small px-5 mx-2">
        * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <span className="text-primary">click here</span>.
      </p>
    </div>
  );
};

export default DematAMC;
