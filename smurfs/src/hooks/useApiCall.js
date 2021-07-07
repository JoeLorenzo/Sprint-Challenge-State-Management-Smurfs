import axios from 'axios'
import { useState, useEffect } from 'react'

export const useApiCall = () => {
  const [value, setValue] = useState([])

  useEffect(() => {
    axios
      .get(
        `http://localhost:3333/smurfs`
      )
      .then(res => setValue(res.data))
      .catch(err => console.log(err))
  }, [])

  return [value]
}
