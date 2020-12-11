import React,{ Fragment } from 'react';
import './style/index.css'

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
import Hook from './Hook';

export default function App(){
  return(
    <Fragment>
      {/* { this.state.isRenderLifeCycle ? <LifeCycleNew /> : '未渲染' }
      <br/>
      <button type="button" onClick={ ()=>this.setState({ isRenderLifeCycle: !this.state.isRenderLifeCycle }) }>LifeCycle 渲染控制</button>
      <hr/> */}
      {/* <ReduxDOM /> */}

      <Hook />
    </Fragment>
  )
}