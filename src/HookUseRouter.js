import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function HookUseReducer() {
  const history = useHistory();

  useEffect(() => {
    let timer = setTimeout(() => {
      history.push("/hello-demo");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });
  return <>1</>;
}
