import { Layout } from "antd";
import AppHeader from "../AppHeader";
import OrderService from "./OrderService";
import CleaningServicesMenu from "./CleaningServices";
import AboutUs from "./AboutUs";
import AppFooter from "../common/AppFooter";
import ContactUs from "./ContactUs";
import Faq from "./Faq";
import WhyChooseServices from "./WhyChooseServices";
import LastCallToAction from "./LastCallToAction";

const { Content } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <Content>
          <OrderService />
          <CleaningServicesMenu />
          <WhyChooseServices />
          <AboutUs />
          <ContactUs />
          <Faq />
          <LastCallToAction />
        </Content>
      </Layout>
      <AppFooter />
    </Layout>
  );
};

export default HomePage;
