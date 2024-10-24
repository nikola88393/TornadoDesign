import { Button, Drawer, Anchor, ConfigProvider, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../assets/tornado_logo.png"; // optional for custom styling
import logoText from "../assets/tornado_logo_text.png"; // optional for custom styling
import { useState } from "react";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const StickyHeader = styled(Header)`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1000; /* Keeps it above other content */
  width: 100%;
  padding: 40px;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
  border: 1px solid r;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

const MenuDesktopContainer = styled.div`
  display: flex;
  gap: 20px;
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
      <StickyHeader>
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
              affix={false}
            />
            <Button
              type="text"
              icon={<UserOutlined style={{ fontSize: "25px" }} />}
            ></Button>
          </MenuDesktopContainer>
          <MenuMobileContainer>
            <Button
              size="large"
              type="text"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            ></Button>
            <Drawer
              width={250}
              placement="right"
              onClose={onClose}
              open={visible}
            >
              <StyledAnchor
                targetOffset={80}
                onClick={onClose}
                items={anchorLinks}
                affix={false}
              />
              <Button
                type="text"
                icon={<UserOutlined style={{ fontSize: "25px" }} />}
              ></Button>
            </Drawer>
          </MenuMobileContainer>
        </HeaderContainer>
      </StickyHeader>
    </ConfigProvider>
  );
};

export default AppHeader;
