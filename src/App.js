import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import About from "./components/About/About";
import ProjectList from "./components/ProjectList/ProjectList";

class App extends React.Component {
  state = {
    name: "",
    email: "",
    isLoggedIn: false,
    buttonLabel: "Login",
  };
  loginUser = () => {
    this.setState({
      name: "Ryan",
      email: "ryan@gmail.com",
      isLoggedIn: true,
    });
  };
  logoutUser = () => {
    this.setState({
      name: "",
      email: "",
      isLoggedIn: false,
    });
  };
  checkStatus = () => {
    if (this.state.isLoggedIn) {
      this.setState({ buttonLabel: "Login" }, () => {
        this.logoutUser();
      });
    } else {
      this.setState({ buttonLabel: "Logout" }, () => {
        this.loginUser();
      });
    }
  };
  render() {
    return (
      <div className="App outline">
        <About
          imgURL={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          }
          name={this.state.name}
          email={this.state.email}
          checkStatus={this.checkStatus}
          buttonLabel={this.state.buttonLabel}
        />
        <ProjectList />
      </div>
    );
  }
}

export default App;
