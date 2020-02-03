import React from "react";
import "./Common.css";
import Axios from "axios";
import Movie from "../components/Movie";
import Page from "../components/Page";
import Navigation from "../components/Navigation";

class TopRate extends React.Component {
  constructor(props) {
    console.log("this is initializer");
    super(props);

    this.state = {
      url:
        "https://api.themoviedb.org/3/movie/top_rated?api_key=b1306395631dc84cde154096963c13db&language=en-US",
      isLoading: true,
      page: 1,
      total_pages: 1,
      db: []
    };
  }

  //component update by searching title
  getMoviesBytitle = async event => {
    const searchitm = event.target.value;
    const new_url =
      "https://api.themoviedb.org/3/search/movie?api_key=b1306395631dc84cde154096963c13db&language=en-US" +
      "&query=" +
      searchitm;
    const { data } = await Axios.get(new_url);
    this.setState({
      url: new_url,
      isLoading: false,
      db: data,
      page: data.page,
      total_pages: data.total_pages
    });
  };

  getMovieList = async page => {
    console.log(page);
    const new_url = this.state.url + "&page=" + page;
    const { data } = await Axios.get(new_url);
    this.setState({
      url: new_url,
      isLoading: false,
      db: data,
      page: data.page,
      total_pages: data.total_pages
    });
  };

  //right after render
  componentDidMount() {
    console.log("rendered");
    this.getMovieList(1);
  }

  getNextPage = async () => {
    this.getMovieList(this.state.page + 1);
  };

  getPrevPage = () => {
    this.getMovieList(this.state.page - 1);
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

        <div className="nav">
          <Navigation></Navigation>
          <input
            onChange={this.getMoviesBytitle.bind()}
            placeholder="Enter Search Items"
            className="inputbox"
          ></input>
        </div>
        <div className="container">
          <h2 className="title">Top Rated Movies</h2>
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
          <Page
            getPrevPage={this.getPrevPage}
            getNextPage={this.getNextPage}
            page={page}
            total_pages={total_pages}
          ></Page>
        </div>
      </div>
    );
  }
}

export default TopRate;
