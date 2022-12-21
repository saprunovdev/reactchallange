import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {fetchData()})
  
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        const data = await response.data
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    return data
}

export default useFetch;