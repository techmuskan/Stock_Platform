import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) => {
  return (
    <div className="container p-5">
      <div className="row px-5 ">
        <div className="col-5 px-5 d-flex flex-column justify-content-center">
          <h1 className="fs-3 py-2">{productName}</h1>
          <p className="lh-lg tracking-tight">{productDescription}</p>
          <div className="d-flex gap-5 pb-4">
            <a className="text-decoration-none" href={tryDemo}>
              {tryDemo}{" "}
            </a>
          </div>
        </div>
        <div className="col-7 px-5 text-center">
          <img style={{ maxWidth: "auto" }} src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
