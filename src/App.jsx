import { useState } from "react";
import Filter from "./components/Filter";
import Login from "./components/Login";
import MyEntries from "./components/MyEntries";
import SortDate from "./components/SortDate";
import Table from "./components/Table";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/media-entries">
            <MyEntries />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
