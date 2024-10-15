import { List, Row, Col, Button } from "antd";
import ContactUsForm from "./ContactUsForm";
import { CheckCircleOutlined } from "@ant-design/icons";

const checkIconStyle = {
  color: "#1290cb",
  fontSize: "20px",
  margin: "0 10px",
};
const ContactUs = () => {
  return (
    <Row gutter={[64, 64]} style={{ maxWidth: "1500px" }}>
      <Col xs={24} sm={12} xl={12}>
        <h2>Отдел</h2>
        <List split={false}>
          <List.Item>
            <CheckCircleOutlined style={checkIconStyle} />
            Основно почистване
          </List.Item>
          <List.Item>
            <CheckCircleOutlined style={checkIconStyle} />
            Почистване след ремонт
          </List.Item>
          <List.Item>
            <CheckCircleOutlined style={checkIconStyle} />
            Хамалски услуги
          </List.Item>
          <Button style={{ marginTop: "10px" }} type="primary" size="large">
            Обади се
          </Button>
        </List>
      </Col>
      <Col xs={24} sm={12} xl={12}>
        <h2>Отдел</h2>
        <List split={false}>
          <List.Item>
            <CheckCircleOutlined style={checkIconStyle} />
            Пране на мека мебел
          </List.Item>
          <List.Item>
            <CheckCircleOutlined style={checkIconStyle} />
            Експресно почистване
          </List.Item>
          <List.Item>
            <CheckCircleOutlined style={checkIconStyle} />
            Градинарски услуги
          </List.Item>
          <Button style={{ marginTop: "10px" }} type="primary" size="large">
            Обади се
          </Button>
        </List>
      </Col>
      <Col xs={24} sm={12} xl={12}>
        <h2>Отдел</h2>
        <List split={false}>
          <List.Item>
            <CheckCircleOutlined style={checkIconStyle} />
            Полиране на фарове
          </List.Item>
          <List.Item>
            <CheckCircleOutlined style={checkIconStyle} />
            Пране на автотапицерии
          </List.Item>
          <List.Item>
            <CheckCircleOutlined style={checkIconStyle} />
            Борба с насекоми и вредители
          </List.Item>
          <Button style={{ marginTop: "10px" }} type="primary" size="large">
            Обади се
          </Button>
        </List>
      </Col>
      <Col xs={24} sm={12} xl={12}>
        <h2>Изпратете запитване</h2>
        <ContactUsForm />
      </Col>
    </Row>
  );
};

export default ContactUs;
