import { Button, Drawer, Anchor, ConfigProvider } from "antd";
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

const StyledAnchor = styled(Anchor)`
  .ant-anchor-link-title {
    font-weight: 700;
    font-size: 16px;
  }
`;
const anchorLinks = [
  {
    key: 1,
    title: "НАЧАЛО",
    href: "#hero",
  },
  {
    key: 2,
    title: "УСЛУГИ",
    href: "#services",
  },
  {
    key: 3,
    title: "ЗА НАС",
    href: "#aboutUs",
  },
  {
    key: 4,
    title: "КОНТАКТИ",
    href: "#contacts",
  },
  {
    key: 5,
    title: "ЧЗВ",
    href: "#faq",
  },
];

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          Anchor: {
            colorSplit: "none",
            lineWidthBold: "0",
          },
        },
      }}
    >
      <HeaderContainer>
        <Logo>
          <img src={logo} alt="logo" height={50} />
          <img src={logoText} alt="logo" height={30} />
        </Logo>
        <MenuDesktopContainer>
          <StyledAnchor
            targetOffset={80}
            direction="horizontal"
            items={anchorLinks}
          />
        </MenuDesktopContainer>
        <MenuMobileContainer>
          <Button
            size="large"
            type="text"
            icon={<MenuOutlined />}
            onClick={showDrawer}
          ></Button>
          <Drawer placement="right" onClose={onClose} open={visible}>
            <StyledAnchor
              targetOffset={80}
              onClick={onClose}
              items={anchorLinks}
            />
          </Drawer>
        </MenuMobileContainer>
      </HeaderContainer>
    </ConfigProvider>
  );
};

export default AppHeader;
