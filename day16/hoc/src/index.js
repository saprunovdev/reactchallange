import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {InputField} from './components/input'

class App extends React.Component{

  render(){
    return(
    <div>
      <InputField type='button' title ='Just button' value='test button' />
      {/* type, value, placeholder, id */}
      <InputField type='text' title='First name'  placeholder ='Enter your first name' id = 'fname'/>
    </div>  
    )
  }
}


const root = document.getElementById('root');
ReactDOM.render(<App />, root);

