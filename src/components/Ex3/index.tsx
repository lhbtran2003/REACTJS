import React, { Component } from "react";
import './style.module.css';

interface UserInfo {
  name: string;
  sex: boolean;
  bod: string; // Ideally, use Date type for real applications
  address: string;
  email: string;
}

export default class Ex3 extends Component {
  render() {
    let userInfo: UserInfo = { //để let là đỏ liền :(((
      name: "Bảo Trân",
      sex: false,
      bod: "2000-01-01", // Corrected to a valid date format
      address: "Hiệp Bình Chánh",
      email: "123@gmail.com",
    };
    return (
      <div>
        <h3>Thông tin cá nhân</h3>
        <ul>
          <li>Họ và tên: {userInfo.name}</li>
          <li>Gioi tính: {userInfo.sex? "nam":"nữ"}</li>
          <li>Ngày sinh: {userInfo.bod}</li>
          <li>Địa chỉ: {userInfo.address}</li>
          <li>Email: {userInfo.email}</li>
        </ul>
      </div>
    );
  }
}
