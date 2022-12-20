import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Button = ({text, onClick}) =>(
  <button onClick={onClick}>
    {text}
  </button>
)


class App extends Component{
  state = {
    season: '',
    color: ''
  }
  
  handleSeasons = () =>{
    let currentMonth = new Date().getMonth() + 1
    if (currentMonth >= 3 && currentMonth < 6){
     this.setState({season:'Spring', color:'Yellow'})
    }
    if (currentMonth >= 6 && currentMonth < 9){
      this.setState({season:'Summer', color:'Green'})
    }
    if (currentMonth >= 9 && currentMonth < 12){
      this.setState({season:'Autumn', color: 'Grey'})
    }
    else{
      this.setState({season:'Winter', color:'Brown'})
    }
  }

  componentDidMount(){
    this.handleSeasons()
  }
  



  render(){
    return(
      <div className='app'>
          <div style={{
            width: '200px',
            height: '200px',
            border: 'solid black 1px',
            backgroundColor: this.state.color
          }}>
            {this.state.season}
          </div>

          <Button text={'Summer'} onClick ={()=> this.setState({season:'Summer', color:'Green'})} />
          <Button text={'Fall'} onClick ={()=> this.setState({season:'Autumn', color: 'Grey'})} />
          <Button text={'Winter'} onClick ={()=> this.setState({season:'Winter', color:'Brown'})} />
          <Button text={'Spring'} onClick ={()=> this.setState({season:'Spring', color:'Yellow'})} />
    </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

