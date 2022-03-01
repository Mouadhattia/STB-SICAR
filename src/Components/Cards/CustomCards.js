import React from "react";
import "../../";

function CardsCustom({ data = [] }) {
  return (
    <>
      <div className="CardEspritContainer">
        {data.map(({ _id, title, description }) => (
          <div className="CustomCardEsprit" key={_id}>
            <h3 className="customCardTitle">{title}</h3>
            <p className="page-description">{description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardsCustom;
