import React from "react";
import GetStarted from "../GetStarted";

export default function Home(props) {
  return (
    <div>
      <h1 className="title">BURRITO PALACE</h1>
      <img
        className="burrito-home"
        src={require("../../Assets/burrito-home.png")}
        alt="test"
      ></img>
      <GetStarted openOrder={props.openOrder} />
    </div>
  );
}
