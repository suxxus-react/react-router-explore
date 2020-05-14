import React from "react";

import {connect} from "react-redux";

import {withRouter} from "react-router-dom";

import {NavLink} from "react-router-dom";

export class App extends React.Component {
  getTitle() {
    const filter = this.props?.match?.params?.filter ?? "";
    switch (filter) {
      case "home":
        return "You are in Home Dude";
      case "dude":
        return "Write something Dude!";
      default:
        return "Welcome Dude!";
    }
  }

  render() {
    return (
      <div style={{margin: "0 auto", width: "80%"}}>
        <h1>{this.getTitle()}</h1>
        <nav className="footer">
          <NavLink exact to="/home">
            to home
          </NavLink>
          <span style={{margin: "5px"}}>|</span>
          <NavLink exact to="/dude">
            to dude
          </NavLink>
        </nav>
      </div>
    );
  }
}

const AppContainer = withRouter(
  connect(
    () => {},
    () => {}
  )(App)
);

export default AppContainer;
