import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-light py-4">
        <div className="container px-4 px-lg-5 pt-3">
          <div className="row px-3 px-lg-5 align-items-center">
            <div className="col-12 col-lg-10">
              <h1 className="fs-2">Support Portal</h1>
            </div>
            <div className="col-12 col-lg-2 px-3 px-lg-5 mt-3 mt-lg-0 text-lg-end">
              <h4 className="fs-4 px-3">
                <span className="badge bg-primary py-2 ">My Tickets</span>
              </h4>
            </div>
          </div>
          <div className="row px-3 px-lg-5 py-4">
            <div className="col-12 position-relative">
              <i
                className="fa fa-search position-absolute text-muted"
                style={{
                  top: "50%",
                  left: "30px",
                  transform: "translateY(-50%)",
                }}
              ></i>

              <input
                type="text"
                className="form-control px-5 py-3 "
                placeholder="Eg: How do I open my account, How do I activate F&O..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
