import * as React from "react";
import Infinite from "react-infinite";

function InfiniteDemo() {
  return (
    <Infinite containerHeight={200} elementHeight={[111, 252, 143]}>
      <div className="one" style={{ backgroundColor: "red" }} />
      <div className="two" style={{ backgroundColor: "yellow" }} />
      <div className="three" style={{ backgroundColor: "black" }} />
    </Infinite>
  );
}

export default InfiniteDemo;
