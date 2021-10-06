import './styles.css'

import React, { Component } from 'react'
import { loadPosts } from '../../utils/load_posts';
import { ListOfPosts } from '../../components/ListOfPosts';
import { Button } from '../../components/Button';
import SearchInput from '../../components/SearchInput';

export default class HomePage extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postByPage: 2,
    searchValue: ''
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

  handleChangeInputSearch = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value })
  }


  render() {
    const { posts, allPosts, page, postByPage, searchValue } = this.state;
    const noMorePost = page + postByPage >= allPosts.length;
    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
      : posts
    return (
      <section className="container">

        <div className="search-container">
          {
            !!searchValue && <h1>Valor Pesquisa: {searchValue}</h1>
          }

          <SearchInput onChangeInput={this.handleChangeInputSearch} value={searchValue} />
        </div>



        {filteredPosts.length > 0
          ? (<ListOfPosts posts={filteredPosts} />)
          : <p> Não existe posts</p>
        }

        <div className="button-container">
          {!searchValue && (
            <Button
              text="Carregar mais Posts"
              onClick={this.loadMorePosts}
              disabled={noMorePost}

            />
          )}

        </div>
      </section>

    );
  }
}



