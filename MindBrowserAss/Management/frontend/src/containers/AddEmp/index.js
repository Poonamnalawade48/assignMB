import React, { Component } from 'react';
import { FormGroup, InputGroup, Text, AnchorButton, Button, Classes, Code, Dialog, H5, Intent, Switch, Tooltip  } from "@blueprintjs/core";

export default class AddEmp extends Component {
  state = {
    First_Name: '',
    Last_Name: '',
    Address:'',
    Date_Of_Birth:'',
   Mobile_No:'',
   City:'',
   manager:1,
   isCreating:false,
  }

  render () {
     const {First_Name,Last_Name,Address,Date_Of_Birth,Mobile_No,City,manager} = this.state;

    return (
        <div className=" mr-sm-2">
            {this.renderDialog()}
            <Button onClick={this.handleInsertion}> Add Employee </Button>
        </div>
    );
  }

  renderDialog = () => {
    const {First_Name,Last_Name,Address,Date_Of_Birth,Mobile_No,City,manager,isCreating } = this.state;
    return(
        <Dialog
        icon="info-sign"
        onClose={this.handleEditDialogClose}
        title="Add new Employee Record"
        isOpen={isCreating}
      >
        <div className={Classes.DIALOG_BODY}>
         <FormGroup
            label="Firstname"
            labelFor="firstname-input"
          >
            <InputGroup
              id="firstname-input"
              placeholder="Firstname"
              value={First_Name}
              onChange={(e) => this.setState({ First_Name: e.target.value })}
            />
          </FormGroup>
          <FormGroup
            label="Lastname"
            labelFor="lastname-input"
          >
            <InputGroup
              id="lastname-input"
              placeholder="Lastname"
              value={Last_Name}
              onChange={(e) => this.setState({ Last_Name: e.target.value })}
            />
          </FormGroup>
                  
          <FormGroup
            label="Address"
            labelFor="address-input"
          >
            <InputGroup
              id="address-input"
              placeholder="Address"
              value={Address}
              onChange={(e) => this.setState({ Address: e.target.value })}
            />
          </FormGroup>
          <FormGroup
            label="DateOfBirth"
            labelFor="dob-input"
          >
            <InputGroup
              id="dob-input"
              placeholder="dobname"
              type={'Date'}
              value={Date_Of_Birth}
              onChange={(e) => this.setState({ Date_Of_Birth: e.target.value })}
            />
          </FormGroup>
          <FormGroup
            label="mobileNo"
            labelFor="mobileNo-input"
          >
            <InputGroup
              id="mobileNo-input"
              placeholder="Enter Mobile No with country code e.g India +91..."
              value={Mobile_No}
              onChange={(e) => this.setState({ Mobile_No: e.target.value })}
            />
          </FormGroup>
         
          <FormGroup
            label="city"
            labelFor="city-input"
          >
            <InputGroup
              id="city-input"
              placeholder="City"
              value={City}
              onChange={(e) => this.setState({ City: e.target.value })}
            />
          </FormGroup>
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button onClick={this.handleEditDialogClose}>Close</Button>
              <Button onClick={this.handleInsertEmp}>Save</Button>
            </div>
        </div>
      </Dialog>

          
    );

  }

  handleEditDialogClose = event => {
    this.setState({
     isCreating:false,
    
    })
  }
  handleInsertion = event => {
     this.setState({
         isCreating: true,
     })
  }

   handleInsertEmp = event => {
    event.preventDefault();
    console.log(JSON.stringify(this.state))
    fetch('http://localhost:8000/api/Employee/insert', {
        method: 'POST',
        headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
        body:JSON.stringify(this.state)
       
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
    this.setState({
        isCreating:false,
       
       })
  }
}
