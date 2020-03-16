import "./HeaderMenu.scss";

import { Menu } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UrlSync from "react-url-sync";

import { setValue } from "../../actions";
import configHeaderMenu from "../../configs/configHeaderMenu";

const HeaderMenu = () => {
  const { headermenu } = configHeaderMenu;
  const [currItem, setCurrItem] = useState(window.location.hash);
  const data = useSelector(state => state.state);
  const dispatch = useDispatch();
  const [marker, count] = useState(true);
  /**
   * Changes  state if url has additional values
   *  e.g. ...?rentValue=1000&propertyValue=50000...
   */
  function checkUrl() {
    console.log("marker", marker)
    if (marker === true){
      if (window.location.hash.indexOf("?") > -1) {
        const cHash = window.location.hash;
        const clearStr = cHash.substring(3, cHash.length);
        const arrayKeyVal = clearStr.split("&");
        arrayKeyVal.forEach(oneString => {
          const toState = oneString.split("=");
          dispatch(setValue(toState[0], parseInt(toState[1])));
        });
        count(false);
      }
    }
  }
  checkUrl();
  /**
   * Changes  current vutton in HeaderMenu
   */
  function handleClick(e) {
    setCurrItem(e.key);
  }

  /**
   * Returns all buttons for HeaderMenu
   */
  function renderListFunc() {
    return headermenu.map(item => {
      return (
        <Menu.Item to={item.link} key={item.name} className={item.addClass}>
          <a href={item.link}>{item.name}</a>
        </Menu.Item>
      );
    });
  }
  const renderList = renderListFunc();

  /**
   * Add to URL data from state
   */
  function getUrl() {
    let result = "?";
    for (const [key, val] of Object.entries(data)) {
      result = `${result + key}=${val.val}&`;
    }

    return result.substring(0, result.length - 1);
  }

  return (
    <div className="HeaderMenu">
      <UrlSync>
        <Link
          to={() => getUrl()}
          className="ant-btn ant-btn-primary create-link"
          title="/?other=eee&answers=1"
        >
          Create link
        </Link>
      </UrlSync>
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
