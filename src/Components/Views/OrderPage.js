import Burrito from "../Burrito";
import OrderForm from "../OrderForm";

import React, { Component } from "react";
import ingredientsList from "../../ingredients.json";

export default class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burrito: [
        {
          _id: 0,
          name: "Tortilla",
          "z-index": 0,
          price: 0,
          image: "tortilla"
        }
      ]
    };
  }

  addIngredient = item => {
    let clickedItem = item._id;
    let added = [...this.state.burrito];
    let needsRemoval = false;

    this.state.burrito.map((ing, index) => {
      if (ing._id === clickedItem) {
        needsRemoval = true;
        added.splice(index, 1);
      }
    });

    if (!needsRemoval) {
      added.push(item);
    }

    this.setState({
      burrito: added
    });
  };

  render() {
    return (
      <div>
        <h1>Create!</h1>
        <Burrito ingredients={this.state.burrito} />
        <OrderForm
          addIngredient={this.addIngredient}
          ingredientsList={ingredientsList}
        />
      </div>
    );
  }
}
