import React from "react";
import ReactDOM from "react-dom";
import App from './App';
// import { ConfigProvider, DatePicker, message } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from "antd/es/locale/zh_CN";
// import moment from "moment";
// import "moment/locale/zh-cn";
// import "antd/dist/antd.css";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

// moment.locale("zh-cn");

// class App extends React.Component {
//   state = {
//     date: null
//   };

//   handleChange = date => {
//     message.info(
//       `您选择的日期是: ${date ? date.format("YYYY-MM-DD") : "未选择"}`
//     );
//     this.setState({ date });
//   };
//   render() {

//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
