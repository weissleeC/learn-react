import React,{ Fragment } from 'react';
import ProxyDemo from './ProxyDemo'

import qs from 'querystring'

export default class FetchDOM extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      banners:[]
    }
  }

  componentDidMount(){
    /**
     * fetch 基于 promise
     * 
     * get 请求
     */
    fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
    .then(res => {
      return res.json();
    })
    .then(data => {
        console.log(data);

        this.setState({
          banners: data.banner
        })
    });

    /**
     * post 
     */
    fetch('http://iwenwiki.com/api/blueberrypai/login.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json,text/plain,*/*'
      },
      body: qs.stringify({
        user_id: 'iwen@qq.com',
        password: 'iwen123',
        verification_code: 'crfvw'
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  render() {
    const { banners } = this.state;
    return(
      <Fragment>
        {
          banners.length > 0 ?
          <ul>
            {
              banners.map( (i,index) => (
              <li key={ index } style={{ marginBottom:'40px' }}>
                <h4>{ i.title }</h4>
                <p>{ i.content }</p>
              </li>
              ))
            }
          </ul>
          : <div>暂无数据</div>
        }

        <ProxyDemo />
      </Fragment>
    )
  }
}