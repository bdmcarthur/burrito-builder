import React, { Component } from "react";

export default class Burrito extends Component {
  render() {
    return (
      <div className="burrito-container">
        <img
          className="burrito"
          src={require("../Assets/tortilla.png")}
          alt="test"
        ></img>
      </div>
    );
  }
}
