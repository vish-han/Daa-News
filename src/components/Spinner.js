import React, { Component } from "react";
import src from "./spinnr.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={src} alt="loading" />
      </div>
    );
  }
}
