import React, { Component } from 'react'

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export default class Children extends Component<Product> {
  render() {
    return (
      <div>
        <h3>tên sản phẩm: {this.props.name}</h3>
        <h3>id: {this.props.id}</h3>
        <h3>quantity: {this.props.quantity}</h3>
        <h3>price: {this.props.price}</h3>
      </div>
    )
  }
}
