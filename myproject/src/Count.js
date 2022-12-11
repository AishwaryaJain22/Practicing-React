import React, { Component } from 'react'

 class Count extends Component {
    constructor(props){
        super(props);
        this.state = ({
            count : 0
        })
    }

    increment = () => {
        //console.log(this.state.count + 1)
        this.setState ({
            count : this.state.count + 1
        })
    }

    decrement = () => {
        //console.log(this.state.count - 1)
        this.setState ({
            count : this.state.count - 1
        })
    }

  render() {
    return (
      <div>
        <p>You can peform function here: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
export default Count;