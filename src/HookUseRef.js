import React, { useRef, useEffect } from "react";
import { Button, Input } from "antd";

function HookUseRef() {
  const inputEl = useRef(null);

  useEffect(() => {
    //inputEl.current.state.value = "useEffect input";
  });

  return (
    <>
      {/* <Input placeholder="请输入内容" ref={inputEl} /> */}
      <span ref={inputEl}></span>
      <Button
        type="primary"
        onClick={() => {
          inputEl.current.backgroundColor = "red";
        }}
      >
        Button
      </Button>
    </>
  );
}

export default HookUseRef;
