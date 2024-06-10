import React, { Component } from 'react'

export default class UpdateState extends Component<{},{str: string}> {
    constructor(prop:{}) {
        super(prop)
        this.state = {
            str : "rikeiacademy",
        }
    }
  render() {
    return (
      <div>
        <h1>{this.state.str}</h1>
        <button onClick={()=> {
            this.setState({
              str:
                this.state.str == "rikeiacademy"
                  ? "reikeisoft"
                  : "rikeiacademy",
            });
            }}>Update</button>
      </div>
    )
  }
}
