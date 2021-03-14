import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        name: '',
        role: ''
    }
    
    state = this.initialState; 

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {name, role} = this.state;
        return (
            <form>
                <label>
                    Name:
                </label>
                <input type='text' name='name' value={name} onChange={this.handleChange}></input>
                <label>
                    Role:
                </label>
                <input type='text' name='role' value={role} onChange={this.handleChange}></input>
                <input type='button' value='Submit'className='btn btn-primary' onClick={this.submitForm}/>
            </form>
        )
    }
}

export default Form;