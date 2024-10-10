import { Menu } from "antd";
import logo from "../assets/tornado_logo.png"; // optional for custom styling

const AppHeader = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" width={67} />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ width: "100%", display: "flex", justifyContent: "right" }}
      >
        <Menu.Item key="1">Начало</Menu.Item>
        <Menu.Item key="2">Услуги</Menu.Item>
        <Menu.Item key="3">Цени</Menu.Item>
        <Menu.Item key="4">За нас</Menu.Item>
        <Menu.Item key="5">Контакти</Menu.Item>
      </Menu>
    </>
  );
};

export default AppHeader;
