import React, { Component } from "react";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import Result from "./components/Result";
import * as math from "mathjs";
import "./CSS/style.css";

class App extends Component {
  state = {
    result: 0,
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: ["C", "CE", "+", "-", ".", "/", "*", "="],
    equation: "",
  };

  numbersClick = (number) => {
    this.setState({ equation: this.state.equation + number });
  };

  operatorsClick = (operator) => {
    if (operator === "=") {
      this.setState({
        result: math.evaluate(this.state.equation),
        // equation: null,
      });
    } else if (operator === "C") {
      this.setState({
        result: 0,
        equation: "",
      });
    } else if (operator === "CE") {
      this.setState({
        equation: this.state.equation.substr(0, this.state.equation.length - 1),
      });
    } else {
      this.setState({ equation: this.state.equation + operator });
    }
  };
  render() {
    const { numbers, operators, result, equation } = this.state;
    return (
      <div className="app">
        <h1 className="text-center">Calculator</h1>
        <div className="container py-2">
          <Result result={result} equation={equation} />
          <div className="btn-click ">
            <Numbers numbers={numbers} numbersClick={this.numbersClick} />
            <Operators
              operators={operators}
              operatorsClick={this.operatorsClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
