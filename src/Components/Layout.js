import React, { Component } from "react";
import OrderPage from "./Views/OrderPage";
import Home from "./Views/Home";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderPage: false
    };
  }
  openOrder = () => {
    this.setState({
      orderPage: true
    });
  };

  render() {
    return (
      <div>
        {this.state.orderPage ? (
          <OrderPage />
        ) : (
          <Home openOrder={this.openOrder} />
        )}
      </div>
    );
  }
}
