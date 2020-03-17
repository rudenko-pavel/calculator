import { Button, Popover } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UrlSync from "react-url-sync";

import { setValue } from "../../actions";
import configTextForElements from "../../configs/configTextForElements";

const CopyLink = () => {
  const { copyLinkBlock } = configTextForElements;
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
   * Add to URL data from state
   */
  function getUrl() {
    wlChange("");
    let result = "?";
    // eslint-disable-next-line array-callback-return
    Object.keys(data).map(function rk(key) {
      result = `${result + key}=${data[key].val}&`;
    });

    // eslint-disable-next-line no-undef
    navigator.clipboard.writeText(result);
    console.log(window.location + result.substring(0, result.length - 1));
    wlChange(window.location + result.substring(0, result.length - 1));
    return wizardLink;
  }

  return (
    <UrlSync>
      <Popover
        content={wizardLink}
        placement="bottom"
        title={copyLinkBlock.title}
        trigger="click"
      >
        <Button
          onClick={() => getUrl()}
          className="ant-btn ant-btn-primary create-link"
          title=""
        >
          {copyLinkBlock.btn}
        </Button>
      </Popover>
    </UrlSync>
  );
};

export default CopyLink;
