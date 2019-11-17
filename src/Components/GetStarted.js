import React from "react";

export default function GetStarted(props) {
  return (
    <div>
      <button onClick={props.openOrder} type="button" className="start-button">
        Place an Order!
      </button>
    </div>
  );
}
