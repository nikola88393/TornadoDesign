import { Layout, ConfigProvider, Divider } from "antd";
import AppHeader from "./components/AppHeader";
import OrderService from "./components/OrderService";
import WhyChooseServices from "./components/WhyChooseServices";
import CleaningServicesMenu from "./components/CleaningServicesMenu";
// import CleaningServicesTable from "./components/CleaningServicesTable";
import AboutUs from "./components/AboutUs";
import "./styles/main.css";
import AppFooter from "./components/AppFooter";
import ContactUs from "./components/ContactUs";

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Montserrat, sans-serif",
          colorPrimary: "#1290cb",
          Layout: {
            headerBg: "#ffffff",
            headerColor: "#ffffff",
          },
          // Seed Token
        },
      }}
    >
      <Layout>
        <Header style={{ display: "flex" }}>
          <AppHeader />
        </Header>
        <Content
          style={{
            padding: "0 50px",
            // background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            paddingBlock: "50px",
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
          <Divider className="text-raleway" style={{ margin: "50px 0" }}>
            <h1>Нашите услуги</h1>
          </Divider>
          <CleaningServicesMenu />
          <Divider style={{ margin: "50px 0" }}>
            <h1>Защо нас?</h1>
          </Divider>
          <WhyChooseServices />
          <Divider style={{ margin: "50px 0" }}>
            <h1>Кои сме ние?</h1>
          </Divider>
          <AboutUs />
          <Divider style={{ margin: "50px 0" }}>
            <h1>Контакти</h1>
          </Divider>
          <ContactUs />
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
