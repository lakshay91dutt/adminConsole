import React from 'react'

const AllElements = (props) => {

    let resp = [];

    //input - text, email, number, date, file
    if (props.elementType === "input"){
        resp.push(
        <div>
            <div className = "row">
                <div className = "col span-1-of-3">
                    <label htmlFor = {props.id}>{props.labelName}</label>
                </div>
                <div className = "col span-2-of-3">
                    <input
                    type= {props.type} name= {props.id} id= {props.id}
                    accept = {props.accept} 
                    placeholder= {props.placeholder} 
                    onClick = {props.handlerOnClick}
                    onChange = {props.handlerInputChange}
                    value = {props.value}
                    ></input>
                </div>
            </div>
            <br></br>
        </div>
        );
    }

    //textarea - address
    else if (props.elemenyType === "textarea") {
        resp.push(
        <div>
            <div className = "row">
                <div className = "col span-1-of-3">
                    <label>{props.labelName}</label>
                </div>
                <div className = "col span-2-of-3">
                    <textarea type= {props.type} name= {props.id} placeholder= {props.placeholder} onChange = {props.handleInputChange}></textarea>
                </div>
            </div>
            <br></br>
        </div>
        );
    }

    //select - for drop down menus
    else if (props.elementType === "dropDown") {
        resp.push(
        <div>
            <div className="row">
                <div className="col span-1-of-3">
                    <label>{props.labelName}</label>
                </div>
                <div className="col span-2-of-3">
                    <select name={props.id}>
                        <option value={props.select[0].opt1Value} onChange = {props.handleInputChange}>{props.select[0].opt1Name}</option>
                        <option value="devop" onChange = {props.handleInputChange}>DevOps</option>
                        <option value="android development"  onChange = {props.handleInputChange} selected>Android Development</option>
                        <option value="ios development" onChange = {props.handleInputChange}>IOS</option>
                    </select>
                </div>
            </div>
            <br></br>            

        </div>
        );
    }

    // input - checkbox
    else if (props.elementType === "checkbox") {
        resp.push(
        <div>
            <div className="row">
                <div className="col span-1-of-3">
                    <label>Status</label>
                </div>
                <div className="col span-2-of-3">
                    <label>Married: </label>
                    <input type="checkbox" name="status" value="married" onChange = {props.handleInputChange}/>
                    <label>Single: </label>
                    <input type="checkbox" name="status" value="Single"  onChange = {props.handleInputChange} checked/>
                </div>
            </div>
        </div>
        );
    }
    else if (props.elementType === "button") {
        resp.push(
        <div className="row">
            <div className="col span-1-of-3">
                <label>&nbsp;</label>
            </div>
            <div className="col span-2-of-3">
                <input type={props.type} value={props.value}/>
            </div>            
        </div>

        );
    }
    return resp;
}
export default AllElements;