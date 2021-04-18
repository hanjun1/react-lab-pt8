import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from '../HomePage/HomePage'
import Blog from '../BlogPage/BlogPage'

class App extends React.Component {
  render() {
    return (
      <div className="App outline">
        <nav className="nav">
          <Link to='/'>Home</Link>
          <Link to='/blog'>Blog</Link>
        </nav>
        <Switch>
          <Route path="/blog" render={(props) => (
            <Blog {...props}/>
          )}/>
          <Route path="/" render={(props) => (
            <Home {...props}/>
          )}/>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
