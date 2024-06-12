import React, { Component } from "react";

let idInterval = -1
export default class CountDown extends Component<{}, { second: number }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      second: 0
    };
  }
  start=()=>{
    setInterval(() =>
      this.setState({
        if (this.state.second > 0) {
         idInterval = setInterval(() => {

         })
          }
        }
        
      }
    
    render() {
    return <div>
      
        <p>{this.state.second}</p>
        <button onChange={e=> this.setState({second: +e.})}></button>
        
    </div>;
  }
}
