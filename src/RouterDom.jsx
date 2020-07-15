import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Test from './pages/Test';
import QueryStringDemo from './pages/QueryStringDemo';
import Shop from './pages/Shop'

import './style/nav.css'

/**
 * 页面中使用 Router 只是在 body 下渲染组件，并不是重新跳转页面渲染
 * 
 * Switch: 只匹配一个路径
 * 
 * exact: 展示对应的组件，严格匹配。
 * 
 * strict: 更精准的匹配路由。例如：http://localhost:3000/about [能访问]。http://localhost:3000/about/ [无法访问]
 */

export default class RouterDom extends React.Component {
  render() {
    return(
      <Router>
        <nav>
          <ul>
            <li><NavLink activeClassName="selected" exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/demo">Demo</NavLink></li>
            <li><NavLink exact to="/test">Test</NavLink></li>
            <li><NavLink exact to="/test/ucenter/1005/lee">URL 传参</NavLink></li>
            <li><NavLink exact to="/querystringdemo?id=1001&name=lee">QueryStringDemo</NavLink></li>
            <li><NavLink exact to="/about" activeStyle={{ color:'green', fontWeight:'bold' }}>About</NavLink></li>
            <li><NavLink exact to={{
              pathname: '/about/contact',   // 设置路由
              search: '?sort=name',
              hash: '#the-hash',
              state: { flag: 'flag' }  // URL 隐形传递自定义参数
            }}>Contact</NavLink></li>
            <li><NavLink exact to="/hello-demo">重定向</NavLink></li>
            <li><NavLink exact to="/shop">判断状态重定向</NavLink></li>
          </ul>
        </nav>
        <Switch>
          {/* 使用 Redirect 重定向 */}
          <Redirect from="/hello-demo" to="/demo"></Redirect>
          
          <Route strict exact path="/" component={ Home }></Route>
          <Route strict exact path="/about" component={ About }></Route>
          <Route strict exact path="/about/contact" component={ Contact }></Route>
          <Route strict exact path="/test" render={ (props) => ( <Test {...props} name="lee" /> ) }></Route>
          <Route strict exact path="/test/ucenter/:id?/:name?" render={ (props) => ( <Test {...props} name="lee" /> ) }></Route>
          <Route strict exact path="/demo" render={ () => <div>hello demo</div> }></Route>
          <Route strict exact path="/querystringdemo" component={ QueryStringDemo } ></Route>
          <Route path="/shop" component={ Shop }></Route>
          <Route component={ NotFound }></Route>
        </Switch>
      </Router>
    )
  }
}
