import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Popular from "./routes/Popular";
import TopRate from "./routes/TopRate";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Popular}></Route>
      <Route path="/popular" component={Popular}></Route>
      <Route path="/TopRate" exact={true} component={TopRate}></Route>
    </HashRouter>
  );
}

export default App;
