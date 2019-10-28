import React, { useState, useEffect, useContext } from "react";
import Cards from './Cards'
import { useApiCall } from '../hooks/useApiCall'
import { ApiDataContext } from '..context/ApiDataContext'

const App = () => {
  const [smurfData] = useApiCall()

console.log(smurfData)

    return (
      	<ApiDataContext.Provider value={{ smurfData }}>
      <div className="App">
        <Cards />
      </div>
      </ApiDataContext.Provider>
    );
  }


export default App;
