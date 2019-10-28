import React, { useContext } from "react";
import { ApiDataContext } from "../context/ApiDataContext";
import  Card  from "./Card"

const Cards = () => {
  const { smurfData } = useContext(ApiDataContext);


  return (
    <div className="cards-container">
      {smurfData.map(smurf => (
        <Card id={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
      ))}
    </div>
  );
};

export default Cards;
