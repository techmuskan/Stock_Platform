import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container p-5">
      <div className="row px-5 d-flex align-items-between">
        <div className="col-8 px-5 text-center">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-4 d-flex flex-column justify-content-center">
          <h1 className="fs-3 py-2">{productName}</h1>
          <p className="lh-lg tracking-tight">{productDescription}</p>
          <div className="d-flex gap-5 pb-4">
            <a className="text-decoration-none" href={tryDemo}>{tryDemo} </a>
            <a className="text-decoration-none" href={learnMore}>{learnMore} </a>
          </div>
          <div className="d-flex gap-4">
            <a href={googlePlay}>
              <img src="media/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="media/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
