import React, { Component } from "react";

import "./App.css";

import Login from "./Components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header"> REACT DRILL #4 </header>
        <Login />
      </div>
    );
  }
}

export default App;