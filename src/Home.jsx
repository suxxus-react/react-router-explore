import React from "react";

import {withRouter} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome Dude!</h1>
      <p>Home</p>
    </div>
  );
};

export default withRouter(Home);
