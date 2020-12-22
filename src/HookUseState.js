import React, { Fragment, useState } from 'react';

function HookUseState(){
  const [fruit, setFruit] = useState('🍎');

  const [count, setCount] = useState(0);

  const [oBj, setObj] = useState({name: 'Tom', sex: '男'});

  const [arr, setArr] = useState([1, 2, 3]);

  const [func, setFunc] = useState(() => {
    return 'useState 也可以返回一个函数';
  });

  return(
    <Fragment>
      <h2>{fruit}</h2>
      <button 
        htmltype="button"
        onClick={()=>{ setFruit('🍐') }}
      >换雪梨</button>

      <hr/>

      <h2>{count}</h2>
      <button
        htmltype="button"
        onClick={()=>{ setCount(count+1) }}
      >累计</button>

      <hr/>

      <h2>{oBj.name}</h2>
      <button
        htmltype="button"
        onClick={() =>{ 
          setObj({...oBj, name: 'Lee'});
        }}
      >换名字</button>

      <hr/>

      <h2>{arr}</h2>
      <button
        htmltype="button"
        onClick={()=>{
          setArr(() => {
            arr.push(4);
            return [...arr];
          })
        }}
      >数组 push</button>

      <hr/>

      <h2>{func}</h2>
      <button
        htmltype="button"
        onClick={()=>{
          setFunc(() => {
            return '改变内容';
          })
        }}
      >函数形式</button>
    </Fragment>
  );
}

export default HookUseState;