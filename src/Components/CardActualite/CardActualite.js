import React from "react";
import "./CardActualite.css";

const CardActualite = ({actualite}) => {
  return (
    <div className="card__container">
      <div className="card__img__container">
        <img src={actualite.img} alt="img" />
      </div>
      <div className="card__desc__container">
        <div>
          <h2>{actualite.title}</h2>
          <p> {actualite.desc}</p>
        </div>
        <button>
          Lire plus
          
        </button>
      </div>
    </div>
  );
};

export default CardActualite;
