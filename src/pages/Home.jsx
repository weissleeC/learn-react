import React from "react";

export default class Home extends React.Component {
	constructor(...agrs){
		super(...agrs)

		// 路由信息存储在 this.props.match
		console.log(this.props.match);
	}
  render() {
    return <div>Home</div>;
  }
}
