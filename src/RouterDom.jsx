import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

/**
 * 在但页面应用中使用 Router 只是在 body 下渲染组件，并不是重新跳转页面渲染
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
            <li><Link to="/home">home</Link></li>
            <li><Link to="/about">about</Link></li>
          </ul>
        </nav>
        <Route path="/home" component={ Home }></Route>
        <Route path="/about" component={ About }></Route>
      </Router>
    )
  }
}