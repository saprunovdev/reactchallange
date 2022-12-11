// We will fetch countries API here and display the data along with statistics

import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Country =(country) =>{
    const {name, capital} = country
   
        return(
            <div>
                <span>{name}:{capital}</span>
            </div>
        )
}

const Countries = () => {
    // We data state and function to update it
    const [data, setState] = useState([])

    // With this use effect we will fetch the data
    // useEffect function already includes component lifecycles
    useEffect(()=>{
        fetchData()
    }, [])

    // We pass the API URL to get the data
    const fetchData = async () => {
        let url = 'https://restcountries.com/v2/all'
        try {
            const response = await axios.get(url)
            const data = await response.data
            setState({
              data,
            })
          } catch (error) {
            console.log(error)
          }
        }

    return(
        <div>
            {console.log(data)}
        </div>
    )
}

export {Countries};