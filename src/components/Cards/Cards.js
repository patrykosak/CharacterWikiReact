import React from "react";
import styles from "./Cards.module.scss";

const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results?.map((character) => {
      const { id, name, image, location, status } = character;
      return (
        <div className="col-4 position-relative" key={id}>
          <div className="">
            <img src={image} alt="" className="img-fluid " />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6">Last location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
          <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
        </div>
      );
    });
  } else {
    display = "No Characters Found";
  }
  return <>{display}</>;
};

export default Cards;
