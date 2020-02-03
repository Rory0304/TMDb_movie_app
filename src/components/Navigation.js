import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <Link to="/Popular">
        <li>Popular</li>
      </Link>
      <Link to="/TopRate">
        <li>Top rated</li>
      </Link>
      <li>Upcoming</li>
      <li>Now playing</li>
    </ul>
  );
}

export default Navigation;
