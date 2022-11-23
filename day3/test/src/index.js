import React from 'react'
import ReactDOM from 'react-dom'


const root = document.getElementById('root')


//Use h1, p, input and button HTML elements to create the following design using JSX

const mainTitle = <h1>Subscribe</h1>
const subtitle = <h2>Sign up with your email and receive news and updates</h2>
const firstName = <input placeholder='fist name'></input>
const lastName = <input placeholder='last name'></input>
const email = <input placeholder='email'></input>
const submit = <button>Submit</button>


const app = (
    <div>
    {mainTitle}
    {subtitle}
    {firstName}
    {lastName}
    {email}
    {submit}
    <hr/>

    </div>
)
ReactDOM.render(app, root)