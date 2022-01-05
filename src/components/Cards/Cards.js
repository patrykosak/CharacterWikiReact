import React from "react";

const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results?.map((character) => {
      const { id, name, image, location } = character;
      return (
        <div className="col-4" key={id}>
          <div className="">
            <img src={image} alt="" className="img-fluid " />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6">Last location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No Characters Found";
  }
  return <>{display}</>;
};

export default Cards;
