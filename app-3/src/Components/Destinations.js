import React, { Component } from "react";

class Destinations extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      getawayDestinations: ["Porto Alegre, Brasil", "North Shore Kauai", "Oslo, Norway", "Punta Cana, Dominican Republic", "Banff, Canada", "Jackson, Wyoming"]
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let getaways = this.state.getawayDestinations
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" placeholder="Search" />
        {getaways}
      </div>
    );
  }
}

export default Destinations;