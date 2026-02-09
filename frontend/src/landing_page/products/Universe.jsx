import React from 'react'

const Universe = () => {
  return (
    <div className="container px-4 px-lg-5 py-5">
      <div className="row px-3 px-lg-5 pb-5">
        <p className='text-center px-3 px-lg-5 h5'>Want to know more about our technology stack? Check out the <a href="" className="text-decoration-none ">Zerodha.tech</a> blog.</p>
      </div>
      <div className="row px-3 px-lg-5 text-center">
        <h1 className='fs-3'>The Zerodha Universe</h1>
        <p className='fs-5 py-3'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="row px-3 px-lg-5 pt-4">
          <div className="col-12 col-md-4 h-100 d-flex flex-column align-items-center justify-content-between mb-4 mb-md-0">
            <img src="media/zerodhaFundhouse.png" className="universe-logo universe-logo-sm" alt="" />
            <p className='small pt-3'>Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.</p>
          </div>
          <div className="col-12 col-md-4 h-100 d-flex flex-column align-items-center justify-content-between mb-4 mb-md-0">
            <img src="media/sensibullLogo.svg" className="universe-logo universe-logo-md" alt="" />
            <p className='small pt-3'>Options trading platform that lets you <br />
              create strategies, analyze positions, and examine <br />
              data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className="col-12 col-md-4 h-100 d-flex flex-column align-items-center justify-content-between">
            <img src="media/goldenpiLogo.png" className="universe-logo universe-logo-sm" alt="" />
            <p className='small pt-3'>Investment research platform <br />
              that offers detailed insights on stocks, <br />
              sectors, supply chains, and more.</p>
          </div>
        </div>
        <div className="row h-100 px-3 px-lg-5 pt-5">
          <div className="col-12 col-md-4 h-100 mb-4 mb-md-0">
            <img src="media/streakLogo.png" className="universe-logo universe-logo-sm" alt="" />
            <p className='small pt-3'>Systematic trading platform <br />
              that allows you to create and backtest <br />
              strategies without coding.</p>
          </div>
          <div className="col-12 col-md-4 h-100 mb-4 mb-md-0">
            <img src="media/smallcaseLogo.png" className="universe-logo universe-logo-md" alt="" />
            <p className='small pt-3'>Thematic investing platform <br />
              that helps you invest in diversified <br />
              baskets of stocks on ETFs.</p>
          </div>
          <div className="col-12 col-md-4 h-100">
            <img src="media/dittoLogo.png" className="universe-logo universe-logo-xs" alt="" />
            <p className='small pt-3'>Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling.</p>
          </div>
        </div>
        <button className='p-2 btn mt-4 fs-5 universe-cta'>Sign up for free</button>
      </div>
    </div>
  )
}

export default Universe
