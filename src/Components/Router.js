import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" exact component={TV}></Route>
        <Route path="/search" exact component={Search}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </>
  </Router>
);
