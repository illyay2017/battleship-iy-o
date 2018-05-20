import React, { Component } from "react";
import "./App.css";
import LoginForm from "../Login/login.jsx";
import Welcome from "../Welcome/welcome.jsx";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  signIn(username, password) {
    this.setState({
      user: {
        username,
        password,
      }
    });
  }

  signOut() {
    this.setState({user: null})
  }

  render() {
    return (
      <div className="App">
        <h3> Hello, and welcome to Battleship.IYO! </h3>
        {
          (this.state.user) ? 
            <Welcome
              user = {this.state.user}
              onSignOut = {this.signOut.bind(this)}
            />
          :
            <LoginForm 
              onSignIn={this.signIn.bind(this)}
            />
        }
      </div>
    );
  }
}

export default App;