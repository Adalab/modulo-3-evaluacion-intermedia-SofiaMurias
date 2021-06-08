import React from "react";
import "../stylesheet/App.scss";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const listPokemonItems = props.list.map((item) => {
    return <Pokemon url={item.url} />;
  });
  return (
    <>
      <h2>Lista de pokemon</h2>
      {listPokemonItems}
    </>
  );
};

export default PokeList;
