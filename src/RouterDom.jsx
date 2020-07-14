import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

/**
 * 在但页面应用中使用 Router 只是在 body 下渲染组件，并不是重新跳转页面渲染
 * 
 * exact: 展示对应的组件，严格匹配。
 * 
 * strict: 更精准的匹配路由。例如：http://localhost:3000/about [能访问]。http://localhost:3000/about/ [无法访问]
 */

export default class RouterDom extends React.Component {

  componentDidMount(){
    console.log('touch nav');
  }

  render() {
    return(
      <Router>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/about/contact">contact</Link></li>
          </ul>
        </nav>
        <Route exact path="/" component={ Home }></Route>
        <Route exact strict path="/about" component={ About }></Route>
        <Route path="/about/contact" component={ Contact }></Route>
      </Router>
    )
  }
}