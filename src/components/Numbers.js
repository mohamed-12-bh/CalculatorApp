import React, { Component } from "react";

class Numbers extends Component {
  render() {
    return this.props.numbers.map((number, index) => (
      <button
        className="numbers click"
        key={index}
        onClick={() => this.props.numbersClick(number)}
      >
        {number}
      </button>
    ));
  }
}

export default Numbers;
