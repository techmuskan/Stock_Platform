import React from 'react'
import { useSiteContent } from "../../content/SiteContentContext";

const Hero = () => {
  const { homeHeroContent } = useSiteContent();
  return (
    <div className='container px-4 px-lg-5 py-5'>
      <div className='row text-center justify-content-center'>
        <div className="col-12 col-lg-8">
          <img src={homeHeroContent.image} alt="Hero Img" className='mb-4 img-fluid'/>
          <h1 className='mt-5 fs-2'>{homeHeroContent.title}</h1>
          <p className='fs-5'>{homeHeroContent.description}</p>
          <button className='p-2 btn btn-primary mt-4 fs-5 hero-cta'>{homeHeroContent.ctaLabel}</button>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
