import React, { useRef } from 'react';
import { Button, Input } from 'antd';

function HookUseRef(){
  const inputEl = useRef(null);

  return (
    <>
      <Input placeholder="请输入内容" inputEl={inputEl} />
      <Button 
        type="primary"
        onClick={() => {
          console.log(inputEl.current.focus);
        }}
      >Button</Button>
    </>
  )
};

export default HookUseRef;
