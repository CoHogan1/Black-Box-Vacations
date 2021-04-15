import React, { Component } from 'react'

class Nav extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            key1: 'value1'
        }
    }


    render(){
        return (
            <div className="nav">
                <h1>NavBar</h1>

            <div className="cart">
                <p>Vacation</p>
            </div>

            </div>
        )
    }
}



export default Nav
