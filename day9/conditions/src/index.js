import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Seasons = () => {
  return(
    <div>
    </div>
  )
}

const TimeOfTheDay = () => {
  return(
    <div>

    </div>
  )
}

const App = () => {
  
  return(
   <div>
    <Seasons />
    <TimeOfTheDay />
   </div>
  )
}
const root = document.getElementById('root')
ReactDOM.render(<App/>, root);
