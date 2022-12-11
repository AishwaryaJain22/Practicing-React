import "./App.css";
import Count from "./Count";
import Profile from "./Profile";
import React, { Component } from "react";
import Lifecycle from "./Lifecycle";

const employeeDrioctory = [
  {
    name: "Aishwarya",
    position: "Frontend Developer",
    id: "1",
  },
  {
    name: "Utkarsh",
    position: "Backend Developer",
    id: "2",
  },
  {
    name: "Shweta",
    position: "QA Developer",
    id: "3",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLifeCycleComponent: true,
      employee: employeeDrioctory,
      employeOfTheMonth : '0'
    }
  }

  hamdelToggel = () => {
    this.setState({
      showLifeCycleComponent: !this.state.showLifeCycleComponent,
    });
  };

  employeeOfTheMonth = employeeId =>{
    this.setState({
      employeOfTheMonth : employeeId
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My Application</h1>
        <Count />
        {this.state.employee.map((employe) => {
          //console.log(employe);
          return (
            <div style={{backgroundColor : employe.id === this.state.employeOfTheMonth ? "yellow": "white"}}>
            <Profile
              key={employe.id}
              id={employe.id}
              name={employe.name}
              position={employe.position}
              employeeOfTheMonth={this.employeeOfTheMonth}
            />
            </div>
          );
        })}
        <button onClick={this.hamdelToggel}>
          {" "}
          Click to show or hide thw lifecycle component
        </button>
        {this.state.showLifeCycleComponent ? <Lifecycle /> : <div> </div>}
      </div>
    );
  }
}

export default App;
