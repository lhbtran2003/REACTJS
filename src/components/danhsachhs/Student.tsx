import React, { Component } from 'react'

interface IStudent {
    id: number,
    name: string,
    lop: number,
    gender: boolean,
}
type PropType = {
    item: IStudent,
}
export default class Student extends Component<PropType> {
  constructor(props:any) {
    super(props);
  }
  render() {
    let {id,name,lop,gender} = this.props.item
    return (
         <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{lop}</td>
                <td>{gender}</td>
            </tr>
    )
  }
}
