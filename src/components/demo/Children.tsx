import React, { Component } from 'react'

type PropsType = {
    data : string,
    count: number,
    children: string, // nội dung của thẻ
    changeName: Function
}

export default class Children extends Component<PropsType,{number:number}> {
    constructor(p : PropsType){
        super(p)
        this.state = {
            number : 0
        }
    }
    
  render() {
    let fullNAme = "Tam anh";
    console.log("gọi hàm render ở children");
    
    return (
      <div>
        <h1>{this.props.data}</h1>
        <p> {this.props.children}</p>
        <p>{this.props.count} lan</p>
        <h3>{this.state.number}</h3>
        <button onClick={()=>{this.setState({number: this.state.number+1})}}>click</button>
        <button type="button" onClick={()=>this.props.changeName(fullNAme)}>send Data</button>
      </div>
    );
  }
}
