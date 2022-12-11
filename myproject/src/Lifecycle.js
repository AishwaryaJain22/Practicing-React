import React, { Component } from 'react'

const otp = length => {
    var text ="";
    var possible  = "abcdefghijklmnopqrstuvwxyz"
    for (var i = 0 ; i < length ; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}

 class Lifecycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter:0,
            displayString : 'we are in the state',
            didDisplayStringUpdate : false
        }
    }

    handelChange  =() =>{
        const newDispalyString = otp(4);
        this.setState({
            displayString : newDispalyString,
            didDisplayStringUpdate : true
        })
    }

    componentDidMount = () =>{
       // console.log(otp(4));
        this.setState({
            displayString : 'We are now in component did mount',
            didDisplayStringUpdate : true
        })
    }

    componentDidUpdate = () => {
        console.log('update component')
        if(this.state.didDisplayStringUpdate === true){
            this.setState({
                counter : this.state.counter + 1,
                didDisplayStringUpdate : false
            })
        }
    }

    componentWillUnmount =() => {
        console.log("Component unmount bbye");
    }
  render() {
    return (
      <div>
        <h2>This is our LifeCycle Componemt</h2>
        <h3>Cureent State Chnage Counter : {this.state.counter}</h3>
        <h5>The Current Display String : {this.state.displayString}</h5>
        <button onClick={this.handelChange}>Generate OTP</button>
      </div>
    )
  }
}
export default Lifecycle;