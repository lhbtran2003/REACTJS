import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

type StateType = {
  username: string;
  password: string;
  messagePassword: string;
  messageUsername: string;
};


export default class FormLogin extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: "",
      password: "",
      messagePassword: "",
      messageUsername: "",
    };
  }
  handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state);
    //validate
    if (this.state.username.trim() == "") {
      this.setState(
        (preState): StateType => ({
          ...preState,
          messageUsername: "ko được để trống",
        })
      );
    }
    else {
              this.setState(
                (preState): StateType => ({
                  ...preState,
                  messageUsername: "",
                })
              );

    }
    if (this.state.password.trim() == "") {
      this.setState(
        (preState): StateType => ({
          ...preState,
          messagePassword: "ko được để trống",
        })
      );
    } else {
      this.setState(
        (preState): StateType => ({
          ...preState,
          messagePassword: "",
        })
      );
    }

    
  };
  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let key = e.target.name; //target trỏ tới ô input
    let value = e.target.value;
    this.setState({ ...this.state, [key]: value });
  };
  render() {
    return (
      <div className="border border-1 rounded-1 p-5" style={{ width: "40%" }}>
        <Form onSubmit={this.handleSubmitForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.handleChangeInput}
              name="username"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-danger">
              {this.state.messageUsername}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.handleChangeInput}
              name="password"
              type="password"s
              placeholder="Password"
            />
            <Form.Text className="text-danger">
              {this.state.messagePassword}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>{" "}
      </div>
    );
  }
}
