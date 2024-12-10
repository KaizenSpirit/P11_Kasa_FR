import React from "react";
import Banner from "../components/Banner";
import Accordion from "../components/Accordion";
import { aboutAccordionData } from "../constants/constants";
const About = () => {
  return (
    <div>
      <Banner text="" image="/img/imageAbout.png"/>
      {
      aboutAccordionData.map((item, index) => (<Accordion key={index} title={item.title} content={item.content} />))
      }
    </div>
  );
};

export default About;

