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
    <div className="container px-4 px-lg-5 py-5">
      <div className="row px-3 px-lg-5 d-flex align-items-center">
        <div className="col-12 col-lg-7 px-3 px-lg-5 text-center mb-4 mb-lg-0">
          <img src={imageURL} alt="" className="product-hero" />
        </div>
        <div className="col-12 col-lg-5 d-flex flex-column justify-content-center">
          <h1 className="fs-3 py-2">{productName}</h1>
          <p className="lh-lg tracking-tight">{productDescription}</p>
          <div className="d-flex gap-3 gap-lg-5 pb-4 flex-wrap">
            <a className="text-decoration-none" href={tryDemo}>{tryDemo} </a>
            <a className="text-decoration-none" href={learnMore}>{learnMore} </a>
          </div>
          <div className="d-flex gap-4 flex-wrap">
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
