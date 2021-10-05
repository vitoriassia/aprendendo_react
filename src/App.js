import './App.css';


import React, { Component } from 'react'
import { PostCard } from './components/PostCard';

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
            <PostCard post={post} key={post.id} />
          )
          )}
        </div>
      </section>

    );
  }
}



