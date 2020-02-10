import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Add these imports - Step 1
import {Provider} from "react-redux";
import {store} from "./redux";

// Wrap existing app in Provider - Step 2
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
