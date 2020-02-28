import "./App.scss";

import { BackTop } from "antd";
import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Charts from "./Charts/Charts";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HomePage from "./HomePage/HomePage";
import Payments from "./Payments/Payments";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <HeaderMenu />
            <Route path="/" exact component={HomePage} />
            <Route path="/payments" exact component={Payments} />
            <Route path="/charts" exact component={Charts} />
          </div>
        </HashRouter>
        <BackTop visibilityHeight={100}>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
      </div>
    );
  }
}

export default App;
