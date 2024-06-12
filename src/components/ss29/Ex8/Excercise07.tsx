import React, { Component } from 'react'

export default class Excercise07 extends Component<{},{count:number}> {
    constructor(props: {}) {
        super(props)
        this.state = {
            count: 0
        }
    }
  render() {
    return (
      <div>
        <button>{this.setState({count: count+1})}</button>
      </div>
    )
  }
}
// m bị quên sự kiện quài hà :))))
