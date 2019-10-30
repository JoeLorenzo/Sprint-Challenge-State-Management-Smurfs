import React, { useContext } from "react";
import { ApiDataContext } from "../context/ApiDataContext";
import { FormValuesContext } from "../context/FormValuesContext";

import  Card  from "./Card"


const Cards = () => {
  const { smurfData } = useContext(ApiDataContext);
  const { submittedValues, setsubmittedValues } = useContext(FormValuesContext);
  console.log(smurfData)
  const smurfs = [...smurfData]
  console.log(smurfs)
  console.log(submittedValues)


  return (
    <div className="cards-container">
      {smurfs.map(smurf => (
        <Card id={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
      ))}
    </div>
  );
};

export default Cards;
