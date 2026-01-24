import React from 'react'

const Hero = () => {
  return (
    <div className="container p-5">
      <div className="row p-5 text-center mb-5">
        <h1 className='h2'>Charges</h1>
        <p className='fs-4' style={{color:"#9B9B9B"}}>List of all charges and taxes</p>
      </div>
      <div className="row px-5 d-flex flex-row justify-content-center gap-5">
        <img src="media/pricing0.svg" alt="" style={{width:"25%"}}  />
        <img src="media/intradayTrades.svg" alt="" style={{width:"25%"}} />
        <img src="media/pricing0.svg" alt="" style={{width:"25%"}} />
      </div>
      <div className="row text-center px-5 mx-5">
        <div className="col-4">
          <h1 className='h3 pb-3'>Free equity delivery</h1>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4">
          <h1 className='h3 pb-3'>Intraday and F&O trades</h1>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4">
          <h1 className='h3 pb-3'>Free direct MF</h1>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
