import React from 'react';

export default class LifeCycleNew extends React.Component{
  constructor(props) {
    super(props)
    console.log('加载了 constructor()');

    this.state = { 
      firstName: 'yang'
    }
    console.log( this.state );
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps()');
    // 函数返回结果将会被添加到 state , 添加/更新 state 的内容
    // 这个函数必须有返回 null state
    return{
      firstName: 'li',
      lastName: 'shi li',
    }
  }

  componentDidMount() {
    console.log('组件加载完毕 componentDidMount()');

    console.log( this.state );
  }

  componentWillUnmount() {
    console.log('组件卸载完毕 componentWillUnmount()');
  }

  render(){
    console.log('渲染实际内容了 render()');
    return(
      <div style={{ padding: '20px', margin: '20px 0', border: 'solid 5px red'}}>
        <p>new life cycle version React 17 +</p>
      </div>
    )
  }
}