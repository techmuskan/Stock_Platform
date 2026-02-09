import React from 'react'

const Hero = () => {
  return (
    <div className="container px-4 px-lg-5 py-5">
      <div className="row px-3 px-lg-5 text-center mb-5">
        <h1 className='h2'>Charges</h1>
        <p className='fs-4' style={{color:"#9B9B9B"}}>List of all charges and taxes</p>
      </div>
      <div className="row px-3 px-lg-5 d-flex flex-row justify-content-center gap-4 pricing-hero-icons">
        <div className="col-12 col-md-3 text-center">
          <img src="media/pricing0.svg" alt="" className="pricing-hero-icon" />
        </div>
        <div className="col-12 col-md-3 text-center">
          <img src="media/intradayTrades.svg" alt="" className="pricing-hero-icon" />
        </div>
        <div className="col-12 col-md-3 text-center">
          <img src="media/pricing0.svg" alt="" className="pricing-hero-icon" />
        </div>
      </div>
      <div className="row text-center px-3 px-lg-5 mx-0 mx-lg-5">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h1 className='h3 pb-3'>Free equity delivery</h1>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h1 className='h3 pb-3'>Intraday and F&O trades</h1>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-12 col-md-4">
          <h1 className='h3 pb-3'>Free direct MF</h1>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
