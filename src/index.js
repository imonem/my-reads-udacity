import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Search from "./components/Search";
import BooksApp from "./App";

ReactDOM.render(
  <Router>
    {/* <App /> */}
    <Switch>
      <Route exact path='/' component={BooksApp}></Route>
    </Switch>
    <Switch>
      <Route path='/search' component={Search}></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
