import React from "react";
import "../../../styles/Main.scss";

const Tags = ({tags}) => {
  return (
      <div className="tags">
         {tags.slice(0, 3).map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
  );
};

export default Tags;