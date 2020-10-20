import React from 'react'

const User = (props) => {
    if(props.children){
        return(
            <div>
                <p>{props.children} | age: {props.age}</p>
            </div>
        )
    }else{
        return(
            <div>
               <p>***No Name***</p> 
            </div>
        )
    }
}

export default User;