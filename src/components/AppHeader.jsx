import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../assets/tornado_logo.png"; // optional for custom styling
import logoText from "../assets/tornado_logo_text.png"; // optional for custom styling
import { useState } from "react";
import "../styles/AppHeader.css";
const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" height={50} />
        <img src={logoText} alt="logo" height={30} />
      </div>
      <div className="menu-desktop-container">
        <Menu
          className="menu-desktop"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">Начало</Menu.Item>
          <Menu.Item key="2">Услуги</Menu.Item>
          <Menu.Item key="3">Цени</Menu.Item>
          <Menu.Item key="4">За нас</Menu.Item>
          <Menu.Item key="5">Контакти</Menu.Item>
        </Menu>
      </div>
      <div className="menu-mobile-container">
        <Button
          variant="outlined"
          size="large"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        ></Button>
        <Drawer title="Menu" placement="right" onClose={onClose} open={visible}>
          <Menu
            className="menu-mobile"
            mode="vertical"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1">Начало</Menu.Item>
            <Menu.Item key="2">Услуги</Menu.Item>
            <Menu.Item key="3">Цени</Menu.Item>
            <Menu.Item key="4">За нас</Menu.Item>
            <Menu.Item key="5">Контакти</Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </>
  );
};

export default AppHeader;
