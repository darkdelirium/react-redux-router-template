import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <p>This is simple app to demonstrate react - redux - router</p>
        <p>&copy darkdelirium 2019</p>
        <Link to="/">Home</Link>
      </React.Fragment>
    );
  }
}

export default About;
