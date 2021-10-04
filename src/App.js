import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    // faz isso para ter acesso ao this do component
    this.handlePClick = this.handlePClick.bind(this);
    this.state = {
      name: "Vitor Ferreira",
      counter: 0
    }
  }

  handlePClick() {
    this.setState({ name: "VITOR FERREIRA IASSIA" })
  }

  //Ao fazer a arrow function voce nao precisa dar um bind no constructor
  handleCounter = (event) => {
    // Previnir comportamento padrão
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
    console.log(this.state.counter);
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name}
          </p>
          <a
            className="App-link"
            onClick={this.handleCounter}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}



