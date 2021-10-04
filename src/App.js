import './App.css';


import React, { Component } from 'react'

export default class App extends Component {
  state = {
    posts: [],

  };



  componentDidMount() {
    this.loadPosts();
    console.log("Tela Carregada e Valores atribuidos");
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    const postJson = await posts.json();
    const photosJson = await photos.json();
    const postAndPhoto = postJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    })

    this.setState({ posts: postAndPhoto, })
  }


  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <div className="post" >
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className="post-content">
                <h1 >{post.title}</h1>
                <p >{post.title}</p>
              </div>
            </div>
          )
          )}
        </div>
      </section>

    );
  }
}



