import React from "react";
import Banner from'../Banner/Banner.js';
import "../../styles/Main.scss";

const CardDetailsContainer = ({accommodation}) => {
  return (
    <div className="section-details">
        <Banner pictures={accommodation.pictures}/>
      <p>{accommodation.description}</p>
    </div>
  );
};

export default CardDetailsContainer;