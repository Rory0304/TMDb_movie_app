import React from "react";
import "./Home.css";
import Axios from "axios";
import Movie from "../components/Movie";
import Page from "../components/Page";

class Home extends React.Component {
  constructor(props) {
    console.log("this is initializer");
    super(props);

    this.state = {
      isLoading: true,
      url: "",
      page: 1,
      total_pages: 1,
      db: []
    };
  }

  //component update by searching title
  getMoviesBytitle = async event => {
    const searchitm = event.target.value;
    const { data } = await Axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=b1306395631dc84cde154096963c13db&sort_by=popularity.desc&query=" +
        searchitm
    );
    this.setState({
      isLoading: false,
      db: data,
      page: data.page,
      total_pages: data.total_pages
    });
  };

  getMoviesByPopular = async event => {
    const { data } = await Axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=b1306395631dc84cde154096963c13db&language=en-US"
    );
    this.setState({
      isLoading: false,
      db: data,
      page: data.page,
      total_pages: data.total_pages
    });
  };

  getMoviesByTop = async event => {
    const { data } = await Axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b1306395631dc84cde154096963c13db&language=en-US"
    );
    this.setState({
      isLoading: false,
      db: data,
      page: data.page,
      total_pages: data.total_pages
    });
  };

  //right after render
  componentDidMount = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=b1306395631dc84cde154096963c13db&language=en-US";
    const { data } = await Axios.get(url);
    this.setState({
      isLoading: false,
      db: data,
      url: url,
      page: data.page,
      total_pages: data.total_pages
    });
  };

  getNextPage = () => {
    console.log("here");
    this.setState(current => ({ page: current.page + 1 }));
  };

  getPrevPage = () => {
    this.setState(current => ({ page: current.page - 1 }));
  };

  render() {
    const { isLoading, db, page, total_pages } = this.state;
    return (
      <div className="Home">
        <header>
          <a href="/">
            <h1>The MovieDB</h1>
          </a>
        </header>

        <div class="nav">
          <ul>
            <li onClick={this.getMoviesByPopular}>Popular</li>
            <li onClick={this.getMoviesByTop}>Top rated</li>
            <li>Upcoming</li>
            <li>Now playing</li>
          </ul>

          <input
            onChange={this.getMoviesBytitle.bind()}
            placeholder="Enter Search Items"
            className="inputbox"
          ></input>
        </div>

        <div className="contents">
          {isLoading ? (
            <div className="loading">
              <span className="load_text">Loading..</span>
            </div>
          ) : (
            db.results.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                date={movie.release_date}
                overview={movie.overview}
                poster={"http://image.tmdb.org/t/p/w185" + movie.poster_path}
              ></Movie>
            ))
          )}
        </div>
        <Page page={page} total_pages={total_pages}></Page>
      </div>
    );
  }
}

export default Home;
