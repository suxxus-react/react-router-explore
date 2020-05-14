import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter as Router, Route} from "react-router-dom";

import App from "./App";
import Home from "./Home";
import SaySomething from "./SaySomething";
import "./index.css";

// Add these imports - Step 1
import {Provider} from "react-redux";
import {store} from "./redux";

// Wrap existing app in Provider - Step 2
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?">
        <App />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/dude">
        <SaySomething />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
