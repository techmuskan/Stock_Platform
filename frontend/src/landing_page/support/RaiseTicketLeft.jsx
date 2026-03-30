import React from "react";

const RaiseTicketLeft = ({ categories }) => {
  if (categories.length === 0) {
    return (
      <div className="py-5">
        <div className="border rounded p-4 bg-white">
          <h5 className="mb-2">No help topics found</h5>
          <p className="mb-0 text-muted">Try a broader search term to see matching support categories.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {categories.map((category, index) => {
          const collapseId = `support-category-${index}`;
          return (
            <div className="accordion-item" key={category.title}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={collapseId}
                >
                  <i className={`fa ${category.icon}`} aria-hidden="true"></i>
                  {category.title}
                  <span className="right-arrow">
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </span>
                </button>
              </h2>
              <div
                id={collapseId}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              >
                <div className="accordion-body">
                  <ul>
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RaiseTicketLeft;
