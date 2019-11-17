import React, { Component } from "react";
// import Burrito from "./Burrito";
import GetStarted from "./GetStarted";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        <GetStarted />
      </div>
    );
  }
}
