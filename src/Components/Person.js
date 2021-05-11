import React from "react";
import Input from "./Input";
import "./Person.css";

export const Person = (props) => {
  return (
    <div className="person">
      <p onClick={props.click}>
        person name is {props.name} and is age is {props.age}
      </p>
      <input type="text" onChange={props.change} value={props.name}></input>
      <p>{props.children}</p>
    </div>
  );
};
