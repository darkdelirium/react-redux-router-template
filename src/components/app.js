import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  btnIncDec(action) {
    console.log("action: ", action);
    if (action === "increment") {
      this.props.onValueChange(++this.props.testValue.currentValue);
    } else {
      this.props.onValueChange(--this.props.testValue.currentValue);
    }
  }
  render() {
    const currentValue = this.props.testValue.currentValue;
    return (
      <React.Fragment>
        <h1>Redux Test</h1>
        Current Value: {currentValue}
        <button onClick={() => this.btnIncDec("decrement")}>-</button>
        <button onClick={() => this.btnIncDec("increment")}>+</button>
        <br />
        <Link to="/about">About</Link>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ testValue: state.testValue }),
  dispatch => ({
    onValueChange: newValue => {
      dispatch({ type: "CHANGE_VALUE", payload: newValue });
    }
  })
)(App);
