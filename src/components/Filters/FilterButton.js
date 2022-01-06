import React from "react";

const FilterButton = ({ name, index, item }) => {
  return (
    <div>
        <style jsx>
            {`

            .x:checked + label{
                background-color: #0b5ed7;
                color:white;
            }
            input[type="radio"]{
                display:none;
            }
            `}
        </style>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name="flexRadioDefault"
          id={`${name}-${index}`}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;
