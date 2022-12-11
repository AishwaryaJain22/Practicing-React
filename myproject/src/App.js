import './App.css';
import Count from './Count';
import Profile from './Profile';
import React, { Component } from 'react'
import Lifecycle from './Lifecycle';

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      showLifeCycleComponent : true,
      employee : [
        {
          name : 'Aishwarya',
          position : 'Frontend Developer'
        },
        {
          name : 'Utkarsh',
          position : 'Backend Developer'
        },
        {
          name : 'Shweta',
          position : 'QA Developer'
        },
      ],
      
    })
    
  }

  hamdelToggel = () => {
    this.setState({
      showLifeCycleComponent :  !this.state.showLifeCycleComponent
    });
  };

  render() {
    return (
      <div className='App'>
            <h1>My Application</h1>
            <Count/>
            {
              this.state.employee.map(employe => {
                return <Profile name={employe.name} position={employe.position}/>
              })
            }
            <button onClick={this.hamdelToggel}>
              {" "}
               Click to show or hide thw lifecycle component
               </button>
            {this.state.showLifeCycleComponent ? <Lifecycle/> : <div> </div>}
      </div>
    )
  }
}

export default App;
