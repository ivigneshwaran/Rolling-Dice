import React, { Component } from 'react'
import "./Die.css";

export default class Die extends Component {
  render() {
    return (
      <div className="Die">
        <i className={`Die-icon fas fa-dice-${this.props.face}`}></i>
      </div>
    )
  }
}
