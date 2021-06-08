import React from "react";
import "../stylesheet/App.scss";
import data from "../data/data.json";
import PokeList from "./PokeList";

const App = () => {
  return (
    <>
      <h1 className="title">Mi lista de Pokemon </h1>
      <PokeList list={data} />;
    </>
  );
};

export default App;
