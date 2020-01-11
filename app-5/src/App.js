import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Image from "./Components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image dog={"https://momentum.photos/img/4478d806-9d59-4f77-9686-d887a5ffd41e.jpg"}/>
      </div>
    )
  }
}
export default App;
