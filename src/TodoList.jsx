import React, { Component, Fragment } from "react";
// Fragments 可以让你聚合一个子元素列表，并且不在 DOM 中增加额外节点

import TodoItem from "./TodoItem";

//定义一个 React 组件类，需要继承 React.Component
class TodoList extends Component {
  // 一个类里面都会有一个构造函数，优先于其他函数执行
  // - props 固定的参数接受
  // - super 调用父类（Component）的构造函数
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItmeDelete = this.handleItmeDelete.bind(this);
  }

  render() {
    //当组件的 state 或者 props 发生改变的时候，render 函数就会重新执行
    //console.log('render')
    return (
      <Fragment>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter content"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              type="button"
              onClick={this.handleBtnClick}
            >
              Add
            </button>
          </span>
        </div>

        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={item}
          index={index}
          content={item}
          deleteItem={this.handleItmeDelete}
        />
      );
    });
  }

  // 监听 input 输入状态并改变 input 的内容
  // 方法必须先绑定 this 指向
  handleInputChange(e) {
    //console.log(this);
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value,
    }));
  }

  // 点击添加 list
  handleBtnClick(e) {
    //console.log(this.state.inputValue)
    this.setState((prevState) => ({
      // 使用展开运算符，并加入新的值
      list: [...prevState.list, prevState.inputValue],
      // 清除 inpuit 内容
      inputValue: "",
    }));
  }

  // 删除
  // 获取到 bind 传过来的 index 下标
  handleItmeDelete(index) {
    //console.log(index)
    this.setState((prevState) => {
      // 复制一边 list 内容
      // React 里面不可直接修改 state 的内容，immutable 概念
      const list = [...prevState.list];
      //数组操作
      list.splice(index, 1);
      // 重新传入 list 内容
      return { list };
    });
  }
}

// 导出组件
export default TodoList;
