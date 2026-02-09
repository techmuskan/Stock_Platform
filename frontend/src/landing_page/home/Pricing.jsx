import React from 'react'

const Pricing = () => {
  return (
    <div className="container px-4 px-lg-5">
      <div className="row px-3 px-lg-5">
        <div className="col-12 col-lg-6 px-3 px-lg-5 mb-4 mb-lg-0">
          <h1 className='fs-3 py-2'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <button className='btn btn-link text-decoration-none p-0 m-0'>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
        </div>
        <div className="col-12 col-lg-6 px-3 px-lg-5">
          <div className="pricing-badges">
            <div className="pricing-badge">
              <img src="media/pricing0.svg" alt="" className="pricing-badge-img" />
              <p>Free account opening</p>
            </div>
            <div className="pricing-badge">
              <img src="media/pricing0.svg" alt="" className="pricing-badge-img" />
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="pricing-badge">
              <img src="media/intradayTrades.svg" alt="" className="pricing-badge-img" />
              <p>Intraday and F&amp;O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
