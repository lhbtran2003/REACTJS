import React, { Component } from 'react'
import Children_Comp from './Children_Comp';

type StateType = {
  name: string;
}
export default class Parent_Comp extends Component<{},StateType>{
  constructor(prop: {}) {
    super(prop);
    this.state = {
      name: "bảo trân"
    }
  }
  render() {
    return (
      <div>
        <h3>Họ và tên bên component cha: {this.state.name}</h3>
        <Children_Comp name="Việt Hoàng"></Children_Comp>
      </div>
    )
  }
}
