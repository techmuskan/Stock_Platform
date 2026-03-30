import React from 'react'
import { useSiteContent } from "../content/SiteContentContext";

const OpenAccount = () => {
  const { openAccountContent } = useSiteContent();
  return (
    <div className="container p-5">
      <div className="row px-5 text-center">
        <h1 className='fs-3 py-2'>{openAccountContent.title}</h1>
        <p className='py-3'>{openAccountContent.description}</p>
        <button className='p-2 btn btn-primary mt-2 fs-5' style={{width:"30%", margin:"0 auto",}}>{openAccountContent.ctaLabel}</button>
      </div>
    </div>
  )
}

export default OpenAccount
