import React, { Component } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

//Tạo 1 form đăng kí, tiến hành validate cho form
/* Các bước thực hiện
b1: tạo form và css cho form
b2: các giá trị khi tạo ra phải đc lưu liên tục vào state,
    mục đích: khi submit, giá trị sẽ đc lấy từ state để submit tiến hành xử lí
 */

type StateType = {
    username: string,
    password: string,
    errorUsername: string,
    errorPassword: string,
}
export default class TestLevel extends Component<{}, StateType> {
  // ở đây ko dùng props vì ko có nhu cầu truyền dữ liệu cha con

  constructor(props:{}) {
    super(props)
    this.state = {
        username: "",
        password: "",
        errorUsername: "",
        errorPassword: ""

    }
  }
  // hàm lưu liên tục giá trị thay đổi
  // ? tại sao phải nhận vào 1 tham số là e
  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //làm gì ở đây bây giờ :(((((
    // lấy giá trị của ô input =))))
    // khúc này mới hỉu đc tầm qtrong của e nè thấy hơm
    let key = e.target.name
    let value = e.target.value
    this.setState(() => ({...this.state,[key]:value})) //key ở đây là name ớ, tại vì chính tả giống nhau nên hiểu ở đây là thuộc tính của state luôn
                                        // [key] = 'key', tuy nhiên: vế phải là set cứng, vế trái flexible
  }
  // hàm kiểm tra tính hợp lệ
  handleSubmitBtn = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     console.log(this.state)

     if(this.state.username.trim() == "") {
        this.setState ({
            ...this.state, 
            errorUsername: "điền vào đi pls :)))"
        })
  }}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitBtn}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              onChange={this.handleOnChange}
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              {this.state.errorUsername}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
            onChange={this.handleOnChange}
              type="password"
              className="form-control"
              name="password"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
