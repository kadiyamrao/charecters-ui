import React, { Component } from 'react';

class Clock extends Component {
  
  state = {
    date: new Date()
  };

  calculateDate = () => {
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000*this.props.offset));
  }

  componentDidMount() {
    this.timerID = setInterval( () => {
      this.setState({
        date: this.calculateDate()
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div>
        <h5>{this.props.region}</h5>
        <div>It is {this.state.date.toLocaleString()}</div>
      </div>      
    )
  }


// ** V2.0 - to display current date and time
// function displayDate(){
//   const displayString = (
//     <React.Fragment>
//       Date : <span>{new Date().toLocaleString()}</span>
//       <App />   
//     </React.Fragment>
//   )

//   ReactDOM.render(
//     displayString
//     ,document.getElementById('root')
//   );
// }

// setInterval(displayDate ,1000)


// ** V1.0 - to display current date and time
//
// setInterval(() => {
//     ReactDOM.render(
//       <React.Fragment>
//         Date : <span>{new Date().toLocaleString()}</span>
//         <App />   
//       </React.Fragment>
//       , document.getElementById('root'));
//   }
// ,1000);

}

export default Clock;