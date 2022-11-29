import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const data = {
  title: '30 Days Of React',
  subtitle: 'Hexadecimal colors',
  divs: new Array(36).fill(0), // change number here to change the amount of colored divs
}

const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

const RandomColor = () =>{
  const color = '#' + Math.round((Math.random() * 0xFFFFFF)).toString(16).padStart(6,'0')
  return color
}


const ColoredDiv = () => {
  const color = RandomColor()
  return(
  <div className = 'color_cube' style={{backgroundColor: color}}>
    <h4 className='center'>{color}</h4> 
  </div>
  )
}

const ColoredDivList = () => {
//Have to create a loop here to call ColoredDiv component multiple times
  return (data.divs.map(e => <ColoredDiv />))
}

const NumberGenerator = () => (
  <div className='center'>
    <h1>{data.title}</h1>
    <h2>{data.subtitle}</h2>
    <ColoredDivList data = {data}/>
  </div>
)

const CountriesList = ({countries}) =>{
  return countries.map(e=><li>{e.country}:{e.population}</li>)
}
const Countries = ({countries}) =>{
  return (
  <div className='center'>
    <h1>Ten countries</h1>
    <ul>
      <CountriesList countries = {countries}/>
    </ul>
  </div>)
}

const App = () =>(
  <div>
    <div className='wrapper'>
      <NumberGenerator data = {data}/>
    </div>
    <div>
      <Countries countries = {tenHighestPopulation}/>
    </div>
  </div>
  )
const root= document.getElementById('root')
ReactDOM.render(<App/>,root)