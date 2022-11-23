import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')
function color() { 
  return '#' + Math.round(Math.random() * 0xffffff).toString(16)
}

const fixedColor = color()
const ColorApp = () => (
  <div>
    <h1 style={{backgroundColor: fixedColor}}>{fixedColor}</h1>
  </div>
)

const App = () => (
  <div className='app'>
    <ColorApp />
  </div>
)


ReactDOM.render(<App/>,root)
