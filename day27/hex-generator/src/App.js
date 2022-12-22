import Header from './components/header/Header';
import Colors from './components/colors/Colors';
import React, {useState, useLayoutEffect} from 'react';
import gsap from 'gsap';

function App() {
  const [number, setNumber] = useState(0)
  const [colors, setColor] = useState([])

  useLayoutEffect (() =>{
    gsap.from('.color', {
      borderRadius:'100%',
      rotate:90,
      duration: 0.2}
      )
})

  return (
    <div className="App">
      <Header colors = {colors} setNumber = {setNumber} setColor ={setColor} />
      <Colors colors = {colors}/>
    </div>
  );
}

export default App;
