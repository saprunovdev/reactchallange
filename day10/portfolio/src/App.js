import React, {Component} from 'react'

import './App.css';
import Header from './header/Header.js';
import Main from './main/Main.js';
import Footer from './footer/Footer.js'
import  {Button}  from './components/Button';

class App extends Component{
  state = {
    theme: 'light',
  }

  changeTheme = () => {
    this.state.theme === 'light'
    ? this.setState({theme: 'dark'})
    : this.setState({theme:'light'});
  }

  render(){
    return(
      <div className='wrap'>

        <Header />
        <div>
        <Button action = {this.changeTheme} value = 'theme toggle'/>
        <p>{this.state.theme}</p>
        </div>
        <Main/>
        <Footer />
      </div>
    )
  }
}
export default App;
