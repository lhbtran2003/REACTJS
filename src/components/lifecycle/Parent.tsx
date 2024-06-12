import React, { Component } from "react";

export default class Parent extends Component<
  { name: string },
  { data: number }
> {
  // Giai đoạn 1: khởi tạo
  constructor(props: { name: string }) {
    console.log("khởi tạo đối tượng từ lớp Parent");
    super(props);
    this.state = {
      data: 0,
    };
  }
  //componentwillmount chạy trước render
  componentWillMount(): void {
      console.log("log trước khi comp đc mount")
  }
  componentDidMount(): void {
      console.log("sau khi comp được mount")
  }
   //componentWillRêciveProps: chạy trước khi update
   componentWillReceiveProps(nextProps: Readonly<{ name: string; }>, nextContext: any): void {
       console.log("comp sẽ được cập nhật khi nhận props");
       console.log("props cũ:", this.props)
       console.log("props mới:", nextProps)
   }
   shouldComponentUpdate(nextProps: Readonly<{ name: string; }>, nextState: Readonly<{ data: number; }>, nextContext: any): boolean {
       true
   }
   componentWillUpdate(nextProps: Readonly<{ name: string; }>, nextState: Readonly<{ data: number; }>, nextContext: any): void {
       console.log()
   }
  //Giai đoạn 2: mounting (sử dụng component nhúng vào App.tsx)

  //Giai đoạn 3: updating (cập nhật lại giá trị của props hoặc state /  component bị render)

  //Giai đoạn 4: Unmounting
  componentWillUnmount(): void {
      //trước khi bị xóa khỏi DOM
      //thường dùng để dọn dẹp rác
      console.log("comp sắp bị xóa")
  }
  render() {
    console.log("comp đc render or rerender")
    return <div>Parent</div>;
  }
}
