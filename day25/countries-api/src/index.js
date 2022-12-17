import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import './index.css';

const Header = ({countriesCount}) =>{
  return(
    <div>
      <h1>World Countries Data</h1>
      <h2>Currently we have {countriesCount} countries</h2>
    </div>
  )
}

const Statistics = ({country:{name}}) =>{
  return(
    <div>
      <p>{name}</p>
    </div>
  )
}

const Country = ({
  country:{
    flag,
    name, 
    capital,
    languages,
    population,
    currencies,
  }}) =>{

    return(
      <div className='country'>
        <div className='country-flag'>
        <img src={flag} alt={name}/>
        </div>
        <h4><span>{name}: {capital}</span></h4>
        
        <p>languages: {languages.map((lang)=> <span>{lang.name} </span>)}</p>
        <p>Population: {population} </p>
        <p>Currencies: {currencies
        ?currencies.map((curr)=> <span>{curr.name} </span>)
        :<span>No currencies</span>
        }</p>
      </div>
    )
}

const App = () => {
  // setting initial state and method to update state
  const [data, setData] = useState([])
  

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = 'https://restcountries.com/v2/all'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }


    return(
      <div>
      <Header countriesCount = {data.length}/>

      <div>
      <h1>10 most populated countries</h1> 
      {data.map((country)=>(
        <Statistics country={country}/>
      ))}
     </div>

     <div className='country-wrapper'>
        {data.map((country)=>(
          <Country country={country}/>
        ))}
     </div>
     
    
     </div>
    )
}

const root =document.getElementById('root');
ReactDOM.render(<App/>, root)