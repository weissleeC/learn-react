import React, { Fragment, useEffect, useState } from "react";
import "./style/index.css";

// import TodoList from './TodoList';
// import RefsDOM from './RefsDOM';
// import AntdButon from './AntdButton'
// import FetchDOM from './FetchDOM';
// import MapNode from './MapNode';
// import RouterDom from './RouterDom';
// import ReduxDOM from './ReduxDOM';
// import LifeCycle from './LifeCycle';
// import LifeCycleNew from './LifeCycleNew'
// import InfiniteDemo from './InfiniteDemo';
// import HookUseState from "./HookUseState";
// import HookUseEffect from "./HookUseEffect";
// import HookUseRef from "./HookUseRef";
// import ECSMScript from './ECSMScript';
// import FileUpload from './FileUpload';

import Container from "./theme/Container";
import Header from "./theme/Header";
import Main from "./theme/Main";
import Footer from "./theme/Footer";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let timer = setTimeout(() => {
      setTheme("dark");
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <Fragment>
      {/* { this.state.isRenderLifeCycle ? <LifeCycleNew /> : '未渲染' }
      <br/>
      <button type="button" onClick={ ()=>this.setState({ isRenderLifeCycle: !this.state.isRenderLifeCycle }) }>LifeCycle 渲染控制</button>
      <hr/> */}

      <Container theme={theme}>
        <Header>Header</Header>
        <Main>Main</Main>
        <Footer>Footer</Footer>
      </Container>
    </Fragment>
  );
}
