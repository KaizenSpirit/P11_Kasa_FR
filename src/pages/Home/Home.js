import React, {useEffect, useState} from "react";
import CardDetailsContainer from "../CardDetails/CardDetails.js"
import Banner from "../../components/Banner/Banner.js"
import {useLocation, useNavigate} from "react-router-dom";
import Card from "./Card/Card.js";
import accommodations from "../../data/accommodationsData.json"; 
import "../../styles/Main.scss";


const Home = () => {
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const location = useLocation()

  useEffect(() => {
    setSelectedAccommodation(null);
  }, [location]);

  const navigate = useNavigate();
  const handleCardClick = (accommodationId) => {
    navigate(`/details/${accommodationId}`);
  };

  return (
    <div>

    {!selectedAccommodation ? (
      <>
        <Banner 
          text="Chez vous, partout et ailleurs" 
          image="/img/ImageAcceuil.png" 
        />


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

      </>
    ) : (
      <CardDetailsContainer accommodation={selectedAccommodation} />
    )}
  </div>

  );
};

export default Home;










