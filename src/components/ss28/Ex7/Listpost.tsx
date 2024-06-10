import React, { Component } from 'react'
import Post from './Post'

export interface IPost {
    id:number,
    title: string,
    content: string,
    author: string
}

export default class Listpost extends Component<{},{posts: IPost[]}> {
    constructor(prop:{}) {
        super(prop)
        this.state = {
            posts: [
                {id:1,title:"a",content:"b",author:"c"},
                {id:1,title:"a",content:"b",author:"c"},
                {id:1,title:"a",content:"b",author:"c"},
                {id:1,title:"a",content:"b",author:"c"},
            ]
        }
    }
  render() {
    return (
      <div>
        <Post posts={this.state.posts}/>
      </div>
    )
  }
}
