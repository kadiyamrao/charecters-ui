import React, { Component } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
  
function toCelcius(temperature) {
    return (temperature - 32) * 5 / 9;
}
  
function toFahrenheit(temperature) {
    return (temperature * 9 / 5) + 32;
}
  
function BoilderVerdict(props) {
    if (props.celcius > 100) {
        return <div>Water will gets boiled</div>;
    }
    else {
        return <div>Water will not get boiled</div>;
    }
}
  
  
class Temperature extends Component {

    state = {
        temperature: '',
        scale: 'c'
    }

    handleCelciusTemperatureChange = (temperature) => {
        this.setState(
            {
                scale: 'c',
                temperature
            }
        )
    }

    handleFahrenheitTemperatureChange = (temperature) => {
        this.setState({
        temperature,
        scale: 'f'
        });
    }


    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
        return '';
        }

        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    render() {
        const {temperature, scale} = this.state;
        const celcius = scale === 'f' ? this.tryConvert (temperature, toCelcius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert (temperature, toFahrenheit) : temperature;

        return (
        <div>
            <br></br>
            <CaptureTemperature scale='c' temperature={celcius} 
            handleTemperatureChange={this.handleCelciusTemperatureChange}></CaptureTemperature>
            <CaptureTemperature scale='f' temperature={fahrenheit} 
            handleTemperatureChange={this.handleFahrenheitTemperatureChange}></CaptureTemperature>
            <BoilderVerdict celcius={parseFloat(celcius)}></BoilderVerdict>
        </div>    
        )
    }
}
  
class CaptureTemperature extends Component {
    handleChange = (event) => {
        this.props.handleTemperatureChange(event.target.value)
    }

    render() {
        const {temperature, scale} = this.props
        return (
        <div>
            <h5>Enter temperature in {scaleNames[scale]} </h5>
            <input type="text" value={temperature} onChange={this.handleChange}/>
        </div>
        
        )    
    }
}

export default Temperature;