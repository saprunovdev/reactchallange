import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const data = {
  title: '30 Days Of React',
  subtitle: 'Hexadecimal colors',
  numberOfDivs: 30,
}

const RandomColor = () =>{
  const color = '#' + Math.round((Math.random() * 0xffffff)).toString(16)
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

const ColoredDivList = (props) => {
//Have to create a loop here to call ColoredDiv component multiple times

}

const NumberGenerator = ({data}) => (
  <div className='center'>
    <h1>{data.title}</h1>
    <h2>{data.subtitle}</h2>
    <ColoredDivList data = {data.numberOfDivs}/>
  </div>
)

const App = () =>(
  <div className='wrapper'>
    <NumberGenerator data = {data}/>
  </div>
  )
const root= document.getElementById('root')
ReactDOM.render(<App/>,root)