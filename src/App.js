import './App.css';


import React, { Component } from 'react'
import { loadPosts } from './utils/load_posts';
import { ListOfPosts } from './components/ListOfPosts';

export default class App extends Component {
  state = {
    posts: [],

  };



  async componentDidMount() {

    const posts = await loadPosts();
    this.setState({ posts: posts, })
    console.log("Tela Carregada e Valores atribuidos");
  }


  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <ListOfPosts posts={posts} />
      </section>

    );
  }
}



