import React from 'react'
import { Link } from "react-router-dom";
import { useSiteContent } from "../../content/SiteContentContext";

const Hero = () => {
  const { productsHeroContent } = useSiteContent();
  return (
  <div className="container px-4 px-lg-5 py-5" style={{color:"#424242"}}>
    <div className="row px-3 px-lg-5 text-center">
      <h1 className='fs-3'>{productsHeroContent.title}</h1>
      <p className='fs-5 pt-2'>{productsHeroContent.subtitle}</p>
      <p className='pt-2'>
        Check out our{" "}
        <Link className="text-decoration-none" style={{color:"#387ED1"}} to={productsHeroContent.calloutHref}>
          {productsHeroContent.calloutLabel} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </Link>
      </p>
    </div>
    <hr />
  </div>
  )
}

export default Hero
