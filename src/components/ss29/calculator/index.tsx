/* ứng dụng máy tính:
có 10 con số: 0->9
có 2 dấu + và - và = */

import React, { Component, MouseEventHandler } from "react";
import "./style.css";

type StateType = {
    array: string[]
    value: number
};

export default class Calculator extends Component<{},StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: 0,
      array: []
    };
  }
  handleOnClick(e: string) {
    this.setState({array: [...this.state.array,e]})
  }
  result = (e:string)=> {
     
  }
  render() {
    return (
      <div>
        <div id="top">
          <span id="span">{}</span>
          <p id="p">{}</p>
        </div>
        <div id="bottom">
          <div className="bottom_1">
            <button className="btn" onClick={() => this.handleOnClick('1')}>
              1
            </button>
            <button className="btn" onClick={() => this.handleOnClick('2')}>
              2
            </button>
            <button className="btn" onClick={() => this.handleOnClick('3')}>
              3
            </button>
            <button className="btn" onClick={() => this.handleOnClick('4')}>
              4
            </button>
          </div>
          <div className="bottom_1">
            <button className="btn" onClick={() => this.handleOnClick('5')}>
              5
            </button>
            <button className="btn" onClick={() => this.handleOnClick('6')}>
              6
            </button>
            <button className="btn" onClick={() => this.handleOnClick('7')}>
              7
            </button>
            <button className="btn" onClick={() => this.handleOnClick('8')}>
              8
            </button>
          </div>
          <div className="bottom_1">
            <button className="btn" onClick={() => this.handleOnClick('9')}>
              9
            </button>
            <button className="btn">+</button>
            <button className="btn">-</button>
            <button className="btn">=</button>
          </div>
        </div>
      </div>
    );
  }
}
