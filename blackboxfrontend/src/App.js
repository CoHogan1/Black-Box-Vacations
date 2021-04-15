import './App.css'
import React, { Component } from 'react'
import Nav from './nav'
import VacationForm from './newVaca'



class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            key1: 'value1',
        }
    }

    render() {
        return (
            <div className="App">

                <h1>Black Box app</h1>

                <Nav />

                <p>App description goes here.</p>

                <VacationForm />

            </div>
        )
    }
}

export default App
