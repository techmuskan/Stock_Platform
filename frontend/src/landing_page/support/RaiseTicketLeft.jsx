import React from "react";
const RaiseTicketLeft = () => {
  return (
    <div className="p-2">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item ">
          <h2 className="accordion-header">
            <button
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
              Account Opening
              <span className="right-arrow">
  <i className="fa fa-chevron-down"></i>
</span>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse "
          >
            <div className="accordion-body">
              <ul>
                <li>Resident individual</li>
                <li>Minor</li>
                <li>Non Resident Indian</li>
                <li>Company, Partnership, HUF and LLP</li>
                <li>Glossary</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item ">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <i className="fa fa-user" aria-hidden="true"></i>
              Your Zerodha Account
              <span className="right-arrow">
  <i className="fa fa-chevron-down"></i>
</span>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <ul>
                <li>Your Profile</li>
                <li>Account Modification</li>
                <li>
                  Client Master Report (CMR) and Depository Participant (DP)
                </li>
                <li>Nomination</li>
                <li>Transfer and conversion of securities</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <i className="fa fa-google-wallet" aria-hidden="true"></i>
              Kite
              <span className="right-arrow">
  <i className="fa fa-chevron-down"></i>
</span>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <ul>
                <li>IPO</li>
                <li>Trading FAQs</li>
                <li>Margin Trading Facility (MTF) and Margins</li>
                <li>Charts and orders</li>
                <li>Alerts and Nudges</li>
                <li>General</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              <i className="fa fa-inr" aria-hidden="true"></i>
              Funds
              <span className="right-arrow">
  <i className="fa fa-chevron-down"></i>
</span>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <ul>
                <li>Add Money</li>
                <li>Withdraw Money</li>
                <li>Add bank accounts</li>
                <li>eMandates</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              <i className="fa fa-connectdevelop" aria-hidden="true"></i>
              Console<span className="right-arrow">
  <i className="fa fa-chevron-down"></i>
</span>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <ul>
                <li>Portfolio</li>
                <li>Corporate actions</li>
                <li>Funds statement</li>
                <li>Reports</li>
                <li>Profile</li>
                <li>Segments</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSix"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSix"
            >
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Coin
              <span className="right-arrow">
  <i className="fa fa-chevron-down"></i>
</span>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSix"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <ul>
                <li>Mutual funds</li>
                <li>National Pension Scheme (NPS)</li>
                <li>Fixed Deposit (FD)</li>
                <li>Features on Coin</li>
                <li>Payments and Orders</li>
                <li>General</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaiseTicketLeft;
