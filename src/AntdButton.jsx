import React from "react";

import { Button } from "antd";

/**
 * antd 按需加载
 * 配置根目录下的 package.json 中的 babel
 */

export default class AntdButon extends React.Component {
  render() {
    return <Button type="primary">Primary Button</Button>;
  }
}
