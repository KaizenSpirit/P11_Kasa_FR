import React from "react";
import "../../styles/Main.scss";

const CardDetailsContainer = ({accommodation}) => {
  return (
    <div className="container-card-details">
      <h1>{accommodation.title}</h1>
      <img src={accommodation.cover} alt={accommodation.title} />
      <p>{accommodation.description}</p>
    </div>
  );
};

export default CardDetailsContainer;