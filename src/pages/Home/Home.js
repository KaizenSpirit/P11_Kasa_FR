import React from "react";
import Banner from "../../components/Banner/Banner.js";
import Card from "./Card/Card.js";
import accommodations from "../../data/accommodationsData.json"; 
import "../../styles/Main.scss";

const Home = () => {
  return (
    <div>
      <Banner 
        text="Chez vous, partout et ailleurs" 
        pictures={["/img/ImageAcceuil.png"]}
      />

      <div className="card-grid">
        {accommodations.map((accommodation) => (
          <Card
            key={accommodation.id}
            id={accommodation.id} 
            title={accommodation.title} 
            cover={accommodation.cover} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
