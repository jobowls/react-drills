import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange= (name) => {
    this.setState({ username: name });
  }

  handlePasswordChange = (pass) => {
    this.setState({ password: pass });
  }

  handleLogin = () => {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div className="Login">
        <input
          onChange={e => this.handleUsernameChange(e.target.value)}
          type="text" placeholder="Username" id="name"
        />
        <input
          onChange={e => this.handlePasswordChange(e.target.value)}
          type="text" placeholder="Password" id="pass"
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;