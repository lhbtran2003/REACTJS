import React, { Component } from "react";

export default class Clock extends Component<{}, {time:Date}> {
  constructor(props: {}) {
    super(props);
    this.state = {
        time: new Date() // tính theo giây
    };
  }
  componentWillMount(): void {
      //hiển thị lần đầu
      //kích hoạt will update
      setTimeout(() => {this.setState({...this.state ,time: new Date()})},1000)
  }
 
  componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void {
      setTimeout(() => this.setState({...this.state, time: new Date()}),1000)
  }
  render() {
    
    return (
      <div>
        <p>{this.state.time.toLocaleTimeString("en-US")}</p>
      </div>
    );
  }
}
