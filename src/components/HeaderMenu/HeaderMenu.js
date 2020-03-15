import "./HeaderMenu.scss";

import { Menu } from "antd";
import React, { useState } from "react";

import configHeaderMenu from "../../configs/configHeaderMenu";

const HeaderMenu = () => {
  const { headermenu } = configHeaderMenu;
  const [currItem, setCurrItem] = useState(window.location.hash);

  function handleClick(e) {
    console.log("click ", e.key);
    setCurrItem(e.key)
  }

  function renderListFunc() {
    console.log("render", headermenu)
    return headermenu.map(item => {
      return (
        <Menu.Item to={item.link} key={item.name} className={item.addClass}>
          <a href={item.link}>{item.name}</a>
        </Menu.Item>
      );
    });
  }
  const renderList = renderListFunc();

  return (
    <div className="HeaderMenu">
      <Menu
        onClick={e => handleClick(e)}
        selectedKeys={currItem}
        mode="horizontal"
      >
        {renderList}
      </Menu>
    </div>
  );
};

export default HeaderMenu;
