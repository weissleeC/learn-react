# React 学习

### 一、开发环境安装
1. 使用 `<script src="react.js">` 标签方式引入<br>
  **缺点：** 如果项目较大，需要进行拆分，页面性能很低，不便维护，不推荐这种方式
2. **create-react-app** 脚手架工具安装 
  1. 确保本地开发已安装 [Node](https://nodejs.org/en/) 和 NPM.
  2. 安装 React 脚手架：`npm install -g create-react-app`
  3. 选择目录创建 React 项目：`create-react-app xxxx`
  4. 在已创建好的项目下启动：`npm run start`

### 二、文件说明
- `package-lock.json` 项目依赖的安装包版本管理
- `package.json` node 包文件，第三方依赖包版本管理
- `.gitignore` 用 git 管理的时候，这个文件可以设置一些不需要上传的文件
- `node-modules` 第三方模块包
- `src/serviceWorker` PWA ([Progressive Web Apps](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps))，渐进式 Web 应用
- `src/App.test.js` 自动化测试文件

[详细文档总结](https://github.com/weissleeC/learn-summary/tree/master/React)
