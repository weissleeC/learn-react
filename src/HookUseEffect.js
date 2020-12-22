import React, { Fragment, useState, useEffect } from 'react';

function HookUseEffect(){
  const [count, setCount] = useState(0);

  // 初始执行 useEffect 相当于类组件的 componentDidMount
  useEffect(() => {
    // 当组件更新时候，相当于类组件的 componentDidUpdate
    console.log(count);

    // return 组件卸载(离开)之后执行的内容，相当于类组件的 componentWillUnmount
    return () => {
      console.log('componentWillUnmount');
    }
  }, []); // 如果第二个参数为 [] 空数据则为不监听所有的 state 变化。如果加上指定变量则为监听当前变量。

  return(
    <Fragment>
      <p>{count}</p>
      <button onClick={() => {setCount(count+1)}}>累计</button>
    </Fragment>
  );
}

export default HookUseEffect;