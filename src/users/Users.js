import React, { Component } from 'react'
import User from './User'

class Users extends Component {

    state ={
        users: [
            {name: "Juan", age: 22},
            {name: "Pedro", age: 25},
            {name: "Eleazar", age: 27}
        ],
        title: "Users List"
    }

    makeMeYounger = () => {
        // this.state.users Wrong code
        // use setState() to change state value
        this.setState({
            users: [
                {name: "Juan", age: 1},
                {name: "Pedro", age: 1},
                {name: "Eleazar", age: 1}
            ],
            title: "Hahaha"
        })
    }

    render(){

        return(
            <div>
                {/* this.makeMeYounger = excecute right away */}
                <button onClick={this.makeMeYounger}>Update Age</button>
                <br/>
                <h1>{this.state.title}</h1>
                <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
                <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
                <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
            </div>
        )

    }

}

export default Users;