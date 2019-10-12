import React, { Component } from 'react';
import { Button, Card, Elevation, FormGroup, InputGroup, ButtonGroup } from "@blueprintjs/core";

export default class Login extends Component {
  state = {
    items: [],
    isLoading: false,
    email: '',
    password: '',
  }

   componentDidMount() {
    this.fetchRepositories();
    console.log(this.items);
  }

  render() {
    const { email, password,items, isLoading } = this.state;

    return (
      <div className="login-container">
        <Card
          interactive={true}
          elevation={Elevation.TWO}
        >
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <FormGroup
            label="EmailID"
            labelFor="email-input"
          >
            <InputGroup
              id="email-input"
              placeholder="EmailID"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
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
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </FormGroup>

          <ButtonGroup>
          </ButtonGroup>
  
          <ButtonGroup minimal={true}>
            <Button
              className="bp3-intent-primary"
              type="submit"
              onClick={this.handleLogin}
            >
              Login
            </Button>
            <Button
              className="bp3-intent-primary"
              onClick={(e) => {e.preventDefault(); this.props.history.push('/signup');}}
            >
              Signup
            </Button>
          </ButtonGroup>


          </form>
        </Card>
      </div>
    );
  }
  fetchRepositories = async owner => {
    this.setState({ isLoading: true });
    const response = await fetch(
      `http://localhost:8000/api/Manager/Login/${this.state.email}`,
      {
        headers: { accept: "application/json" }
      }
    );
  
    if (response.status === 200) {
      const json = await response.json();
      this.setState({
        items: json,
        isLoading: false,
      });
    } else {
      this.setState({
        items: [],
        isLoading: false,
      })
    }
    console.log(this.state.items);
  }

  handleLogin = event => {
    event.preventDefault();
    // @TODO - Need to add API call for user authentication, then we will push route for dashboard on success.
    // All data -> this.state
    const username=this.state.email;
    const password=this.state.password;
   console.log(username);
   fetch('http://localhost:8000/api/Manager/Login/', {
    method: 'PUT',
    headers: {
                Accept: 'application/json',
              'Content-Type': 'application/json',
              },
    body:JSON.stringify({Email_Id:username,Password:password})
}).then((res) => res.json())
.then((data) =>  console.log(data))
.catch((err)=>console.log(err)) 

    this.props.history.push('/dashboard');
  }
  
}

