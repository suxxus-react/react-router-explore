import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter as Router} from "react-router-dom";

import Home from "./Home";
import SaySomething from "./SaySomething";
import "./index.css";

// Add these imports - Step 1
import {Provider} from "react-redux";
import {store} from "./redux";

import {NavLink, useLocation} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Child = ({page}) => {
  switch (page) {
    case "dude":
      return <SaySomething />;
    case "home":
      return <Home />;
    default:
      return <Home />;
  }
};

function QueryParamsDemo() {
  console.log("page: ", useQuery().get("page"));
  const page = useQuery().get("page");

  return (
    <div style={{margin: "0 auto", width: "80%"}}>
      <nav className="footer">
        <NavLink exact to="/meinauftragsportal.html?page=home">
          to home
        </NavLink>
        <span style={{margin: "5px"}}>|</span>
        <NavLink exact to="/meinauftragsportal.html?page=dude">
          to dude
        </NavLink>
      </nav>
      <Child page={page} />
    </div>
  );
}

function QueryParamsExample() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}

const provider = props => {
  return (
    <Provider store={store}>
      <QueryParamsExample />
    </Provider>
  );
};

// Wrap existing app in Provider - Step 2
ReactDOM.render(provider(), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
