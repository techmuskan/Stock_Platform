import React from 'react'

const Team = () => {
  return (
    <div className="container px-5">
      <h1 className='px-5 text-center fs-2' style={{color:"#424242"}}>People</h1>
      <div className="row px-5 py-4 justify-content-center">
        <div className="col-4 text-center lh-sm">
          <img src="media/nithinKamath.jpg" alt="" style={{borderRadius:"50%", width:"75%"}} />
          <p className='pt-4 fs-4 m-0 pb-1'>Nithin Kamath</p>
          <p>Founder, CEO</p>
        </div>
        <div className="col-7 pt-3">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>

      </div>
    </div>
  )
}

export default Team
