import React from 'react'

export default function UserInput(props) {
    return (
        <div>   
            <input type="text" onChange={props.change}  value={props.currentData}></input>
        </div>
    )
}
