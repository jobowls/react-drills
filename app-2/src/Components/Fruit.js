import React, {Component} from 'react';

class Fruit extends Component {
    constructor() {
        super();

        this.state = {
            frutas: ["Mango", "Jabuticaba", "Acaí", "Morango", "Chimarrão"]
        };
    }

    render() {
        let frutasBrasileiras = this.state.frutas.map((element, index) => {
            return <h2 key={index}> {element} </h2>;
        });

        return <div> {frutasBrasileiras} </div>;
    }
}


export default Fruit;