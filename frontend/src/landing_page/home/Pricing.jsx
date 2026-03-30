import React from 'react'
import { Link } from "react-router-dom";
import { useSiteContent } from "../../content/SiteContentContext";

const Pricing = () => {
  const { homePricingContent } = useSiteContent();
  return (
    <div className="container px-4 px-lg-5">
      <div className="row px-3 px-lg-5">
        <div className="col-12 col-lg-6 px-3 px-lg-5 mb-4 mb-lg-0">
          <h1 className='fs-3 py-2'>{homePricingContent.title}</h1>
          <p>{homePricingContent.description}</p>
          <Link className='btn btn-link text-decoration-none p-0 m-0' to={homePricingContent.cta.href}>
            {homePricingContent.cta.label} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="col-12 col-lg-6 px-3 px-lg-5">
          <div className="pricing-badges">
            {homePricingContent.badges.map((badge) => (
              <div className="pricing-badge" key={badge.label}>
                <img src={badge.image} alt={badge.alt} className="pricing-badge-img" />
                <p>{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
