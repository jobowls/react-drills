import React, {Component} from 'react';
import NewTask from "./Components/NewTask";
import List from "./Components/List";
import Todo from "./Components/Todo";


class App extends Component {
  constructor() {
    super()
    this.state = {
      arr: []
    }
    this.handleAdd=this.handleAdd.bind(this);
  }
  handleAdd(task) {
    this.setState({arr: [...this.state.arr, task]})
    console.log(this.state.arr)
  }

  render() {
    return (
      <div>
        <NewTask add={this.handleAdd}/>
        <List list={this.state.arr}/>
        <Todo/>
      </div>
    )
  }
}

export default App;