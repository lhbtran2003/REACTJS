import React, { Component } from 'react'
interface User {
    id:number,
    name: string,
    address: string
}

type StateType = {
    userArray: User[]
}
export default class Bai3 extends Component<{},StateType> {
    constructor(props:object) {
        super(props);
        this.state = {
            userArray: [
                {id:1,name:"a",address:"a"},
                {id:2,name:"a",address:"a"},
                {id:3,name:"a",address:"a"},
                {id:4,name:"a",address:"a"},
            ]
        }
    }
  render() {
     
    return (
      <div>
        {this.state.userArray.map((item, index) => (
          <div>
            <p>{item.id}</p>x
            <p>{item.name}</p>

            <p>{item.address}</p>
          </div>
        ))}
      </div>
    );
  }
}
