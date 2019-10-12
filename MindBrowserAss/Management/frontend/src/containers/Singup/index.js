import React, { Component } from 'react';
import { Button, Card, Elevation, FormGroup, InputGroup } from "@blueprintjs/core";

export default class Signup extends Component {
  state = {
    Email_Id: '',
    First_Name: '',
    Last_Name: '',
    Password: '',
    Address:'',
    Date_Of_Birth:'',
    Company:'',
  }

  render() {
    const {Email_Id,First_Name,Last_Name,Password, Address,Date_Of_Birth,Company } = this.state;

    return (
      <div className="signup-container">
        <Card
          interactive={true}
          elevation={Elevation.TWO}
        >
        <h1>Signup</h1>
        <form onSubmit={this.handleSignup}>
         
          <FormGroup
            label="Email Address"
            labelFor="email-input"
          >
            <InputGroup
              id="email-input"
              placeholder="Email"
              value={Email_Id}
              onChange={(e) => this.setState({ Email_Id: e.target.value })}
            />
          </FormGroup>
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
            label="Password"
            labelFor="password-input"
          >
            <InputGroup
              id="password-input"
              placeholder="Enter your password..."
              type={'password'}
              value={Password}
              onChange={(e) => this.setState({ Password: e.target.value })}
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
            label="Company"
            labelFor="company-input"
          >
            <InputGroup
              id="company-input"
              placeholder="Company"
              value={Company}
              onChange={(e) => this.setState({ Company: e.target.value })}
            />
          </FormGroup>

          <Button
            className="bp3-intent-primary"
            type="submit"
          >
            Signup
          </Button>

          </form>
        </Card>
      </div>
    );
  }

  handleSignup = event => {
    event.preventDefault();
    // @TODO - Need to add API call to add new user and then will navigate user to login screen
    // All data -> this.state
    fetch('http://localhost:8000/api/Manager/insert', {
        method: 'POST',
        headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
        body:JSON.stringify(this.state)
       
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
    this.props.history.push('/');
  }
}
