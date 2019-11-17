import React from "react";

export default function OrderForm(props) {
  return (
    <form className="order-form">
      {props.ingredientsList.map(item => (
        <label className="checkboxes">
          <input
            className="checkbox"
            name={item._id}
            type="checkbox"
            onChange={() => props.addIngredient(item)}
          />
          {item.name}
        </label>
      ))}

      <button type="button" className="submit">
        Submit
      </button>
    </form>
  );
}
