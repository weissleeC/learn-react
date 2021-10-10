/* eslint-disable no-dupe-class-members */
import React from "react";

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("加载了constructor()");

    this.state = {
      time: new Date(),
    };
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  // *** 组件初始化 start ***
  componentWillMount() {
    console.log("组件将要加载 componentWillMount()");

    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentDidMount() {
    console.log("组件已经加载 componentDidMount()");
  }
  // *** 组件初始化 end ***

  // *** 组件更新 start ***
  componentWillReceiveProps(nextProps) {
    // 参数在函数中作用：获取更新状态以响应组件状态
    // 父组件将要更新
    console.log("组件将要接收参数 componentWillReceiveProps()", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("组件是否要更新 shouldComponentUpdate()");

    // 参数在函数中作用：根据下一个 props 和下一个 state 决定组件是否更新

    // 选择偶数渲染，确定要不要更新
    if (nextState.time.getSeconds() % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("组件将要更新 componentWillUpdate()");

    // 参数在函数中作用：更新发生前的准备工作（定时器、网络请求）
  }

  // getSnapshotBeforeUpdate() {
  //   console.log('在更新前获取截图 getSnapshotBeforeUpdate()');
  // }

  componentDidUpdate(prevProps, prevState, info) {
    console.log("组件已经更新完毕 componentDidUpdate()");
  }
  // *** 组件更新 end ***

  // *** 组件卸载 start ***
  componentWillUnmount() {
    console.log("组件将要卸载 componentWillUnmount()");

    clearInterval(this.timeID);
  }
  // *** 组件卸载 end ***

  render() {
    console.log("渲染实际内容了 render()");
    return (
      <div
        style={{ padding: "20px", margin: "20px 0", border: "solid 5px #000" }}
      >
        <p>learn life cycle</p>
        <button type="button" onClick={() => this.setState({})}>
          组件更新
        </button>
        <br />
        <button type="button" onClick={() => this.forceUpdate()}>
          强制更新
        </button>
        <br />
        <p>{this.state.time.getSeconds()}</p>
      </div>
    );
  }
}
