import React from "react";
import sprites from "../assets/sprites.png";
import "./styles/PokeCell.css";
const PokeCell = ({ pokeClass, handleOnClick }) => {
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
  return (
    <button
      className="poke-cell"
      style={style}
      onClick={() => handleOnClick(id)}
    />
  );
};
export default PokeCell;
