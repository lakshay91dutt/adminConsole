/*
    Candidate
            Registration 
*/

import React, { Component } from 'react';
import './vendors/css/normalize.css'
import './css/style.css';
import './css/queries.css';
import './vendors/css/grid.css'

//React module - To use predefined form elements
import AllELements from './customComponents/formElements.js';

//Node module - to write Form data into local JSON file
import ProcessRecords from './dataFiles/dataFileOperations - (Node).js';    
class App1 extends Component { 
    constructor (props){
        super (props);
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            mobile: '',
            dob: '',
            address: '',
            designation: '',
            department: '',
            ctc: '',
            status: '',
            fileUrl: ''
        }

    }

    // Input Handling methods ------- START
    handleSubmit = (event) => {
        event.preventDefault();

        document.write('<p>' + JSON.stringify(this.state) +'</p>');

    ProcessRecords();
    }

    handleInputChange = (event) => {
      event.preventDefault()

      let tempValue;
      if (event.target.name === "fileUrl") {tempValue = event.target.files[0];}
      else{tempValue = event.target.value;}
      this.setState({
        [event.target.name]: tempValue
      })
    };
    // Input Handling methods ------- END

  render(){
    return (
      <div className = "App">
        <div className = "row">
          <h1>Candidate Registration</h1>
        </div>

        <section className = "section-form">
          <form className = "contact-form" onSubmit = {this.handleSubmit} >
          {/* -------------Reusable ---- Employee ID----------------- */}
            <AllELements 
                labelName = "Applicant ID" id = "applicantId"
                elementType = "input" type = "text"
                placeholder = "Unique Registration id" handlerInputChange = {this.handleInputChange} value = "e1234 ">
            </AllELements>
          {/* -------------Reusable ---- Name----------------- */}
            <AllELements 
                labelName = "First Name" id = "firstName" 
                elementType = "input" type = "text"
                placeholder = "First Name" handlerInputChange = {this.handleInputChange} value = "Lakshay">
            </AllELements>

            {/* -------------Reusable ---- lastName----------------- */}
            <AllELements 
                labelName = "Last Name"
                elementType = "input" type = "text" id = "lastName" 
                placeholder = "Last Name" handlerInputChange = {this.handleInputChange} value = "Dutt">
            </AllELements>
            {/* -------------Reusable ---- Email ID----------------- */}
            <AllELements 
                labelName = "Email Id"
                elementType = "input" type = "email" id = "emailId"
                placeholder = "Valid Email Id" handlerInputChange = {this.handleInputChange} value = "lakshay@gmail.com">
            </AllELements>
            {/* -------------Reusable ---- Mobile----------------- */}
            <AllELements 
                labelName = "Mobile Number" id = "mobile"
                elementType = "input" type = "text"
                placeholder = "Primary Contact Number" handlerInputChange = {this.handleInputChange}>
            </AllELements>
            {/* -------------Reusable ----Date Of Birth----------------- */}
            <AllELements 
                labelName = "Date Of Birth"
                elementType = "input" type = "date"
                id = "dob" handlerInputChange = {this.handleInputChange}>
            </AllELements>
            {/* -------------Reusable ---- Address----------------- */}
            <AllELements 
                labelName = "Address" id = "address" 
                elementType = "textarea" type = "text"
                placeholder = "Permanent Address" handlerInputChange = {this.handleInputChange}>
            </AllELements>
            {/* -------------Reusable ---- File----------------- */}
            <AllELements 
                labelName = "Resume Upload" id = "fileUrl" 
                elementType = "input" type = "file"
                accept = ".pdf" handlerInputChange = {this.handleInputChange}>
            </AllELements>

            {/* -------------Reusable ---- Department----------------- */}
            <AllELements 
                labelName = "Department" id = "department" 
                elementType = "dropDown" handleInputChange = {this.handleInputChange}
                select = {
                        [{
                            opt1Value: "back-end",
                            opt1Name: "Back End"
                        },{
                            opt1Value: "front-end",
                            opt1Name: "Front End"
                        },{
                            opt1Value: "ios",
                            opt1Name: "IOS Developer"
                        },{
                            opt1Value: "android",
                            opt1Name: "Android Developer"
                        },{
                            opt1Value: "other",
                            opt1Name: "Other"                            
                        }]
                }>
            </AllELements>
            {/* -------------Reusable ---- Designation----------------- */}
            <AllELements 
                labelName = "Designation" id = "designation" 
                elementType = "dropDown" handleInputChange = {this.handleInputChange}
                select = {
                        [{
                            opt1Value: "back-end",
                            opt1Name: "Back End Developer"
                        },{
                            opt1Value: "front-end",
                            opt1Name: "Front End Developer"
                        },{
                            opt1Value: "ios",
                            opt1Name: "IOS Developer"
                        },{
                            opt1Value: "android",
                            opt1Name: "Android Developer"
                        },{
                            opt1Value: "other",
                            opt1Name: "Other"                            
                        }]
                }>
            </AllELements>
            {/* -------------Reusable ---- CTC----------------- */}
            <AllELements 
                labelName = "CTC" id = "ctc"
                elementType = "input" type = "number"
                placeholder = "Current CTC" handleInputChange = {this.handleInputChange}>
            </AllELements>
            {/* -------------Marital Status----------------- */}
            <div className="row">
                <div className="col span-1-of-3">
                    <label>Status</label>
                </div>
                <div className="col span-2-of-3">
                    <label>Married: </label>
                    <input type="checkbox" name="status" value="married" onChange = {this.handleInputChange} defaultChecked/>
                    <label>Single: </label>
                    <input type="checkbox" name="status" value="Single"  onChange = {this.handleInputChange} />
                </div>
            </div>
          {/* -------------Reusable ---- Buttons----------------- */}
            <AllELements 
                elementType = "button" type = "submit" value = "Submit"
                handlerSubmit = {this.handleSubmit}>
            </AllELements>

            <AllELements 
                elementType = "button" type = "reset" value = "Reset"
                handlerSubmit = {this.handleSubmit}>
            </AllELements>
        </form>
        </section>

{/* --------------------------------End of form-------------------------------- */}
      </div>
    );
  }
}

export default App1;
