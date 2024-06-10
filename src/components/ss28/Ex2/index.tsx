import React, { Component } from 'react'

interface IUser{
    id: number,
    name: string,
    dob: string,
    address: string
}
export default class Exercises02 extends Component<{}, IUser> {
  constructor(prop: {}) {
    super(prop);
    this.state = {
      id: 1,
      name: "Nguyễn Văn Sơn",
      dob: "20/12/2023",
      address: "Thanh Xuân, Hà Nội",
    };
  }
  render() {
    return (
      <div>
        <h2>id: {this.state.id}</h2>
        <h2>Tên: {this.state.name}</h2>
        <h2>Ngày sinh: {this.state.dob}</h2>
        <h2>Địa chỉ: {this.state.address}</h2>
      </div>
    );
  }
}
