import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val: 1
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <i
        className={`Die fas fa-dice-${this.props.numberWords[this.props.val - 1]} ${this.props.locked ? 'Die-locked' : null} ${this.props.rolling ? 'Die-rolling' : null}`}
        onClick={() => this.props.handleClick(this.props.idx)}
        disabled={this.props.disabled}
      >
      </i>
    );
  }
}

export default Die;
