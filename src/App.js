import React from "react";

import {connect} from "react-redux";

import {withRouter} from "react-router-dom";

import {NavLink} from "react-router-dom";

export class App extends React.Component {
  isDude() {
    return this.props?.match?.params?.filter === "dude";
  }

  getTitle() {
    return this.isDude() ? "Write something Dude!" : "Hey Dude!";
  }

  render() {
    return (
      <div>
        <h1>{this.getTitle()}</h1>
        <nav className="footer">
          <NavLink exact to="/home">
            to home
          </NavLink>
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
