import React, { Component } from 'react'

export default class Children_Comp extends Component<{name:string}>{
  render() {
    return (
      <div>
        <h3>Họ và tên bên component con: {this.props.name}</h3>
      </div>
    )
  }
}
