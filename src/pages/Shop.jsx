import React from 'react';
import { Redirect } from "react-router-dom";

export default class Shop extends React.Component {
  state = {
    isLogin: false
  }

  render(){
    const { isLogin } = this.state;
    return(
      <div>
        {
          isLogin ? '已登陆' : <Redirect to="/" />
        }
      </div>
    )
  }
}