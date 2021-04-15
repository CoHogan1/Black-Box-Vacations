// this file will hold the form to add new vacation
//it will need to be displayed on the landing page.
import './App.css'
import React, { Component } from 'react'


class VacationForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            location: '',
            dateFrom: '',
            dateTo: '',
        }
    }

    // this should store the form info into this.state.
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(this.state.name + "--name")
        // console.log(this.state.name + "--location")
        // console.log(this.state.name + "--Date From")
        // console.log(this.state.name + "--Fate to")
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('handeling Submit')
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log(this.state.name + "--name")
        console.log(this.state.location + "--location")
        console.log(this.state.dateFrom + "--Date From")
        console.log(this.state.dateTo + "--date to")
    }



    render() {
        return(
            <div>

            <form onSubmit={this.handleSubmit}>
            <h1>from newVaca.js</h1>

                <label>Name:</label>
                <input name="name" onChange={this.handleChange} ></input><br></br>

                <label>location:</label>
                <input name="location" onChange={this.handleChange} ></input><br></br>

                <label>Date From:</label>
                <input name="dateFrom" onChange={this.handleChange} ></input><br></br>

                <label>Date To:</label>
                <input name="dateTo" onChange={this.handleChange} ></input><br></br>





                <input type="submit" value="Visit" onClick={this.handleClick}></input>

            </form>

            </div>
        )
    }
}


export default VacationForm
