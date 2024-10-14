import { Layout, ConfigProvider, Divider } from "antd";
import AppHeader from "./components/AppHeader";
import {} from "antd";
import OrderService from "./components/OrderService";
import "./styles/main.css";
import WhyChooseServices from "./components/WhyChooseServices";
import AboutUs from "./components/AboutUs";
const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
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
            {/* <div
              className="logo-big-container"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                border: "1px solid red",
              }}
            >
              <img style={{ width: "300px" }} src={logo_big} alt="logo" />
            </div> */}
            <OrderService />
          </div>
          <Divider />
          {/* <CleaningServicesMenu /> */}
          <Divider />
          {/* <ServicesTabs /> */}
          <Divider />
          <WhyChooseServices />
          <Divider />
          <AboutUs />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
