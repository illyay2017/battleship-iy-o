import React, { Component } from "react";

class LoginForm extends Component {
  handleSignIn(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.username.password;
    this.props.onSignIn(username, password);
  }

  render() {
    return (  
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h4>Sign in</h4>
        <input type="text" ref="username" placeholder="enter you username" autoComplete="on" />
        <input type="password" ref="password" placeholder="enter password" autoComplete="on"/>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginForm;