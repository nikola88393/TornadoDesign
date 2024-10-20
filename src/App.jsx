import { Layout, ConfigProvider } from "antd";
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
import WhyChooseServices from "./components/WhyChooseServices";

const { Header, Footer, Content } = Layout;

const StickyHeader = styled(Header)`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1000; /* Keeps it above other content */
  width: 100%;
  padding: 50px;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
  @media (max-width: 768px) {
    padding: 20px;
  }
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
            footerBg: "#ffffff",
            bodyBg: "#ffffff",
          },
          Divider: {
            margin: "50px",
          },
          // Seed Token
        },
      }}
    >
      <Layout>
        <StickyHeader>
          <AppHeader />
        </StickyHeader>
        <Content>
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
          <CleaningServicesMenu />
          <WhyChooseServices />
          <AboutUs />
          <ContactUs />
          <Faq />
        </Content>
        <Footer
          style={{
            borderTop: "1px solid rgba(5, 5, 5, 0.06)",
            // backgroundColor: "#1290cb",
            // color: "white",
          }}
        >
          <AppFooter />
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
