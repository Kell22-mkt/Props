import React, { Component } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

export default class script extends Component {
  render() {
    return (
      <>
        <Header title="Informações" />
        <Main nome="Kelly Caroline" idade="23" querestudar="Inglês" />
      </>
    );
  }
}
