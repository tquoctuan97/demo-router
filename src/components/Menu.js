import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true
  },
  {
    name: "Giới Thiệu",
    to: "/about",
    exact: false
  },
  {
    name: "Liên hệ",
    to: "/contact",
    exact: false
  },
  {
    name: "Sản phẩm",
    to: "/products",
    exact: false
  }
];

const Menulink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active abc" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  showMenus = menu => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <Menulink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };

  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">{this.showMenus(menus)}</ul>
      </nav>
    );
  }
}

export default Menu;
