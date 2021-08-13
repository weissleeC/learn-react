import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// import { createStore } from "redux";

// function counter(state = 0, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// let store = createStore(counter);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "INCREMENT" });
