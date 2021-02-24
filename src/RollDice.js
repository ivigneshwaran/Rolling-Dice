import React, { Component } from 'react'
import Die from "./Die"
import "./RollDice.css"

export default class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  }
  constructor(props) {
    super(props)

    this.state = {
      die1: 'one',
      die2: 'one',
      isRolling: false
    }
    this.roll = this.roll.bind(this);
  }

  roll() {
    //pick 2 new rolls
    const rolled1 =  this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const rolled2 =  this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    //set new state
    this.setState({die1: rolled1, die2: rolled2, isRolling: true})
    // wait one sec then change back to roll dice
    setTimeout(() => {
      this.setState({isRolling: false})
    }, 1000);

    // animate__shakeX
    // $("Die").addClass("animate__shakeX");
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.die1} roll={this.state.isRolling} />
          <Die face={this.state.die2} roll={this.state.isRolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling...":"Roll Dice!"}</button>
      </div>
    )
  }
}

