import './styles.css'

import React, { useState, useEffect, useCallback } from 'react'
import { loadPosts } from '../../utils/load_posts';
import { ListOfPosts } from '../../components/ListOfPosts';
import { Button } from '../../components/Button';
import SearchInput from '../../components/SearchInput';





export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postByPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
    : posts
  const noMorePost = page + postByPage >= allPosts.length;

  const loadMorePosts = () => {
    console.log("Carregando mais posts");

    const nextPage = page + postByPage;
    const newPosts = allPosts.slice(nextPage, nextPage + postByPage);
    posts.push(...newPosts);

    setPosts(posts);
    setPage(nextPage);

  }

  const handleChangeInputSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  }


  //   async componentDidMount() {
  //     const posts = await loadPosts();
  //     const { page, postByPage } = this.state;
  //     this.setState({ posts: posts.slice(page, postByPage), allPosts: posts })
  //     console.log("Tela Carregada e Valores atribuidos");
  //   }

  const handleLoadPosts = useCallback(async (page, postByPage) => {
    const posts = await loadPosts();

    setPosts(posts.slice(page, postByPage));

    setAllPosts(posts);

  }, [])

  useEffect(() => {
    handleLoadPosts(0, postByPage);

    console.log("Tela Carregada e Valores atribuidos");
  }, [handleLoadPosts, postByPage])

  return (
    <section className="container">

      <div className="search-container">
        {
          !!searchValue && <h1>Valor Pesquisa: {searchValue}</h1>
        }

        <SearchInput onChangeInput={handleChangeInputSearch} value={searchValue} />
      </div>



      {filteredPosts.length > 0
        ? (<ListOfPosts posts={filteredPosts} />)
        : <p> Não existe posts</p>
      }

      <div className="button-container">
        {!searchValue && (
          <Button
            text="Carregar mais Posts"
            onClick={loadMorePosts}
            disabled={noMorePost}

          />
        )}

      </div>
    </section>

  );
}







// export default class HomePage extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postByPage: 2,
//     searchValue: ''
//   };







//   render() {
//     const { posts, allPosts, page, postByPage, searchValue } = this.state;
//     const noMorePost = page + postByPage >= allPosts.length;
//     const filteredPosts = !!searchValue
//       ? allPosts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
//       : posts
//     return (
//       <section className="container">

//         <div className="search-container">
//           {
//             !!searchValue && <h1>Valor Pesquisa: {searchValue}</h1>
//           }

//           <SearchInput onChangeInput={this.handleChangeInputSearch} value={searchValue} />
//         </div>



//         {filteredPosts.length > 0
//           ? (<ListOfPosts posts={filteredPosts} />)
//           : <p> Não existe posts</p>
//         }

//         <div className="button-container">
//           {!searchValue && (
//             <Button
//               text="Carregar mais Posts"
//               onClick={this.loadMorePosts}
//               disabled={noMorePost}

//             />
//           )}

//         </div>
//       </section>

//     );
//   }
// }



