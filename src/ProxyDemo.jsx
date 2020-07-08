import React,{ Fragment } from 'react';

export default class ProxyDemo extends React.Component {

  componentDidMount(){
    /**
     * 跨域处理
     * 
     * 解决方案：
     *    开发模式下：利用环境解决 react vue 都提供了解决方案
     *    生产模式下：jsonp cors iframe postMessage
     * 
     *    在 package.json 配置 "proxy": "https://imgcache.qq.com" 
     */
    fetch("/open_proj/proj_qcloud_v2/gateway/product/cdn/js/map-node.json")
    .then(res => res.json())
    .then(data =>{
      console.log(data);
    })
    // 失败
    .catch(error =>{
      console.log(new Error(error));
    })
  }

  render() {
    return(
      <Fragment>
        <p>hello</p>
      </Fragment>
    )
  }
}