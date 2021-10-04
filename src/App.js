import './App.css';


import React, { Component } from 'react'

export default class App extends Component {
  state = {
    counter: 0,
    posts: [{
      id: "1",
      title: "Titulo 1",
      body: "Corpo do post"
    },
    {
      id: "2",
      title: "Titulo 2",
      body: "Corpo do post"
    },
    {
      id: "3",
      title: "Titulo 3",
      body: "Corpo do post"
    },]
  };

  timeout = null;

  handleTimeOut = () => {
    const { posts, counter } = this.state;
    posts[0].title = "Titulo mudou";
    this.timeout = setTimeout(() => {
      this.setState({
        posts, counter: counter + 1
      });
    }, 1000)
  }

  componentDidUpdate() {
    this.handleTimeOut()
    console.log("Componente teve estados modificados")
  }

  componentDidMount() {
    this.handleTimeOut()
    console.log("Tela Carregada e Valores atribuidos")
  }
  componentWillUnmount() {
    clearTimeout(this.timeout)
    console.log("Componente desmontado")
  }

  render() {
    const { posts, counter } = this.state;




    return (
      <div className="App">
        <h1> {counter} </h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1 >{post.title}</h1>
            <p >{post.title}</p>
          </div>
        )
        )}
      </div>
    );
  }
}



