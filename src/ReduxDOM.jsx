import React from "react";
import { createStore } from "redux";

export default class ReduxDOM extends React.Component {
  componentDidMount() {
    const user = () => {
      return "shili";
    };

    const store = createStore(user);

    console.log(store.getState());
  }

  render() {
    return <div>111</div>;
  }
}
