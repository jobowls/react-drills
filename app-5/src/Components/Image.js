import React, {Component} from 'react';
import beheaded from '../Components/deadCells.jpg';

class Image extends Component {
  render() {
    return (
      <div>
        <img id="beheaded" src={beheaded} alt="none" />
      </div>
    )
  }
}

export default Image;