import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App1 from './subModuleAPP';
class App extends Component {
    constructor(props) {
        super(props);
    }
    loadApp1 = (event) => {
        event.preventDefault();
        console.log("Clicked");
        ReactDOM.render(<App1 />, document.body);
    }
    defaultMsg=(event) => {
        event.preventDefault();
        document.write('<h1> Work in progress</h1>');
    }
    render() {
        return (
            <div>
                <div className="hero-text-box">
                    <h1>ADMINISTRATOR'S DASHBOARD</h1>
                    <a className="btn btn-ghost" href="register" onClick={this.loadApp1}>Register Employee</a>
                    <a className="btn btn-full" href="editEmployee" onClick={this.defaultMsg}>Edit Employee Profile</a>
                    <a className="btn btn-ghost" href="requests" onClick={this.defaultMsg}>Requests</a>
                    <a className="btn btn-full" href="others" onClick={this.defaultMsg}>Others</a>
                </div>
            </div>);

    }
}
export default App;
