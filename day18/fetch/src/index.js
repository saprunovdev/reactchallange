import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Cat = ({cat:{id, name, weight, life_span, image}}) => {
  // Not all cats has their image, so we have to filter out the one who has
  let imageUrl
  image ? imageUrl = image.url : imageUrl = '';

  let pattern = /\d/g

  let avgWeight=()=>{
    let num = weight.metric.match(pattern)
    return (parseInt(num[0]) + parseInt(num[num.length-1]))/2
  }

  return(
    <div>
      <p><span>{id}:</span><span>{name}</span></p>
      <p><span>Weight:{weight.metric} kg</span></p>
      <p>Average weight: {avgWeight()}</p>
      <p><span>Life span: {life_span} years</span></p>
      <img src={imageUrl} alt={id} width='200rem'/>
      <hr/>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    const url = 'https://api.thecatapi.com/v1/breeds'

    axios
    .get(url)
    .then((response)=>{
      this.setState({data: response.data})
      console.log(this.state.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  render() {
    return (
     <div>
      <h1>There are {this.state.data.length} breeds of cats out there!</h1>
      {this.state.data.map((cat)=>(
        <Cat cat = {cat}/>
      ))}
     </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)