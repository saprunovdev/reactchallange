import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends Component{
  state = {
    color: 'green',
    season: new Date().getMonth() + 1
  }
  
  color = 'black'
  seasonBg = (time) =>{

    if(time >= 3 && time < 6){
      this.setState(this.season = 'Spring')
      this.setState(this.color = 'Green')
    }
    if(time >= 6 && time < 9){
      this.setState(this.season = 'Summer')
      this.setState(this.color = 'Yellow')
    }
    if(time >= 9 && time < 12){
      this.setState(this.season = 'Fall')
      this.setState(this.color = 'Black')
    }
    else{
      this.setState(this.season = 'Winter')
      this.setState(this.color = 'Red')
    }
  }



  render(){

    return(
      <div className='app' style={{backgroundColor: this.state.color}}>
        <h1> {this.state.season}</h1>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

