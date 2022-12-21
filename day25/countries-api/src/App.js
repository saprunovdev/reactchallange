import React, {useState, useEffect} from 'react';
import Header from './components/header/Header';
import Country from './components/countries/Countries';
import Statistics from './components/statistics/Statistics';
import axios from 'axios';
  


const App = () => {
    // setting initial state and method to update state
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    
    useEffect(() => {fetchData()}, [])
  
    const fetchData = async () => {
      const url = 'https://restcountries.com/v2/all'
      try {
        const response = await axios.get(url)
        const data = await response.data
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }


    let displayData
    query
    ?displayData = data.filter((country)=>(
        country.name.toLowerCase().includes(query) 
        // Antarctica has no capital (this gives an error)
        // ||country.capital.toLowerCase().includes(query)
        )) 
    :displayData = data

    const displayCountries = (displayData) =>(
        displayData.map((country)=>(
            <Country country={country}/>
          )))

    
  
    // Top languages spoken in the world
    // We have to itterate through the given array and append each lang to new array
    // then we have how many times each lang appears in that array
    // const topTenLanguages = data.forEach((country)=> country.languages.forEach((language)=>{
    //   console.log(language.name)
    // }))
  
  
      return(
        <div>
        {/* Calculating the number of countries displayed on the screen */}
        <Header countriesCount = {displayData.length}/>
  
        <div>
        <h1>10 most populated countries</h1>
        <Statistics countries = {data}/>
       </div>
  
       <input type='text' onChange={(e)=>{setQuery(e.target.value.toLowerCase())}}/>
       <p>results for: {query}</p>
       <div className='country-wrapper'>
        
        {/* If there is anything inside query pass filterd data to the displayCountries funciton */}
        {displayCountries(displayData)}

       </div>
       </div>
      )
  }

  export default App;