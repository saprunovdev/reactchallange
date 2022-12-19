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

const Statistics = ({country:{name, population}, totalPopulation}) =>{
  const populationPercentage = Math.floor(population/totalPopulation * 100)
  console.log(populationPercentage)
  return(
    <div className='bars'>
      <div>{name}</div>
      <div className='bar' style={{width:populationPercentage}}></div>
      <div>{population.toLocaleString()}</div>
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

  const topTenPopulated = data.sort((a, b)=>(b.population - a.population)).slice(0,10)
  const totalPopulation = data.reduce((acc, cur) =>(acc + cur.population), 0)

  // Top languages spoken in the world
  // We have to itterate through the given array and append each lang to new array
  // then we have how many times each lang appears in that array
  const topTenLanguages = data.forEach((country)=> country.languages.forEach((language)=>{
    console.log(language.name)
  }))


    return(
      <div>
      <Header countriesCount = {data.length}/>

      <div>
      <h1>10 most populated countries</h1> 
      <div className='bars'>
        <div>Total:</div>
        <div className='bar' style={{width:'100%'}}></div>
        <div>{totalPopulation.toLocaleString()}</div>
      </div>
      {topTenPopulated.map((country)=>(
        <Statistics country={country} totalPopulation = {totalPopulation}/>
      ))}
     </div>

     <input type='text'></input>
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