import React, { Component } from 'react'

 class Profile extends Component {
  render() {
    return (
      <div>
        <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' width='100px' height='100px'/>
        <h5>{this.props.name}</h5>
        <h6>{this.props.position}</h6>
        <p>--------------------------</p>
      </div>
    )
  }
}
export default Profile;