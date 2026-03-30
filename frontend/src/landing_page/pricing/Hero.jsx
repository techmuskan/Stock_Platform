import React from 'react'
import { useSiteContent } from "../../content/SiteContentContext";

const Hero = () => {
  const { pricingHeroContent } = useSiteContent();
  return (
    <div className="container px-4 px-lg-5 py-5">
      <div className="row px-3 px-lg-5 text-center mb-5">
        <h1 className='h2'>{pricingHeroContent.title}</h1>
        <p className='fs-4' style={{color:"#9B9B9B"}}>{pricingHeroContent.subtitle}</p>
      </div>
      <div className="row px-3 px-lg-5 d-flex flex-row justify-content-center gap-4 pricing-hero-icons">
        {pricingHeroContent.highlights.map((item) => (
          <div className="col-12 col-md-3 text-center" key={item.title}>
            <img src={item.image} alt={item.alt} className="pricing-hero-icon" />
          </div>
        ))}
      </div>
      <div className="row text-center px-3 px-lg-5 mx-0 mx-lg-5">
        {pricingHeroContent.highlights.map((item) => (
          <div className="col-12 col-md-4 mb-4 mb-md-0" key={item.title}>
            <h1 className='h3 pb-3'>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
