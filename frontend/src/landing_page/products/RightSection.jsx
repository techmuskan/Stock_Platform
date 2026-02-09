import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) => {
  return (
    <div className="container px-4 px-lg-5 py-5">
      <div className="row px-3 px-lg-5">
        <div className="col-12 col-lg-5 px-3 px-lg-5 d-flex flex-column justify-content-center mb-4 mb-lg-0">
          <h1 className="fs-3 py-2">{productName}</h1>
          <p className="lh-lg tracking-tight">{productDescription}</p>
          <div className="d-flex gap-3 gap-lg-5 pb-4 flex-wrap">
            <a className="text-decoration-none" href={tryDemo}>
              {tryDemo}{" "}
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-7 px-3 px-lg-5 text-center">
          <img src={imageURL} alt="" className="product-hero" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
