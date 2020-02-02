import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/About" component={About}></Route>
    </HashRouter>
  );
}

export default App;
