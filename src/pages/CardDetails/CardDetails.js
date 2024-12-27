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
    <Banner pictures={accommodation.pictures}/>
    <div className="accommodation-container">
      <div className="infos-accommodation">
        <div className="localisation-and-tags">
          <TypeFlat
            title={accommodation.title}
            location={accommodation.location}
          />
        <div className="tags">
        {accommodation.tags.slice(0, accommodation.tags.length).map((tag, index) => (
         <Tag key={index} tag={tag} />
        ))}
        </div>
        </div>
        <div className="owner-and-rating">
          <Owner host={accommodation.host}/>
          <Rating rating={accommodation.rating}/>
        </div>
      </div>
      <div className="accordion-container">
    <Accordion
      className="description"
      title="Description"
      content={<div className="accommodation-description">{accommodation.description}</div>}
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
    </div>
    </div>
</div>
  );
};

export default CardDetails;