import React from "react";
import "./App.css";
import Layout from "./Components/Layout";

function App() {
  return (
    <div className="App">
      <h1 className="title">BURRITO PALACE</h1>
      <img
        className="burrito-home"
        src={require("./Assets/burrito-home.png")}
        alt="test"
      ></img>
      {/* <h4 className="address">4557 Dancing Dove Lane, Elmsford, NY 10523</h4> */}
      <Layout />
    </div>
  );
}

export default App;
