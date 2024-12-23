import React from "react";
import "../../../styles/Main.scss";

const Owner = ({host}) => {
  return (
      <div className="host-info">
        <img
          src={host.picture}
          alt={host.name}
          className="host-picture"
        />
        <p>{host.name}</p>
      </div>
  );
};

export default Owner;