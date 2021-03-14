import React, { Component, useContext } from "react";
import LoginContext from './ContextCreateComponent';

function UserDetails() {
    const loginData = useContext(LoginContext);
    return <div>
                <div>
                    This is a Functional Component. It gets the login id from context through useContext. 
                </div>
                User logged in with : {loginData.loginId}
            </div>
}

class UserBadge extends Component {
    static contextType = LoginContext;
    render() {
        return(
            <div>
                <h6> 
                    Welcome {this.context.displayName()} 
                    <small>&nbsp;This is class component. 
                        Using static contextType, 
                        the name is pulled from conext.</small>
                </h6>
                <UserDetails />
            </div>
        )
    }
}

class SampleContextComponent extends Component {
    render(){
        const loginProvider = {
            loginId: 'kadiyamrao@gamil.com',
            firstName: 'Ankamma Rao',
            lastName: 'K',
            displayName() {
                return this.firstName + " "+ this.lastName+',';
            }
        }

        return(
            <LoginContext.Provider value={loginProvider}>
                <h6>This is Context sample</h6>
                <UserBadge></UserBadge>
            </LoginContext.Provider>
        )
    }
}

export default SampleContextComponent;