import { version } from "antd";
import AppHeader from "./components/AppHeader";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header style={{ display: "flex" }}>
        <AppHeader />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          <h1>Welcome to Ant Design {version}</h1>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
