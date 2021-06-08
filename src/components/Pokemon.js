import React from "react";
import "../stylesheet/App.scss";

const Pokemon = (props) => {
  const typesItem = props.types.map((type) => {
    return <li className="card-list--type">{type} </li>;
  });
  return (
    <article className="cards-list">
      <img className="cards-list--img" src={props.url} />
      <h3 className="cards-list--name"> {props.name}</h3>
      <ul className="cards-list--item">{typesItem}</ul>
    </article>
  );
};

export default Pokemon;
