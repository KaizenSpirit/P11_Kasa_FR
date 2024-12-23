import React from "react";
import Banner from'../Banner/Banner.js';
import Accordion from '../Accordion/Accordion';
import Owner from "./Owner/Owner.js";
import TypeFlat from "./TypeOfFlat/TypeOfFlat.js";
import Tags from "./Tags/Tags.js";
import Rating from "./Rating/Rating.js";
import "../../styles/Main.scss";

const CardDetailsContainer = ({accommodation}) => {
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
              <Tags tags={accommodation.tags} />
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

export default CardDetailsContainer;