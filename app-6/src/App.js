import React, { Component } from "react";
import "./App.css";
import Vision from './Component/Vision';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    };
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAddGoal = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Vision key={index} goal={element} />;
    });

    return (
      <div className="App">
        <h1> My Vision Board </h1>

        <div>
          <input
            value={this.state.input}
            placeholder="Enter new goal"
            onChange={e => this.handleInputChange(e.target.value)}
          />

          <button onClick={this.handleAddGoal}>Add</button>
        </div>

        <br />

        {list}
      </div>
    );
  }
}

export default App;