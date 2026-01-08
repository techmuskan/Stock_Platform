import React from 'react'

const Pricing = () => {
  return (
    <div className="container px-5">
      <div className="row px-5">
        <div className="col-6 px-5">
          <h1 className='fs-3 py-2'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <button className='btn btn-link text-decoration-none p-0 m-0'>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
        </div>
        <div className="col-6 d-flex flex-row px-5 align-items-center" >
          <div className='col-4 d-flex flex-row align-items-end'>
            <img src="media/pricing0.svg" alt="" style={{maxWidth:"70%", width:"auto", right:"100px"}} className='position-relative'/>
            <p className='text-nowrap position-absolute' style={{fontSize:"0.7rem" }}> Free account <br /> opening</p>
          </div>
          <div className='col-4 d-flex flex-row  align-items-end' >
            <img src="media/pricing0.svg" alt="" style={{maxWidth:"70%", width:"auto", right:"100px"}} className='position-relative' />
            <p className='text-nowrap position-absolute'  style={{fontSize:"0.7rem"}}>Free equity delivery <br /> and direct mutual funds</p>
          </div>
          <div className=' col-4 d-flex flex-row align-items-end' >
            <img src="media/intradayTrades.svg" alt="" style={{maxWidth:"70%", width:"auto", right:"40px"}} className='position-relative'/>
            <p className='text-nowrap position-absolute'  style={{fontSize:"0.7rem", right:"260px"}}> Intraday and <br />F&O</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
