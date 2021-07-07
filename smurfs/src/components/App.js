import React, { useState, useEffect, useContext } from "react";
import Cards from "./Cards";
import { useApiCall } from "../hooks/useApiCall";
import { useForm } from "../hooks/useForm";
import { ApiDataContext } from "../context/ApiDataContext";
import { FormValuesContext } from "../context/FormValuesContext";
import Form from "./Form"

const App = () => {
   const [smurfData] = useApiCall();
   const [submittedValues, setSubmittedValues] = useState({
     id: "",
     name: "",
     age: "",
     height: ""
   })
  return (
    <ApiDataContext.Provider value={{ smurfData }}>
        <FormValuesContext.Provider value={ {submittedValues, setSubmittedValues} }>
      <div className="App">
        <Cards />
        <Form />
      </div>
        </FormValuesContext.Provider>
    </ApiDataContext.Provider>
  );
};

export default App;
