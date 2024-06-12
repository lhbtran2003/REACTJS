import React, { Component } from 'react'
import Clock from './components/ss30/Clock'
import FormLogin from './components/form/FormLogin'
import "bootstrap/dist/css/bootstrap.min.css";
import TestLevel from './components/form/TestLevel';

export default class App extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <TestLevel/>
      </div>
    )
  }
}
