们基于 Redux 推出了自己的最佳实践 `dva`，以及可插拔的企业级应用框架 `umi`，推荐你在项目中使用。

`umi`:是一个可插拔的企业级 react 应用框架
```
  $ yarn global add umi
  $ umi -v
  2.10.4

  <!-- or -->
  npm install umi -g
```


`Ant Design Pro`: 这是一个基于 `umi`、`dva` 和 `ant design` 的开箱即用的中台前端/设计解决方案。
  



## 在`create-react-app`中应用
- 此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 `react-app-rewired` （一个对 create-react-app 进行自定义配置的社区解决方案）。
引入 `react-app-rewired` 并修改 package.json 里的启动配置。由于新的 react-app-rewired@2.x 版本的关系，你还需要安装 `customize-cra`。
```
 npm install --save-dev react-app-rewired customize-cra
 <!-- package.json -->
 "start": "react-app-rewired start",
```
然后在项目根目录创建一个 `config-overrides.js` 用于修改默认配置。
```
const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
)

```

- 一些别的配置涉及: 
  antd-dayjs-webpack-plugin, addLessLoader 

  定制主题: 如果你在使用 babel-plugin-import 的 style 配置来引入样式，需要将配置值从 'css' 改为 true，这样会引入 less 文件。



## 一些比较好的组件，轮子
https://ant.design/docs/react/recommendation-cn

