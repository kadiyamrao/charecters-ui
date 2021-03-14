import React, { Component } from 'react';
import Table from './TableComponent';
import Form from '../forms/CharFormComponent';

class FormTableComponent extends Component {
    state = {
        charecters : [
          {
            "name": "John",
            "role": "Teacher"        
          },
          {
            "name": "Eric",
            "role": "Student"        
          },
          {
            "name": "Maya",
            "role": "Principal"        
          },
          {
            "name": "Mani",
            "role": "Admin"        
          },
          {
            "name": "Joe",
            "role": "Front office"        
          }
        ], 
        data: [],
      }
    
      removeCharecter = (index) => {
        const {charecters} = this.state
    
        this.setState({
          charecters: charecters.filter((cha, i) => {
            return i!== index
          })
        })
      }
    
      handleSubmit = (charecter) => {
        this.setState({
          charecters: [...this.state.charecters, charecter]
        })
      }
    
      componentDidMount(){
          const url =
          'https://en.wikipedia.org/w/api.php?action=opensearch&search=Dancing&format=json&origin=*'
    
          fetch(url).then((result) => result.json()).then((result) => {
              this.setState({
                  data: result[1],
              })
          })
      }
    
      render() {
        const {charecters, data} = this.state
        const dataMap = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })
    
    
        return (
          <React.Fragment>
            <Table charecters={charecters} removeCharecter={this.removeCharecter}></Table>
            <Form handleSubmit={this.handleSubmit}></Form>
            <ul>{dataMap}</ul>
          </React.Fragment>
        )
      }
}

export default FormTableComponent;