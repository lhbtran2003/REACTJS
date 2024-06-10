import React, { Component } from "react";

export default class Input extends Component<{}, { text: string }> {
  constructor(props:{}) {
    super(props);
    this.state = {
        text:""
    }
  }
  render() {
    return (
      <div>
        <input onChange={(e)=>{this.setState({text: e.target.value})}} type="text" />
        <p>{this.state.text}</p>
      </div>
    );
  }
}
