import React from 'react';
import { Redirect, Prompt } from "react-router-dom";

export default class Shop extends React.Component {
  state = {
    isLogin: true,
    name: ''
  }

  render(){
    const { isLogin } = this.state;
    return(
      <div>
        {
          isLogin ? '已登陆' : <Redirect to="/" />
        }

        {/* 页面离开提示 */}
        <Prompt
          when={ !!this.state.name }
          message={ '确定要离开当前页面吗?' }
        />
        <input type="text" value={ this.state.name } onChange={ (e) => this.setState({name:e.target.value}) } />
      </div>
    )
  }
}