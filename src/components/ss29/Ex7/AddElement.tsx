import React, { Component } from "react";

export default class AddElement extends Component<{}, { numbers: number[] }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      numbers: [],
     
    };
  }
  handleOnClick = () => {
    let e = Math.ceil(Math.random() * 100)
    this.setState({
        numbers: [...this.state.numbers,e] })
  }
  render() {
    return (
      <div>
        <h3>Mảng số:  [{this.state.numbers.map((e) => <span>{e},</span> )}] </h3>
       

        <button onClick={this.handleOnClick}>Add Element</button>
      </div>
    );
  }
}
