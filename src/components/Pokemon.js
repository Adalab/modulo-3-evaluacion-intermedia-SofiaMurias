import React from "react";
import "../stylesheet/App.scss";

const Pokemon = (props) => {
  return (
    <div className="cards-list">
      <img className="img-pokemon" src={props.url} />
      <h3 className="name-pokemon"> {props.name}</h3>
    </div>
  );
};

export default Pokemon;
