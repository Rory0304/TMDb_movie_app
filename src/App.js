import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" component={Home}></Route>
    </HashRouter>
  );
}

export default App;
