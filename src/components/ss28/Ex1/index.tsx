import React, { Component } from 'react'

type StateType = {
    name: string
}
export default class Exercises01 extends Component<{},StateType> {
    constructor(prop: {}) {
        super(prop)
        this.state = {
            name: "Nguyễn Minh Sơn"
        }
    }
  render() {
    return <div>
        <h1>Họ và tên: {this.state.name}</h1>
    </div>;
  }
}
