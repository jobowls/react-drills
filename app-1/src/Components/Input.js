import React, {Component} from 'react';


class Input extends Component {
    constructor() {
        super();

        this.state = {
            message: ''
        };
    }


// 'value' is defined here as a PARAM inside handleChange function and bound to Component
handleChange = (value) => {
    this.setState({ message: value });
  }

  render() {
    return (
        <div className="Input">

        <input onChange={e => this.handleChange(e.target.value)} type="text" id="box" placeholder="Type Message" ></input>

        <p>{this.state.message}</p>

        </div>
    )
  }
}

export default Input;