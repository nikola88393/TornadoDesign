import { Layout, ConfigProvider } from "antd";
import AppHeader from "./components/AppHeader";
import {} from "antd";
import OrderService from "./components/OrderService";
// import logo_big from "./assets/tornado_logo_big.png";
import "./styles/main.css";
import CleaningServicesMenu from "./components/CleaningServicesMenu";
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
          {/* <div
            className="logo-big-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo_big} alt="logo" />
          </div> */}
          <OrderService />
          <CleaningServicesMenu />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
