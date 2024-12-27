import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Main.scss";

const Card = ({ id, title, cover }) => {
  return (
    <article className="card">
      <Link to={`/details/${id}`}>
        <figure>
          <img src={cover} alt={title} className="card-image" />
          <figcaption className="card-title">{title}</figcaption>
        </figure>
      </Link>
    </article>
  );
};

export default Card;
