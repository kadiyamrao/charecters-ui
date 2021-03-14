import React, { Component } from 'react';
import Temperature from './components/TempConverterComponent'; 
import Clock from './components/ClockComponent';
import Toggle from './components/ToggleComponent';
import FormTableComponent from './components/FormTableComponent';
import SampleContextComponent from './components/ContextComponent';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="row">
          <div className="col border">
            <h2>Learning react js</h2>
          </div>
        </div>
        <div className="row m-4">
          <div className="col-2">
            <ul className="nav flex-column">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/clock">Clock</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/form-table">Form &amp; Table</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/lift-up-state">Lift up state</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/toggle">Toggle</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/context">Context</Link></li>
            </ul>
          </div>
          <div className="col-10">
            <Switch>
              <Route path="/clock">
                <Clock region='India' offset='5.5'/>
                <Clock region='Singapore' offset='8'/>
                <Clock region='Ireland' offset='0'/>
              </Route>
              <Route path="/form-table">
                <FormTableComponent />
              </Route>
              <Route path="/lift-up-state">
                <Temperature />
              </Route>
              <Route path="/toggle">
                <Toggle/>
              </Route>
              <Route path="/context">
                <SampleContextComponent/>
              </Route>
              <Route exact path="/">
                <h4>React Learning
                  <p className="lead">
                    Learning React along with sample implementation helps me remember the concepts. 
                  </p>
                </h4>
                <div>
                  <ul>
                    <li>Bootstrap CSS is used across the application</li>
                    <li>react-router-dom is used to develop navagation bar</li>
                    <li>Develop sample app for code-splitting
                      <ul>
                        <li>import()</li>
                        <li>
                          <div>
                            React.lazy - Suspance
                          </div>
                          <div>
                            React.lazy - will not work on server side - <span className="text-muted">Need to underatnd this.</span> 
                            Will work only for default export components. 
                          </div>
                        </li>
                        <li>Router based loading</li>
                        
                      </ul>
                    </li>
                      
                    <li>...</li>
                  </ul>
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>      
    )
  }
}

export default App;
