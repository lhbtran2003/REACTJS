import React, { Component } from 'react'
import {User} from './Parent'

export default class Children extends Component<{users: User[]}>{
  render() {
    return (
      <div>
        {this.props.users.map(u=>(<>
            <h3>{u.name}</h3>
            <h2>{u.id}</h2>
        </>))}
      </div>
    )
  }
}
