import React from "react";
import "../../../../styles/Main.scss";

const Tag = ({tag}) => {
  return (
    <span className="tag">
      {tag}
    </span>
  );
};

export default Tag;