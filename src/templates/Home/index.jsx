import './styles.css'

import React, { Component } from 'react'
import { loadPosts } from '../../utils/load_posts';
import { ListOfPosts } from '../../components/ListOfPosts';
import { Button } from '../../components/Button';

export default class HomePage extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postByPage: 52,

  };

  async componentDidMount() {
    const posts = await loadPosts();
    const { page, postByPage } = this.state;
    this.setState({ posts: posts.slice(page, postByPage), allPosts: posts })
    console.log("Tela Carregada e Valores atribuidos");
  }


  loadMorePosts = () => {
    console.log("Carregando mais posts");

    const { page, postByPage, allPosts, posts } = this.state;

    const nextPage = page + postByPage;
    const newPosts = allPosts.slice(nextPage, nextPage + postByPage);
    posts.push(...newPosts);
    this.setState({ posts, page: nextPage });

  }


  render() {
    const { posts, allPosts, page, postByPage } = this.state;
    const noMorePost = page + postByPage >= allPosts.length;

    return (
      <section className="container">
        <ListOfPosts posts={posts} />
        <div className="button-container">
          <Button
            text="Carregar mais Posts"
            onClick={this.loadMorePosts}
            disabled={noMorePost}

          />
        </div>
      </section>

    );
  }
}



