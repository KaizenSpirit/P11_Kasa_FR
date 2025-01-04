import React from "react";
import { useParams } from "react-router-dom";
import Banner from'../../components/Banner/Banner.js';
import Accordion from '../../components/Accordion/Accordion.js';
import Owner from "./components/Owner/Owner.js";
import TypeFlat from "./components/TypeOfFlat/TypeOfFlat.js";
import Tag from "./components/Tags/Tags.js";
import Rating from "./components/Rating/Rating.js";
import accommodations from "../../data/accommodationsData.json";

import Error404 from "../Error404/Error404";

const CardDetails = () => {
  const { id } = useParams(); 
  const accommodation = accommodations.find((item) => item.id === id);

  if (!accommodation) {
    return <Error404 />;
  }

  return (
    <div className="section-details">
    <Banner pictures={accommodation.pictures} isDetailsPage={true}/>
    <section className="accommodation-container">
    <h1 className="sr-only">Détails de l'hébergement</h1>
      <header className="infos-accommodation">
      <h2 className="sr-only">Informations principales</h2>
        <div className="localisation-and-tags">
          <TypeFlat
            title={accommodation.title}
            location={accommodation.location}
          />
            <div className="tags">
              {accommodation.tags && accommodation.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
            </div>
        </div>
        <div className="owner-and-rating">
          <Owner host={accommodation.host}/>
          <Rating rating={accommodation.rating}/>
        </div>
      </header>
      <section className="accordion-container">
      <h2 className="sr-only">Détails supplémentaires</h2>
      <Accordion
      className="description"
      title="Description"
      content={accommodation.description}
      />
      <Accordion
      className="Equipements"                       
      title="Équipements"
      content={
        <ul>
          {accommodation.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      }
      />
      </section>
    </section>
</div>
  );
};

export default CardDetails;