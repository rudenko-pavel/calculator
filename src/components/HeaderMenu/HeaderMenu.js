import "./HeaderMenu.scss";

import { Button, Menu } from "antd";
import React, { useState } from "react";

import configHeaderMenu from "../../configs/configHeaderMenu";
import CopyLink from "../CopyLink/CopyLink";

const HeaderMenu = () => {
  const { headermenu } = configHeaderMenu;

  function getUrlHash(str){
    console.log("getUrlHash1 :'"+str+"'")
    let res = str;
    if (str === "#/") res = "main";
    console.log("getUrlHash2 ", res, str)
    return res;
  }

  const [currItem, setCurrItem] = useState(getUrlHash(window.location.hash));
console.log(window.location.hash)
  /**
   * Changes  current button in HeaderMenu
   */
  function handleClick(e) {
    console.log(e)
    setCurrItem(e.key);
  }

  /**
   * Returns all buttons for HeaderMenu
   */
  function renderListFunc() {
    return headermenu.map(item => {
      return (
        <Menu.Item to={item.link} key={item.name} className={item.addClass}>
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
        selectedKeys={currItem}
        mode="horizontal"
      >
        {renderList}
      </Menu>
    </div>
  );
};

export default HeaderMenu;
