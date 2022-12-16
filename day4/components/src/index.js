import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')

function color() { 
  return '#' + Math.round(Math.random() * 0xffffff).toString(16)
}


const ColorApp = () => {
  const fixedColor = color()
  return(
    <div>
      <h1 style={{backgroundColor: color()}}>{fixedColor}</h1>
    </div>
  )
}


const App = () => (
  <div className='app'>
    <ColorApp />
    <ColorApp />
    <ColorApp />
    <ColorApp />
    <ColorApp />
    <ColorApp />
  </div>
)


ReactDOM.render(<App/>,root)
