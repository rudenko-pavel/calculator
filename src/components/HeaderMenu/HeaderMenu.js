import "./HeaderMenu.scss";

import { Menu, Popover } from "antd";
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
  const [wizardLink, wlChange] = useState("");

  /**
   * Changes  state if url has additional values
   *  e.g. ...?rentValue=1000&propertyValue=50000...
   */
  function checkUrl() {
    if (marker === true) {
      const startStr = window.location.hash.indexOf("?");
      if (startStr > -1) {
        const cHash = window.location.hash;
        const clearStr = cHash.substring(startStr + 1, cHash.length);
        const arrayKeyVal = clearStr.split("&");
        arrayKeyVal.forEach(oneString => {
          const toState = oneString.split("=");
          dispatch(setValue(toState[0], parseFloat(toState[1])));
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
    wlChange("");
    let result = "?";
    for (const [key, val] of Object.entries(data)) {
      result = `${result + key}=${val.val}&`;
    }
    wlChange(window.location + result.substring(0, result.length - 1));
    navigator.clipboard.writeText(wizardLink);
    return result.substring(0, result.length - 1);
  }

  return (
    <div className="HeaderMenu">
      <UrlSync>
        <Popover
          content={wizardLink}
          placement="bottom"
          title="Copied Link"
          trigger="click"
        >
          <Link
            to={() => getUrl()}
            className="ant-btn ant-btn-primary create-link"
            title=""
          >
            Create link
          </Link>
        </Popover>
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
