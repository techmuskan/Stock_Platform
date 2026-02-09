import React from 'react'

const Stats = () => {
  return (
    <div className="container px-4 px-lg-5 py-5">
      <div className="row px-3 px-lg-5 align-items-center">
        <div className="col-12 col-lg-6 px-3 px-lg-5">
          <h1 className='fs-3 py-5'>Trust with confidence</h1>
          <div className="pb-3">
            <h3 className='fs-4'>Customer-first always</h3>
            <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          </div>
          <div className="pb-3">
            <h3 className='fs-4'>No spam or gimmicks</h3>
            <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
          </div>
          <div className="pb-3">
            <h3 className='fs-4'>The Zerodha universe</h3>
            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          </div>
          <div className="pb-3">
            <h3 className='fs-4'>Do better with money</h3>
            <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
        </div>
        <div className="col-12 col-lg-6 mt-4 mt-lg-0">
          <img src="media/trust.png" alt="" style={{maxWidth:"100%", width:"auto"}} />
          <div className='text-center'>
            <button className='btn btn-link text-decoration-none'>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
            <button className='btn btn-link text-decoration-none'>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>
      <div className="row py-5 justify-content-center">
        <img src="media/pressLogos.png" alt="" style={{maxWidth:"100%", width:"auto"}} />
      </div>
    </div>
  )
}

export default Stats
