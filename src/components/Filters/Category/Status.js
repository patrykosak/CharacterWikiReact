import React from "react";
import FilterButton from "../FilterButton";

const Status = ({ setStatus, setPageNumber }) => {
  const status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseThree"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse show"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((item, index) => {
            return (
              <FilterButton
                task={setStatus}
                setPageNumber={setPageNumber}
                key={index}
                name="status"
                item={item}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Status;
