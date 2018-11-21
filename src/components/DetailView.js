import React from "react";
import "./styles/DetailView.css";

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type } = pokemon;
  return (
    <section className="detail-view">
      <img className="sprite-image" alt={name} src={sprite} />
      <div className="data-wrapper">
        <h3 className="data-name">
          ID: {id} {name}
        </h3>
        <p className="data-char">Type: {type}</p>
      </div>
    </section>
  );
};
export default DetailView;
