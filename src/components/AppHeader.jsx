import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../assets/tornado_logo.png"; // optional for custom styling
import logoText from "../assets/tornado_logo_text.png"; // optional for custom styling
import { useState } from "react";
import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

const MenuDesktopContainer = styled.div`
  display: block;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuMobileContainer = styled.div`
  display: none;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: right;
    align-items: center;
  }
`;

const MenuDesktop = styled(Menu)`
  width: 100%;
  display: flex;
  justify-content: right;
`;

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
      <Logo>
        <img src={logo} alt="logo" height={50} />
        <img src={logoText} alt="logo" height={30} />
      </Logo>
      <MenuDesktopContainer>
        <MenuDesktop
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">Начало</Menu.Item>
          <Menu.Item key="2">Услуги</Menu.Item>
          <Menu.Item key="3">Цени</Menu.Item>
          <Menu.Item key="4">За нас</Menu.Item>
          <Menu.Item key="5">Контакти</Menu.Item>
        </MenuDesktop>
      </MenuDesktopContainer>
      <MenuMobileContainer>
        <Button
          variant="outlined"
          size="large"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        ></Button>
        <Drawer title="Menu" placement="right" onClose={onClose} open={visible}>
          <Menu mode="vertical" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Начало</Menu.Item>
            <Menu.Item key="2">Услуги</Menu.Item>
            <Menu.Item key="3">Цени</Menu.Item>
            <Menu.Item key="4">За нас</Menu.Item>
            <Menu.Item key="5">Контакти</Menu.Item>
          </Menu>
        </Drawer>
      </MenuMobileContainer>
    </>
  );
};

export default AppHeader;
