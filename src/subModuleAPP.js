/*
    Candidate
            Registration 
*/

import React, { Component } from "react";
import "./vendors/css/normalize.css";
import "./css/style.css";
import "./css/queries.css";
import "./vendors/css/grid.css";

//React module - To use predefined form elements
import AllELements from "./customComponents/formElements.js";

//Node module - to write Form data into local JSON file
import ProcessRecords from "./dataFiles/dataFileOperations - (Node).js";
class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: {
        firstName: "Lakshay",
        lastName: "",
        emailId: "",
        mobile: "",
        dob: "",
        address: "",
        designation: "",
        department: "",
        ctc: "",
        status: "",
        fileUrl: ""
      },
      formElementProps: [
        {
          labelName: "Applicant ID",
          id: "applicantId",
          elementType: "input",
          type: "text",
          placeholder: "Unique Registration Id",
          value: "",
          handlerInputChange: this.handleInputChange,
          handlerSubmit: "",
          select: [
            { optName: "", optValue: "" },
            { optName: "", optValue: "" },
            { optName: "", optValue: "" }
          ]
        },
        {
          labelName: "First Name",
          id: "firstName",
          elementType: "input",
          type: "text",
          placeholder: "First Name",
          value: "",
          handlerInputChange: this.handleInputChange,
          handlerSubmit: ""
        },
        {
          labelName: "Last Name",
          id: "lastName",
          elementType: "input",
          type: "text",
          placeholder: "Last Name",
          value: "",
          handlerInputChange: this.handleInputChange,
          handlerSubmit: ""
        },
        {
          labelName: "Email ID",
          id: "emailId",
          elementType: "input",
          type: "email",
          placeholder: "Valid Email Id",
          value: "",
          handlerInputChange: this.handleInputChange,
          handlerSubmit: ""
        },
        {
          labelName: "Mobile Number",
          id: "mobile",
          elementType: "input",
          type: "text",
          placeholder: "Primary Contact Number",
          value: "",
          handlerInputChange: this.handleInputChange,
          handlerSubmit: ""
        },
        {
          labelName: "Date Of Birth",
          id: "dob",
          elementType: "input",
          type: "date",
          handlerInputChange: this.handleInputChange
        },
        {
          labelName: "Address",
          id: "address",
          elementType: "textarea",
          type: "text",
          placeholder: "Permanent Address",
          handlerInputChange: this.handleInputChange
        },
        {
          labelName: "Resume Upload",
          id: "file",
          elementType: "input",
          type: "file",
          accept: ".pdf",
          handlerInputChange: this.handleInputChange
        },
        {
          labelName: "Department",
          id: "department",
          elementType: "dropdown",
          handlerInputChange: this.handleInputChange,
          select: [
            { optName: "Android", optValue: "android" },
            { optName: "IOS", optValue: "ios" },
            { optName: "Web Development", optValue: "web-dev" },
            { optName: "DevOps", optValue: "devops" }
          ]
        }
      ]
    };
  }

  // Input Handling methods ------- START
  handleSubmit = event => {
    event.preventDefault();

    document.write("<p>" + JSON.stringify(this.state) + "</p>");

    ProcessRecords();
  };

  handleInputChange = event => {
    event.preventDefault();

    let tempValue, tempName;
    tempName = event.target.name;
    console.log(this.state.employeeData.firstName);
    if (event.target.name === "fileUrl") {
      tempValue = event.target.files[0];
    } else {
      tempValue = event.target.value;
    }
    this.setState(this.state, () => {
      return { employeeData: { firstName: tempValue } };
    });
  };
  // Input Handling methods ------- END

  render() {
    return (
      <div className="App">
        <div className="row">
          <h1>Candidate Registration</h1>
        </div>

        <section className="section-form">
          <form method="post" className="contact-form">
            {this.state.formElementProps.map(formElementProps => {
              return (
                <AllELements
                  labelName={formElementProps.labelName}
                  id={formElementProps.id}
                  elementType={formElementProps.elementType}
                  type={formElementProps.type}
                  placeholder={formElementProps.placeholder}
                  handlerInputChange={formElementProps.handlerInputChange}
                  value={formElementProps.value}
                />
              );
            })}
            {/* -------------Marital Status----------------- */}
            <div className="row">
              <div className="col span-1-of-3">
                <label>Status</label>
              </div>
              <div className="col span-2-of-3">
                <label>Married: </label>
                <input
                  type="checkbox"
                  name="status"
                  value="married"
                  onChange={this.handleInputChange}
                  defaultChecked
                />
                <label>Single: </label>
                <input
                  type="checkbox"
                  name="status"
                  value="Single"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            {/* -------------Reusable ---- Buttons----------------- */}
            <AllELements
              elementType="button"
              type="submit"
              value="Submit"
              handlerSubmit={this.handleSubmit}
            />

            <AllELements
              elementType="button"
              type="reset"
              value="Reset"
              handlerSubmit={this.handleSubmit}
            />
          </form>
        </section>

        {/* --------------------------------End of form-------------------------------- */}
      </div>
    );
  }
}

export default App1;
