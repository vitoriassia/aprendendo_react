import './App.css';


import React, { Component } from 'react'

export default class App extends Component {
  state = {
    posts: [
      {
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
      },
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
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



