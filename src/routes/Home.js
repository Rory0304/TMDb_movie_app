import React from "react";
import "./Home.css";
import Axios from "axios";
import Movie from "./Movie";

class Home extends React.Component {
  constructor(props) {
    console.log("this is initializer");
    super(props);

    this.state = {
      isLoading: true,
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
    this.setState({ isLoading: false, db: data });
  };

  //right after render
  componentDidMount = async event => {
    const { data } = await Axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=b1306395631dc84cde154096963c13db&language=en-US"
    );
    this.setState({ isLoading: false, db: data });
  };

  render() {
    const { isLoading, db } = this.state;
    return (
      <div className="Home">
        <header>
          <h1>The MovieDB</h1>
        </header>
        <div class="nav">
          <ul>
            <li>Popular</li>
            <li>Top rated</li>
            <li>Upcoming</li>
            <li>Now playing</li>
          </ul>
          <div className="search">
            <input
              onChange={this.getMoviesBytitle.bind()}
              placeholder="Enter Search Items"
              className="inputbox"
            ></input>
          </div>
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
      </div>
    );
  }
}

export default Home;
