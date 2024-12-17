import React from "react";
import Card from "../Card/Card.js";
import { useNavigate } from "react-router-dom";
import accommodations from "../../data/accommodationsData.json"; 
import "../../styles/Main.scss";

const CardGridLayout = () => {
  const navigate = useNavigate();
  const handleCardClick = (accommodationId) => {
    navigate(`/details/${accommodationId}`);
  };
  return (
    <div className="card-grid">
      {accommodations.map((accommodation) => (
        <div 
          className="cards" 
          key={accommodation.id}   
          onClick={() => handleCardClick(accommodation.id)} 
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