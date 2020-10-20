import React, { Component } from 'react'
import User from './User'

class Users extends Component {

    state ={
        users: [
            {name: "Juan", age: 22, key: 1},
            {name: "Pedro", age: 25, key: 2},
            {name: "Eleazar", age: 10, key: 3}
        ],
        title: "Users List"
    }

    makeMeYounger = () => {
        // this.state.users Wrong code
        // use setState() to change state value
        const newState = this.state.users.map((user) =>{
            const tempUser = user;
            tempUser.age < 10 ? tempUser.age = 0 : tempUser.age -= 10;
            return tempUser;
        });

        this.setState({newState});
    }

    render(){

        return(
            <div>
                {/* this.makeMeYounger = excecute right away */}
                <button onClick={this.makeMeYounger}>Update Age</button>
                <br/>
                <h1>{this.state.title}</h1>
                {
                    this.state.users.map((user) => {
                        console.log(user);
                        return <User age={user.age} key={user.key}>{user.name}</User>
                    })
                }
            </div>
        )

    }

}

export default Users;