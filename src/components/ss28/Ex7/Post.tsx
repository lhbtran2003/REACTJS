import React, { Component } from "react";
import { IPost } from "./Listpost";

export default class Post extends Component<{ posts: IPost[] }> {
  render() {
    return (
      <div>
        {this.props.posts.map((e) => (
          <div>
            <h3>{e.id}</h3>
            <h3>{e.title}</h3>
            <h3>{e.author}</h3>
            <h3>{e.content}</h3>
          </div>
        ))}
      </div>
    );
  }
}
