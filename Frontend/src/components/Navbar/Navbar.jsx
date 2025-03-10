import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../style.css";

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const menuItems = [
    { key: "home", label: "Home" },
    { key: "about", label: "About  Us" },
    { key: "contact", label: "Contact  Us" },
    { key: "careers", label: "Careers" },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <img alt="Logo" />
        </div>

        <div className="desktop-menu">
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            className="nav-menu"
            items={menuItems}
          />
        </div>

        <Button
          className="mobile-menu-button"
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />
      </div>

      <Drawer title="Menu" placement="right" onClose={closeDrawer} open={open}>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="vertical"
          items={menuItems}
        />
      </Drawer>
    </div>
  );
};

export default Navbar;