import "./App.scss";

import { BackTop } from "antd";
import React from "react";
import { HashRouter, Route } from "react-router-dom";

import configTFE from "../configs/configTextForElements";
import Charts from "./Charts/Charts";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HomePage from "./HomePage/HomePage";
import Payments from "./Payments/Payments";

class App extends React.Component {
  render() {
    const { buttons } = configTFE;
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
          <div className="ant-btn ant-btn-primary ant-btn-circle">
            {buttons.commonButtons.up.text}
          </div>
        </BackTop>
      </div>
    );
  }
}

export default App;
