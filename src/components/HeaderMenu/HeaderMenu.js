import "./HeaderMenu.scss";

import { Menu } from "antd";
import React from "react";

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      headermenu: [
        { id: 1, name: "home", link: "#/" },
        { id: 2, name: "payments", link: "#/payments" },
        { id: 3, name: "charts", link: "#/charts" }
      ]
    };
  }

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  renderList() {
    return this.state.headermenu.map(headermenu => {
      return (
        <Menu.Item to={headermenu.link} key={headermenu.id}>
          <a href={headermenu.link}>{headermenu.name}</a>
        </Menu.Item>
      );
    });
  }

  render() {
    return (
      <div className="HeaderMenu">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          {this.renderList()}
        </Menu>
      </div>
    );
  }
}

export default HeaderMenu;
