import React, { Component } from 'react';
  
class Toggle extends Component {
  state = {
    isToggle: true,
  }

  handleClick = (event) => {
    // console.log(event)  
    const temp = !this.state.isToggle;
    
    this.setState({
      isToggle: temp
    })
  }

  render() {
    return (
      <div>
        <br></br>
        {
          this.state.isToggle && <div>Toggle state is {this.state.isToggle.toString()}</div>
        }       
        <button onClick={(e) => this.handleClick(e)}>{this.state.isToggle ? 'ON' : 'OFF'}</button>
      </div>
    )
  }
}

export default Toggle;