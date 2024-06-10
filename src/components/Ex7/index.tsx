import React, { Component } from "react";
import "./ex7.css";
import Header from "./Header";
import Main from "./Main";
import Menu from "./Menu";
import Footer from "./Footer";

export default class Ex7 extends Component {
  render() {
    return (
      <div className="body">
       <div className="header"><Header></Header></div>
       <div className="menu"><Menu></Menu></div>
       <div className="main"><Main></Main></div>
       <div className="footer"><Footer></Footer></div>
      </div>
    );
  }
}
