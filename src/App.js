import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Popular from "./routes/Popular";
import TopRate from "./routes/TopRate";

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Route path="/" exact={true} component={Popular}></Route>
      <Route path="/popular" component={Popular}></Route>
      <Route path="/TopRate" exact={true} component={TopRate}></Route>
    </BrowserRouter>
  );
}

export default App;
