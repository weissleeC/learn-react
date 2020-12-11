import React, { Fragment, useState } from 'react';

function Hook(){
  const [fruit, setFruit] = useState('🍎');

  const [count, setCount] = useState(0);

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
    </Fragment>
  );
}

export default Hook;