import React, {Component} from 'react';
import Todo from "./Todo";

class List extends Component {
    constructor() {
        super();
        this.state = {}
    }
  render() {
    let list = this.props.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    
    return <ul>{list}</ul>;
  }
}

export default List
//List is responsible for displaying the tasks inside of a [task array] on the App Component in a <li> fashion