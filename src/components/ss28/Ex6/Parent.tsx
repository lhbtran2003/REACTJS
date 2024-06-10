import React, { Component } from "react";
import Children from "./Children";
export interface User {
   id:number,
   name: string,
}
const users = [
    {id:1, name:"a"},
    {id:1, name:"a"},
    {id:1, name:"a"},
    {id:1, name:"a"},
]

export default class Parent extends Component {
  render() {
    return (
      <div>
        <Children users={users}></Children>
      </div>
    );
  }
}
