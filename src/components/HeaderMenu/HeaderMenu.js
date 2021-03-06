import "./HeaderMenu.scss";

import { Button, Menu } from "antd";
import React, { useState } from "react";

import configHeaderMenu from "../../configs/configHeaderMenu";
import CopyLink from "../CopyLink/CopyLink";

const HeaderMenu = () => {
  const { headermenu } = configHeaderMenu;

  const [currItem, setCurrItem] = useState(window.location.hash || "#/");

  // Changes  current button in HeaderMenu
  function handleClick(e) {
    setCurrItem(e.key);
  }

  // Returns all buttons for HeaderMenu
  function renderListFunc() {
    return headermenu.map(item => {
      return (
        <Menu.Item to={item.link} key={item.link} className={item.addClass}>
          <Button danger type={item.type}>
            <a href={item.link}>{item.name}</a>
          </Button>
        </Menu.Item>
      );
    });
  }
  const renderList = renderListFunc();
  return (
    <div className="HeaderMenu">
      <CopyLink />
      <Menu
        onClick={e => handleClick(e)}
        selectedKeys={[currItem]}
        mode="horizontal"
      >
        {renderList}
      </Menu>
    </div>
  );
};

export default HeaderMenu;
