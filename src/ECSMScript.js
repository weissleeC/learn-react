import React, { useEffect } from "react";

import { Title, Flex } from "./style/css";

const ECSMScript = () => {
  useEffect(() => {
    let aBtn = document.getElementsByTagName("input");

    for (let i = 0; i < aBtn.length; i++) {
      aBtn[i].onclick = function () {
        console.log(i);
      };
    }

    // 箭头函数排列 start
    const arrSort = [12, 8, 15, 67, 9];
    arrSort.sort((n1, n2) => n1 - n2);
    console.log(arrSort);
    // 箭头函数排列 end

    let json = { a: 1, b: 2, c: 3 };
    let json2 = {
      ...json,
      d: 999,
    };
    console.log(json2);
  });

  return (
    <div>
      <input type="button" value="a" />
      <input type="button" value="b" />
      <input type="button" value="c" />

      <Title test>111</Title>
      <Flex />
    </div>
  );
};

export default ECSMScript;
