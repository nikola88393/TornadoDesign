import { Layout, ConfigProvider, Divider } from "antd";
import AppHeader from "./components/AppHeader";
import OrderService from "./components/OrderService";
import WhyChooseServices from "./components/WhyChooseServices";
import CleaningServicesMenu from "./components/CleaningServicesMenu";
// import CleaningServicesTable from "./components/CleaningServicesTable";
import AboutUs from "./components/AboutUs";
import "./styles/main.css";

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Montserrat, sans-serif",
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
        </Content>
        {/* Pricing tables might not be needed */}
        {/* <Divider style={{ margin: "50px 0" }}>
          <h1>Цени на услугите</h1>
        </Divider>
        <CleaningServicesTable /> */}
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
