import { Button, Drawer, Anchor } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../assets/tornado_logo.png"; // optional for custom styling
import logoText from "../assets/tornado_logo_text.png"; // optional for custom styling
import { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

const MenuDesktopContainer = styled.div`
  display: flex;
  // width: 100%;
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

const { Link } = Anchor;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="logo" height={50} />
        <img src={logoText} alt="logo" height={30} />
      </Logo>
      <MenuDesktopContainer>
        <Anchor
          targetOffset={250}
          direction="horizontal"
          style={{ height: "100%" }}
        >
          <Link href="#hero" title="Начало" />
          <Link href="#services" title="Услуги" />
          <Link href="#aboutUs" title="За нас" />
          <Link href="#contacts" title="Контакти" />
          <Link href="#faq" title="ЧЗВ" />
        </Anchor>
      </MenuDesktopContainer>
      <MenuMobileContainer>
        <Button
          variant="link"
          size="large"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        ></Button>
        <Drawer placement="right" onClose={onClose} open={visible}>
          <Anchor targetOffset={200} onClick={onClose}>
            <Link href="#hero" title="Начало" />
            <Link href="#services" title="Услуги" />
            <Link href="#aboutUs" title="За нас" />
            <Link href="#contacts" title="Контакти" />
            <Link href="#faq" title="ЧЗВ" />
          </Anchor>
        </Drawer>
      </MenuMobileContainer>
    </HeaderContainer>
  );
};

export default AppHeader;
