import React from "react";
import "./styles/PokeList.css";
import PokeCell from "./PokeCell";
import { pokeClasses } from "../pokeClasses";

const PokeList = ({ handleOnClick }) => {
  const cells = pokeClasses.map(pokeClass => {
    return (
      <PokeCell
        key={pokeClass.id}
        pokeClass={pokeClass}
        handleOnClick={handleOnClick}
      />
    );
  });
  return <section className="poke-list"> {cells}</section>;
};
export default PokeList;
