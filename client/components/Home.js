import React from "react";
import App from "./App";
import Navbar from "./Nav/Navbar"

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p>home?</p>
        <Navbar />
        <App />
      </div>
    );
  }
}
