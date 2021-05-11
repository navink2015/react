import React, { Component, useState } from "react";
import { Person } from "./Components/Person";
import TicTac from "./Components/TicTac";
import person from "./Components/Person.css";
import UserInput from "./user/UserInput";
import UserOutputs from "./user/UserOutputs";
import Input from "./Components/Input";
// import Input from "react-select/src/components/input";

export default class App extends Component {
  state = {
    person: [
      { id: 12, name: "navin", age: 25 },
      { id: 1211, name: "raj", age: 35 },
      { id: 121, name: "banu", age: 26 },
    ],
    userName: "navinKumar",
    show: false,
  };
  switchHandler = (name) => {
    console.log("button Clicked");
    this.setState({
      person: [
        { name: name, age: 60 },
        { name: "raj", age: 35 },
        { name: "banu", age: 26 },
      ],
    });
  };
  // changeHandler=(event)=>{
  //   this.setState({userName:event.target.value})
  // }
  boolFunction = () => {
    this.setState({ show: !this.state.show });
  };
  deletePerson = (index) => {
    const persons = this.state.person.slice();

    persons.splice(index, 1);
    console.log(persons);
    this.setState({ person: persons });
    console.log(persons);
  };
  ChangeHandler=(event,id)=>{
    const personIndex=this.state.person.findIndex(p=>{return p.id ===id})
    console.log(personIndex)
    const person={...this.state.person[personIndex]}
    console.log(person)
    person.name=event.target.value
    const persons=[...this.state.person]
    persons[personIndex]=person


    this.setState({person:persons})
   
    
    // console.log(this.state.person)
    // console.log(index)
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      curor: "pointer ",
    };
    let person = null;
    if (this.state.show) {
      person = this.state.person.map((person, index) => {
        return (
          <Person
            key={person.id}
            click={() => this.deletePerson(index)}
            name={person.name}
            age={person.age}
            change={(event)=>this.ChangeHandler(event,person.id)}
          />
        );
      });
      // person=( <div><Person
      //   name={this.state.person[0].name}
      //   age={this.state.person[0].age}
      // />
      // <Person
      //   name={this.state.person[1].name}
      //   age={this.state.person[1].age}
      // />
      // <Person
      //   name={this.state.person[2].name}
      //   age={this.state.person[2].age}
      // />
      // <Person
      //   name={this.state.person[2].name}
      //   age={this.state.person[2].age}
      //   click={()=>this.switchHandler("ball")}
      // >
      //   apple
      // </Person></div>)
    }
    return (
      <div className="person">
        {/* <Game /> */}
        <TicTac />
    

        {/* <button style={style} onClick={() => this.boolFunction()}>
          bool
        </button>
        {/* <Input/> */}
        {/* <Input change={this.changeHandler}/> */}
        {person}
        {/* <UserInput change={this.changeHandler} currentData={this.state.userName}/>
     <UserOutputs user={this.state.userName}/>
     <UserOutputs user="kumar"/>
     <UserOutputs user="nk"/> */} */}
      </div>
    );
  }
}

{
  /* // import React from 'react'

// export default function App() {
//   const [object, setObject] = useState({person:[
//           { name: "navin", age: 60},
//           { name: "raj", age: 35 },
//           { name: "banu", age: 26 },
//         ]})
//   var clickHandler=()=>{
//     console.log("clicked")
//     setObject({person:[
//     { name: "bala", age: 40},
//     { name: "raj", age: 35 },
//     { name: "banu", age: 26 },
//   ]})}
//   return (
//     <div className="container  ">
//       <button  onClick={clickHandler}>hello</button>
//       <Person name={object.person[0].name} age={object.person[0].age}/>
//       <Person name={object.person[1].name} age={object.person[1].age}/>
//       <Person name={object.person[2].name} age={object.person[2].age}/>

//     </div>
//   )
// } */
}
