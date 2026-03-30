import React from 'react'
import { Link } from "react-router-dom";
import { useSiteContent } from "../../content/SiteContentContext";

const ChargesExplained = () => {
  const { pricingChargesContent } = useSiteContent();
  const renderSection = (section) => (
    <div key={section.title}>
      <h6>{section.title}</h6>
      {section.paragraphs?.map((paragraph) => (
        <p className='small' key={paragraph}>{paragraph}</p>
      ))}
      {section.list && (
        <ul className='small'>
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.links?.length > 0 && (
        <p className='small'>
          {section.links.map((link, index) => (
            <React.Fragment key={link.label}>
              {index > 0 ? " | " : ""}
              <Link className='text-decoration-none' to={link.href}>
                {link.label}
              </Link>
            </React.Fragment>
          ))}
        </p>
      )}
    </div>
  );

  return (
    <div className="container pt-4 px-5">
      <div className="row px-5">
        <h1 className='h3 py-4'>Charges explained</h1>
        <div className="col-6">
          {pricingChargesContent.leftColumn.map(renderSection)}
        </div>
        <div className="col-6">
          {pricingChargesContent.rightColumn.map(renderSection)}
        </div>

        <h6 className='pt-2'>Disclaimer</h6>
        <p className='small'>{pricingChargesContent.disclaimer}</p>
      </div>
    </div>
  )
}

export default ChargesExplained
