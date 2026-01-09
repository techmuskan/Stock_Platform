import React from 'react'

const Universe = () => {
  return (
    <div className="container p-5">
      <div className="row p-5 text-center">
        <h1 className='fs-3'>The Zerodha Universe</h1>
        <p className='fs-5 py-3'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="row px-5 pt-4">
          <div className="col-4 h-100 d-flex flex-column align-items-center justify-content-between">
            <img src="media/zerodhaFundhouse.png" style={{maxWidth:"auto", width:"40%"}} alt="" />
            <p className='small pt-3'>Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.</p>
          </div>
          <div className="col-4 h-100 d-flex flex-column align-items-center justify-content-between">
            <img src="media/sensibullLogo.svg" style={{maxWidth:"auto", width:"50%"}} alt="" />
            <p className='small pt-3'>Options trading platform that lets you <br />
              create strategies, analyze positions, and examine <br />
              data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className="col-4 h-100 d-flex flex-column align-items-center justify-content-between">
            <img src="media/goldenpiLogo.png" style={{maxWidth:"auto", width:"40%"}} alt="" />
            <p className='small pt-3'>Investment research platform <br />
              that offers detailed insights on stocks, <br />
              sectors, supply chains, and more.</p>
          </div>
        </div>
        <div className="row h-100 px-5 pt-5">
          <div className="col-4 h-100">
            <img src="media/streakLogo.png" style={{maxWidth:"auto", width:"40%"}} alt="" />
            <p className='small pt-3'>Systematic trading platform <br />
              that allows you to create and backtest <br />
              strategies without coding.</p>
          </div>
          <div className="col-4 h-100">
            <img src="media/smallcaseLogo.png" style={{maxWidth:"auto", width:"50%"}} alt="" />
            <p className='small pt-3'>Thematic investing platform <br />
              that helps you invest in diversified <br />
              baskets of stocks on ETFs.</p>
          </div>
          <div className="col-4 h-100">
            <img src="media/dittoLogo.png" style={{maxWidth:"auto", width:"30%"}} alt="" />
            <p className='small pt-3'>Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling.</p>
          </div>
        </div>
        <button className='p-2 btn mt-4 fs-5' style={{ width: "20%", margin: "0 auto", backgroundColor: "#387ED1" }}>Sign up for free</button>
      </div>
    </div>
  )
}

export default Universe
