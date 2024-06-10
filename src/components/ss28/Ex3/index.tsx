import React, { Component } from 'react'
interface User {
    id:number
    name: string
    address: string
}

export default class Exercises03 extends Component<{},{users: User[]}> {
    constructor(prop:{}) {
        super(prop)
        this.state = {
            users : [
                {id:1,name:"tran",address:"abc"},
                {id:1,name:"tran",address:"abc"},
                {id:1,name:"tran",address:"abc"}
            ]
        }
    }
  render() {
    return (
      <div>
        <h3>Danh sách User: </h3>
        {this.state.users.map((user) => (
          <>
            <h4>{user.id}</h4>
            <h4>{user.name}</h4>
            <h4>{user.address}</h4>
          </>
        ))}
      </div>
    );
  }
}
