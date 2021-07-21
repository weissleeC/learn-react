import React from "react";

export default class RefsDOM extends React.Component {
  constructor(props) {
    super(props);

    this.HelloDiv = React.createRef();
  }

  componentDidMount() {
    this.HelloDiv.current.innerHTML = "update text";
  }

  render() {
    return <div ref={this.HelloDiv}>hello world</div>;
  }
}
