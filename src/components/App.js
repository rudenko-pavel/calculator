import "./App.scss";

import { BackTop, Layout } from "antd";
import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";

import configTFE from "../configs/configTextForElements";
import Charts from "./Charts/Charts";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HomePage from "./HomePage/HomePage";
import Payments from "./Payments/Payments";
import RightPart from "./RightPart/RightPart";
import SwitchTheme from "./SwitchTheme/SwitchTheme";

const { Header, Content } = Layout;

const App = () => {
  const { buttons, switchBlock } = configTFE;
  const [Theme, setTheme] = useState(switchBlock.values[0]);

  // set value `Theme`
  function onChangeTheme(val) {
    setTheme(val);
  }

  return (
    <div className={`${Theme} App`}>
      <HashRouter>
        <Layout className="container">
          <Header className="header">
            <HeaderMenu />
          </Header>
          <SwitchTheme siteTheme={Theme} onChangeTheme={onChangeTheme} />
          <Content className="site-layout">
            <Route path="/" exact component={HomePage} />
            <Route path="/payments" exact component={Payments} />
            <Route path="/charts" exact component={Charts} />
            <Route path="/overview" exact component={RightPart} />
          </Content>
        </Layout>
      </HashRouter>
      <BackTop visibilityHeight={100}>
        <div className="ant-btn ant-btn-primary ant-btn-circle">
          {buttons.commonButtons.up.text}
        </div>
      </BackTop>
    </div>
  );
};

export default App;
