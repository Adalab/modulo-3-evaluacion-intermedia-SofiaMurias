import React from "react";
import "../stylesheet/App.scss";

const Pokemon = (props) => {
  return (
    <article className="cards-list">
      <img className="cards-list--img" src={props.url} />
      <h3 className="cards-list--name"> {props.name}</h3>
      <p className="cards-list--type"> {props.types}</p>
    </article>
  );
};

export default Pokemon;
