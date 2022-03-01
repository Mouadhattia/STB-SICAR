import React from "react";
import "../../Pages/Home/Home.css";

function CardsCustom({ data = [] }) {
  return (
    <>
      {data.map(({ _id, image }) => (
        <div className="CustomCard" key={_id}>
          <img src={image} alt="" className="customCardImage" />
        </div>
      ))}
    </>
  );
}

export default CardsCustom;
