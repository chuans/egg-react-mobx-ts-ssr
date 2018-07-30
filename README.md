# Egg-react-typescript-mobx ssr

基于 Egg + React + TypeScript + mobx 搭建单页面服务端客户端渲染同构工程骨架项目.

## 1. 版本

- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+,
- Webpack 版本: ^4.x.x
- React 版本: ^16.0.0
- TypeScript: ^2.9.2


## 2. 特性

- 支持 Egg Node 端代码 和 前端代码 TypeScript 编写和构建

- 支持 async 和 await 特性, Controller 采用 class 方式编写

- 支持 server 和 client 端代码修改, Webpack 时时编译和热更新, `npm run dev` 一键启动应用

- 基于 react + react-router +mobx 单页面服务器客户端同构实现

- 支持开发环境, 测试环境，正式环境 Webpack 编译

- 支持 js/css/image 资源依赖, 内置支持CDN特性

- 支持 Webpack DLL 自动化构建

 

## 3. 依赖

- [easywebpack-react](https://github.com/hubcarl/easywebpack)
- [egg-webpack](https://github.com/hubcarl/egg-webpack) 
- [egg-webpack-react](https://github.com/hubcarl/egg-webpack-react)

## 4. 使用

#### 4.1 安装依赖

```bash
yarn install
```

#### 4.2 本地启动应用

首次运行请先运行一次` yarn run tsc`

```bash
yarn run dev
```

应用访问: http://127.0.0.1:7001


#### 4.3 构建

- TypeScript 前端工程构建

```bash
yarn run build
```

#### 4.4 打包部署

1. 先运行 yarn run tsc` 和 yarn run build` 构建 TypeScript Egg 代码和 TypeScript 前端代码
2. 项目代码和构建代码一起打包代码
3. 应用部署后，通过 yarn start` 启动应用

## 4. 存在问题

在我修改了前端项目过后，编译ts需要手动编译，我使用的是webstrom的自动编译，如果前端不使用ts，使用js或者jsx可以直接修改文件后缀，并在入口webppack修改对应的入口文件名字。

#### 注意：前端使用何种语言修改对项目没有任何影响



[MIT](LICENSE)
