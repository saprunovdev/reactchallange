import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')

//importing all images to the object and then assigning it to an array
function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const Stack = (props) => {
    const {title1, skills} = props.data

    const skillsList = skills.map(e => <li>{e}</li>)

    const imagesList = Object.keys(images).map(e => 
    <li><img src={require('./images/'+e)} alt={e} width='80'/></li>
    )

    return (
        <div style={{textAlign: 'center'}}>
            <h1>{title1}</h1>
            <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>{skillsList}</ul>
            <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>{imagesList}</ul>
        </div>
    )
}
const App = () =>{
    const data = {
        title1: 'Front end technologies',
        skills: ['CSS', 'HTML', 'JS', 'React'],
    }
    return(
    <Stack data = {data}/>
    )
}

ReactDOM.render(<App />, root)

