import React, { Component } from "react";

class Operators extends Component {
  render() {
    return this.props.operators.map((operator, index) => (
      <button
        className="operators click"
        key={index}
        onClick={() => this.props.operatorsClick(operator)}
      >
        {operator}
      </button>
    ));
  }
}
export default Operators;
