import React, { Fragment } from "react";
import "./style/index.css";

// import TodoList from './TodoList';
// import RefsDOM from './RefsDOM';
// import AntdButon from './AntdButton'
// import FetchDOM from './FetchDOM';
// import MapNode from './MapNode';
// import RouterDom from "./RouterDom";
// import ReduxDOM from './ReduxDOM';
// import LifeCycle from './LifeCycle';
// import LifeCycleNew from './LifeCycleNew'
// import InfiniteDemo from './InfiniteDemo';
// import HookUseState from "./HookUseState";
// import HookUseEffect from "./HookUseEffect";
// import HookUseRef from "./HookUseRef";
// import CustomizeHook from "./CustomizeHook.js";
// import HookUseReducer from "./HookUseReducer.js";
import HookUseRouter from "./HookUseRouter.js";
// import ECSMScript from './ECSMScript';
// import FileUpload from './FileUpload';

// import Container from "./theme/Container";
// import Header from "./theme/Header";
// import Main from "./theme/Main";
// import Footer from "./theme/Footer";

export default function App() {
  return (
    <Fragment>
      {/* { this.state.isRenderLifeCycle ? <LifeCycleNew /> : '未渲染' }
      <br/>
      <button type="button" onClick={ ()=>this.setState({ isRenderLifeCycle: !this.state.isRenderLifeCycle }) }>LifeCycle 渲染控制</button>
      <hr/> */}

      <HookUseRouter />
    </Fragment>
  );
}
