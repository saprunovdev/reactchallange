import React, {Component} from 'react'

import './App.css';
import Header from './header/Header.js';
import Main from './main/Main.js';
import Footer from './footer/Footer.js'

class App extends Component{
  

  state = {
    theme: 'light',
  }

  changeTheme = () => {
    let body = document.querySelector('body')


    if(this.state.theme === 'light'){
      this.setState({theme: 'dark'})
      body.classList = 'dark'
    } else{
      this.setState({theme:'light'}) 
      body.classList = 'light'
    }
  }

  
  


  render(){
    return(
      <div className='wrap' id='app'>

        <Header changeTheme = {this.changeTheme}/>
        <Main/>
        <Footer />
      </div>
    )
  }
}
export default App;
