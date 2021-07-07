import React, { useContext, useState } from "react";
import { useForm } from "../hooks/useForm";
import { FormValuesContext } from "../context/FormValuesContext";
import { ApiDataContext } from "../context/ApiDataContext";
import axios from "axios";
const Form = props => {
  const { submittedValues, setSubmittedValues } = useContext(FormValuesContext);

  const { smurfData } = useContext(ApiDataContext);
  const [values, handleChange] = useForm({
    id: "",
    name: "",
    age: "",
    height: ""
  });
  const { id, name, age, height } = values;

  const handleSubmit = event => {
    event.preventDefault();
    setSubmittedValues(values);
    console.log(`submittedValues =${submittedValues.name}`);
    axios
      .post(`http://localhost:3333/smurfs`, submittedValues)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="form">
      <div>
        <h2>Add a new smurf to the village form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="id"
            placeholder="id"
            value={id}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="age"
            placeholder="age"
            value={age}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="height"
            placeholder="height"
            value={height}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
