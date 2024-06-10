import React, { Component } from 'react'
import Children from './Children'


export default class Parent extends Component {
  render() {
    return (
      <Children id={1} name={'bánh bao'} quantity={5} price={13000}></Children>
    )
  }
}
