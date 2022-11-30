import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './countries.js';
import { countriesData } from './countries.js';

const Button = ({title, action}) =>{
  return <button onClick={action}>{title}</button>
}

class ToggleTheme extends React.Component {
  state = {
    count: 0,
    theme: 'dark'
  }

  addOne = () =>{
    this.setState({count: this.state.count + 1})
  }
  
  minusOne = () => {
    this.setState({count: this.state.count - 1})
  }

  changeColor = () =>{
    let item = document.querySelector('#toggleItem')
    if(this.state.theme === 'dark'){
      this.setState({theme: 'light'})
      item.classList = 'light'
    } else{
      this.setState({theme:'dark'})
      item.classList = 'dark'
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <h1>{this.state.theme}</h1>
        <div id='toggleItem' className='dark'>
        </div>
        <Button title={'Increase'} action={this.addOne}/>
        <Button title={'Decrease'} action={this.minusOne}/>
        <Button title={'Change color'} action={this.changeColor}/>
        <hr/>
      </div>
    )
  }
}

class RandomCountry extends React.Component {
  state ={
    randNum: 1,
  }
  currentCountry = () => {
    let rand = Math.round(Math.random() * countriesData.length)
    this.setState({randNum: rand})
  }

  render(){
    return(
      <div>
        <h2>{countriesData[this.state.randNum].name}</h2>
        <h2>{countriesData[this.state.randNum].capital}</h2>
        <h2>{countriesData[this.state.randNum].currency}</h2>
        <img src={countriesData[this.state.randNum].flag} alt='1'/>
        <Button title={'Change Country'} action ={this.currentCountry}/>
      </div>
    )
  }
}
class App extends React.Component {
  render(){
    return(
      <div>
      <ToggleTheme/>
      <RandomCountry/>
      </div>
    )
  }
}
const root = document.getElementById('root');
ReactDOM.render(<App />, root)
