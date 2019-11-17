import React, { Component } from "react";

export default class Burrito extends Component {
  render() {
    const ingredients = this.props.ingredients;

    return (
      <div className="burrito-container">
        {ingredients.map(item => (
          <img
            style={{ "z-index": `${item.zindex}` }}
            className={`burrito`}
            src={require(`../Assets/${item.image}.png`)}
            alt="test"
          ></img>
        ))}
      </div>
    );
  }
}
