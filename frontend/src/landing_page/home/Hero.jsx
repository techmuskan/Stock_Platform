import React from 'react'

const Hero = () => {
  return (
    <div className='container px-4 px-lg-5 py-5'>
      <div className='row text-center justify-content-center'>
        <div className="col-12 col-lg-8">
          <img src="media/homeHero.png" alt="Hero Img" className='mb-4 img-fluid'/>
          <h1 className='mt-5 fs-2'>Invest in everything</h1>
          <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <button className='p-2 btn btn-primary mt-4 fs-5 hero-cta'>Sign up for free</button>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
