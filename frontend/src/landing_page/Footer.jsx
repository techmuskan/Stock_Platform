import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid bg-light border-top pt-3 px-sm-3 px-md-5">

      <div className="row px-5 d-flex flex-wrap justify-content-center gap-4 pt-4 mx-5" >
        <div className="col col-3">
          <img className='py-3' src="media/logo.svg" alt="logo" style={{ width: "70%", maxWidth: "100%" }} />
          <p className='small text-muted mb-2 pb-4'>© 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.</p>
          <div className='d-flex gap-3'>
            <i class="fa fa-brands fa-twitter fa-lg"></i>
            <i class="fa fa-brands fa-facebook fa-lg"></i>
            <i class="fa fa-brands fa-instagram fa-lg"></i>
            <i class="fa fa-brands fa-linkedin fa-lg"></i>
          </div>
          <hr />
          <div className='d-flex gap-3'>
            <i class="fa fa-brands fa-youtube fa-lg"></i>
            <i class="fa fa-brands fa-whatsapp fa-lg"></i>
            <i class="fa fa-brands fa-telegram fa-lg"></i>
          </div>
        </div>
        <div className="col ">
          <h1 className='fs-5'>Account</h1>
          <ul className='list-unstyled'>
            <li>Open demat account</li>
            <li>Minor demat account</li>
            <li>NRI demat account</li>
            <li>Commodity</li>
            <li>Dematerialisation</li>
            <li>Fund transfer</li>
            <li>MTF</li>
            <li>Referral program</li>

          </ul>
        </div>
        <div className="col">
          <h1 className='fs-5'>Support</h1>
          <ul className='list-unstyled'>
            <li>Contact us</li>
            <li>Support portal</li>
            <li>How to file a complaint?</li>
            <li>Status of your complaints</li>
            <li>Bulletin</li>
            <li>Circular</li>
            <li>Z-Connect blog</li>
            <li>Downloads</li>
          </ul>
        </div>
        <div className="col">
          <h1 className='fs-5'>Company</h1>
          <ul className='list-unstyled'>
            <li>About</li>
            <li>Philosophy</li>
            <li>Press & media</li>
            <li>Careers</li>
            <li>Zerodha Cares (CSR)</li>
            <li>Zerodha.tech</li>
            <li>Open Source</li>
          </ul>
        </div>
        <div className="col">
          <h1 className='fs-5'>Quick links</h1>
          <ul className='list-unstyled'>
            <li>Upcoming IPOs</li>
            <li>Brokerage charges</li>
            <li>Market holidays</li>
            <li>Economic calender</li>
            <li>Calculators</li>
            <li>Markets</li>
            <li>Sectors</li>
          </ul>
        </div>
      </div>
      <div className="row small text-muted mb-2 px-sm-3 px-md-5 footer-text mx-5 pt-3 px-5" >
        <p >Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
        <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
        <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
      </div>
      <div className="row px-5 px-sm-3 px-md-5 pb-3 mx-5">
        <div className="d-flex flex-wrap justify-content-center gap-4">
          <button className="btn btn-link text-decoration-none p-0">NSE</button>
          <button className="btn btn-link text-decoration-none p-0">BSE</button>
          <button className="btn btn-link text-decoration-none p-0">MCX</button>
          <button className="btn btn-link text-decoration-none p-0">Terms & conditions</button>
          <button className="btn btn-link text-decoration-none p-0">Policies & procedures</button>
          <button className="btn btn-link text-decoration-none p-0">Privacy policy </button>
          <button className="btn btn-link text-decoration-none p-0">Disclosure </button>
          <button className="btn btn-link text-decoration-none p-0">For investor's attention </button>
          <button className="btn btn-link text-decoration-none p-0">Investor charter </button>
        </div>
      </div>

    </div>
  )
}

export default Footer
