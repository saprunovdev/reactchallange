import Header from './components/header/Header';
import Colors from './components/colors/Colors';
import React, {useState} from 'react';


function App() {
  const [number, setNumber] = useState(0)
  const [colors, setColor] = useState([])
  

  return (
    <div className="App">
      <Header colors = {colors} setNumber = {setNumber} setColor ={setColor} />
      <Colors colors = {colors}/>
    </div>
  );
}

export default App;
