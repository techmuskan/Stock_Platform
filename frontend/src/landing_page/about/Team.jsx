import React from 'react'
import { Link } from "react-router-dom";
import { useSiteContent } from "../../content/SiteContentContext";

const Team = () => {
  const { aboutTeamContent } = useSiteContent();
  return (
    <div className="container px-4 px-lg-5">
      <h1 className='px-3 px-lg-5 text-center fs-2' style={{color:"#424242"}}>{aboutTeamContent.title}</h1>
      {aboutTeamContent.members.map((member) => (
        <div className="row px-3 px-lg-5 py-4 justify-content-center" key={member.name}>
          <div className="col-12 col-lg-4 text-center lh-sm mb-4 mb-lg-0">
            <img src={member.image} alt={member.name} className="team-photo" />
            <p className='pt-4 fs-4 m-0 pb-1'>{member.name}</p>
            <p>{member.role}</p>
          </div>
          <div className="col-12 col-lg-7 pt-3">
            {member.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              {member.links.map((link, index) => (
                <React.Fragment key={link.label}>
                  {index > 0 ? " / " : ""}
                  <Link className="text-decoration-none" to={link.href}>
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Team
