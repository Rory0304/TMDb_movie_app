import React from "react";
import "./Navigation.css";
function Navigation() {
  return (
    <div class="nav">
      <ul>
        <li>Popular</li>
        <li>Top rated</li>
        <li>Upcoming</li>
        <li>Now playing</li>
      </ul>

      <input
        onChange={this.getMoviesBytitle.bind()}
        placeholder="Enter Search Items"
        className="inputbox"
      ></input>
    </div>
  );
}

export default Navigation;
