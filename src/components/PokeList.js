import React from "react";
import "../stylesheet/App.scss";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const listPokemonItems = props.list.map((item) => {
    console.log(item.name);
    return (
      <li>
        <Pokemon url={item.url} name={item.name} types={item.types} />
      </li>
    );
  });
  return <ul className="list-pokemon">{listPokemonItems}</ul>;
};

export default PokeList;
