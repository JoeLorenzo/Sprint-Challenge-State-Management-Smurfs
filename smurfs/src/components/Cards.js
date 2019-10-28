import React, { useContext } from 'react'
import { ApiDataContext } from '../context/ApiDataContext'

const Cards = () => {
	const { smurfData } = useContext(ApiDataContext);
    return (
      <div>
      Hello
      </div>
    )
}

export default Cards
