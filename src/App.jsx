import { Layout, ConfigProvider, Divider } from "antd";
import AppHeader from "./components/AppHeader";
import OrderService from "./components/OrderService";
import CleaningServicesMenu from "./components/CleaningServicesMenu";
// import CleaningServicesTable from "./components/CleaningServicesTable";
import AboutUs from "./components/AboutUs";
import "./styles/main.css";
import AppFooter from "./components/AppFooter";
import ContactUs from "./components/ContactUs";
import Faq from "./components/Faq";
import styled from "styled-components";

const { Header, Footer, Content } = Layout;

const StickyHeader = styled(Header)`
  position: fixed;
  top: 0;
  z-index: 1000; /* Keeps it above other content */
  width: 100%;
`;

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Montserrat, sans-serif",
          colorPrimary: "#1290cb",
          // experiment wqith overriding other tokens
          fontSize: 16, // Change base font size
          lineHeight: 1.5, // Adjust line height
          Layout: {
            headerBg: "#ffffff",
            headerColor: "#ffffff",
          },
          Divider: {
            margin: "50px",
          },
          // Seed Token
        },
      }}
    >
      <Layout>
        <StickyHeader style={{ display: "flex" }}>
          <AppHeader />
        </StickyHeader>
        <Content
          style={{
            // background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            // paddingBlock: "50px",
            // paddingInline: "50px",
            padding: "50px",
          }}
        >
          <div
            style={{
              display: " flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <OrderService />
          </div>
          <Divider>
            <h1>Нашите услуги</h1>
          </Divider>
          <CleaningServicesMenu />
          <Divider>
            <h1>Защо нас?</h1>
          </Divider>
          <AboutUs />
          <Divider>
            <h1>Контакти</h1>
          </Divider>
          <ContactUs />
          <Divider>
            <h1>ЧЗВ</h1>
          </Divider>
          <Faq />
        </Content>
        <Footer
          style={{
            borderTop: "1px solid rgba(5, 5, 5, 0.06)",
            backgroundColor: "#ffffff",
          }}
        >
          <AppFooter />
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
