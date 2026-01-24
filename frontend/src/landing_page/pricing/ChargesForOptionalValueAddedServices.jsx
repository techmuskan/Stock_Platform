import React from "react";

const services = [
  { name: "Tickertape", frequency: "Monthly / Annual", charges: "Free: 0 | Pro: 249/2399" },
  { name: "Smallcase", frequency: "Per transaction", charges: "Buy & Invest More: 100 | SIP: 10" },
  { name: "Kite Connect", frequency: "Monthly", charges: "Connect: 500 | Personal: Free" },
];

const ChargesForOptionalValueAddedServices = () => {
  return (
    <div className="container px-5 pt-5">
      <div className="fs-4 fw-semibold mb-3 mx-2 px-5">
        Charges for optional value added services
      </div>

      <div className="row px-5 mx-2">
        <table className="table table-striped ">
        <thead className="border">
          <tr>
            <th>Service</th>
            <th>Billing Frequency</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td>{service.frequency}</td>
              <td>{service.charges}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ChargesForOptionalValueAddedServices;
