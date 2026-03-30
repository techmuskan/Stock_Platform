import React from 'react'
import { Link } from "react-router-dom";
import { useSiteContent } from "../../content/SiteContentContext";

const Universe = () => {
  const { universeContent } = useSiteContent();
  return (
    <div className="container px-4 px-lg-5 py-5">
      <div className="row px-3 px-lg-5 pb-5">
        <p className='text-center px-3 px-lg-5 h5'>
          {universeContent.intro}{" "}
          <Link to={universeContent.introHref} className="text-decoration-none">
            {universeContent.introLabel}
          </Link>
          .
        </p>
      </div>
      <div className="row px-3 px-lg-5 text-center">
        <h1 className='fs-3'>{universeContent.title}</h1>
        <p className='fs-5 py-3'>{universeContent.description}</p>
        <div className="row px-3 px-lg-5 pt-4">
          {universeContent.partners.slice(0, 3).map((partner) => (
            <div className="col-12 col-md-4 h-100 d-flex flex-column align-items-center justify-content-between mb-4 mb-md-0" key={partner.alt}>
              <img src={partner.image} className={`universe-logo ${partner.sizeClass}`} alt={partner.alt} />
              <p className='small pt-3'>{partner.description}</p>
            </div>
          ))}
        </div>
        <div className="row h-100 px-3 px-lg-5 pt-5">
          {universeContent.partners.slice(3).map((partner) => (
            <div className="col-12 col-md-4 h-100 mb-4 mb-md-0" key={partner.alt}>
              <img src={partner.image} className={`universe-logo ${partner.sizeClass}`} alt={partner.alt} />
              <p className='small pt-3'>{partner.description}</p>
            </div>
          ))}
        </div>
        <button className='p-2 btn mt-4 fs-5 universe-cta'>{universeContent.ctaLabel}</button>
      </div>
    </div>
  )
}

export default Universe
