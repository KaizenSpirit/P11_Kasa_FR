import React from "react";
import Card from "../Card/Card.js";
import accommodations from "../../data/accommodationsData.json"; 
import "../../styles/Main.scss";

const CardGridLayout = ({onSelectAccommodation}) => {
  return (
    <div className="card-grid">
      {accommodations.map((accommodation) => (
        <div 
          className="cards" 
          key={accommodation.id}   
          onClick={() => onSelectAccommodation(accommodation)} 
          >
          <Card
            title={accommodation.title} 
            cover={accommodation.cover} 
          />
        </div>
      ))}
    </div>
  )
};

export default CardGridLayout;