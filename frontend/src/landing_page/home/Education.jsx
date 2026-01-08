import React from 'react'

const Education = () => {
  return (
    <div className="container p-5">
      <div className="row px-5 align-items-center">
        <div className="col-6">
          <img style={{maxWidth:"100%", width:"auto"}} src="media/education.svg" alt="" />
        </div>
        <div className="col-6">
          <h1 className='fs-3 py-3' >Free and open market education</h1>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <button className='btn btn-link text-decoration-none p-0 m-0 pb-4'>
            Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
          <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <button className='btn btn-link text-decoration-none p-0 m-0'>
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Education
