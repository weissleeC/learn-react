import React, { useReducer } from "react";

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "add":
      return {
        count: state.count + 1,
      };
    case "minus":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export default function HookUseReducer() {
  // 使用 useReducer 并把事件函数和默认值传入
  const [state, dispatch] = useReducer(reducer, { count: 0, sum: 10 });
  return (
    <>
      state: {state.count}
      <button onClick={() => dispatch({ type: "add" })}>+1</button>
      <button onClick={() => dispatch({ type: "minus" })}>-1</button>
    </>
  );
}
