import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import About from "./components/About/About";
import ProjectList from "./components/ProjectList/ProjectList";

class App extends React.Component {
  state = {
    name: "Ryan",
    email: "ryan@gmail.com",
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
        />
        <ProjectList />
      </div>
    );
  }
}

export default App;
