import React from 'react'
import { Link } from "react-router-dom";
import { useSiteContent } from "../../content/SiteContentContext";

const Stats = () => {
  const { homeStatsContent } = useSiteContent();
  return (
    <div className="container px-4 px-lg-5 py-5">
      <div className="row px-3 px-lg-5 align-items-center">
        <div className="col-12 col-lg-6 px-3 px-lg-5">
          <h1 className='fs-3 py-5'>{homeStatsContent.title}</h1>
          {homeStatsContent.sections.map((section) => (
            <div className="pb-3" key={section.title}>
              <h3 className='fs-4'>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
        <div className="col-12 col-lg-6 mt-4 mt-lg-0">
          <img src={homeStatsContent.visual} alt="" style={{maxWidth:"100%", width:"auto"}} />
          <div className='text-center'>
            {homeStatsContent.actions.map((action) => (
              <Link className='btn btn-link text-decoration-none' key={action.label} to={action.href}>
                {action.label} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="row py-5 justify-content-center">
        <img src={homeStatsContent.logosImage} alt="" style={{maxWidth:"100%", width:"auto"}} />
      </div>
    </div>
  )
}

export default Stats
