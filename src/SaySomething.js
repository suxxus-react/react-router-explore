import React from "react";

import {connect} from "react-redux";

import {withRouter} from "react-router-dom";

import {insertText} from "./redux";

const SaySomething = ({handleChange, userText}) => {
  return (
    <div>
      <h1>Write something Dude!</h1>
      <p>{userText}</p>
      <input type="text" onChange={handleChange} value={userText} />
    </div>
  );
};

export default withRouter(
  connect(
    ({geod}) => ({userText: geod.userText}),
    dispatch => ({
      handleChange: evt => dispatch(insertText({userText: evt.target.value})),
    })
  )(SaySomething)
);
