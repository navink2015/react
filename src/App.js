import React, { Component,useState } from "react";
import { Person } from "./Components/Person";
import TicTac from "./Components/TicTac";

// export default class App extends Component {
//   state = {
//     person: [
//       { name: "navin", age: 25 },
//       { name: "raj", age: 35 },
//       { name: "banu", age: 26 },
//     ],
//   };
//   switchHandler = () => {
//     console.log("button Clicked");
//     this.setState({person:[
//       { name: "navin", age: 60},
//       { name: "raj", age: 35 },
//       { name: "banu", age: 26 },
//     ]})
//   };
//   render() {
//     return (
//       <div>
//         {/* <Game /> */}
//         <TicTac />
//         <button onClick={this.switchHandler}>switch</button>
//         <Person
//           name={this.state.person[0].name}
//           age={this.state.person[0].age}
//         />
//         <Person
//           name={this.state.person[1].name}
//           age={this.state.person[1].age}
//         />
//         <Person
//           name={this.state.person[2].name}
//           age={this.state.person[2].age}
//         />
//         <Person  name={this.state.person[2].name}
//           age={this.state.person[2].age}>apple</Person>
//       </div>
//     );
//   }
// }

// import React from 'react'

export default function App() {
  const [object, setObject] = useState({person:[
          { name: "navin", age: 60},
          { name: "raj", age: 35 },
          { name: "banu", age: 26 },
        ]})
  var clickHandler=()=>{
    console.log("clicked")
    setObject({person:[
    { name: "bala", age: 40},
    { name: "raj", age: 35 },
    { name: "banu", age: 26 },
  ]})} 
  return (
    <div>
      <button  onClick={clickHandler}>hello</button>
      <Person name={object.person[0].name} age={object.person[0].age}/>
    </div>
  )
}
