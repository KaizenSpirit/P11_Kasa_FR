import React, {useEffect, useState} from "react";
import CardGridLayout from "../../components/CardGridLayout/CardGridLayout.js"
import CardDetailsContainer from "../../components/CardDetails/CardDetailsContainer.js"
import Banner from "../../components/Banner/Banner.js"
import {useLocation} from "react-router-dom";
const Home = () => {

  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const location = useLocation()

  useEffect(() => {
    setSelectedAccommodation(null);
  }, [location]);

  const handleSelectAccommodation = (accommodation) => {
    setSelectedAccommodation(accommodation);
  };

  return (
    <div>
      {!selectedAccommodation &&
        <Banner 
        text="Chez vous, partout et ailleurs" 
        image="/img/ImageAcceuil.png" 
      />}
            {!selectedAccommodation ? (
        <CardGridLayout onSelectAccommodation={handleSelectAccommodation} />
      ) : (
        <CardDetailsContainer accommodation={selectedAccommodation} />
      )}
    </div>

  );
};

export default Home;
