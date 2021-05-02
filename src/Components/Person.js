import React from 'react'

export const Person = (props) => {
    return (
        <div>
<p>            person name is  {props.name}  and is age is {props.age}</p>
<p>{props.children     }</p>
        </div>
    )
}
