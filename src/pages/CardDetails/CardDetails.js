import React from "react";
import { useParams } from "react-router-dom";
import accommodations from "../../data/accommodationsData.json";
import CardDetailsContainer from "../../components/CardDetails/CardDetailsContainer";
import Error404 from "../Error404/Error404";

const CardDetails = () => {
  const { id } = useParams(); 
  const accommodation = accommodations.find((item) => item.id === id);

  if (!accommodation) {
    return <Error404 />;
  }

  return (
    <CardDetailsContainer accommodation={accommodation} />
  );
};

export default CardDetails;