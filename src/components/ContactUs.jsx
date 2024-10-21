import { List, Row, Col, Button } from "antd";
import styled from "styled-components";
import ContactUsForm from "./ContactUsForm";
import { CheckCircleOutlined } from "@ant-design/icons";
import SectionContainer from "./common/SectionContainer";

// Styles for check icons and headings
const checkIconStyle = {
  color: "#1290cb",
  fontSize: "20px",
  margin: "0 10px",
};

const SectionHeading = styled.h2`
  margin-bottom: 20px;
`;

const StyledList = styled(List)`
  margin-bottom: 20px;
`;

// Container for the call button to add spacing
const CallButtonContainer = styled.div`
  margin-top: 10px;
`;

const ContactUs = () => {
  const servicesList1 = [
    "Основно почистване",
    "Почистване след ремонт",
    "Хамалски услуги",
  ];

  const servicesList2 = [
    "Пране на мека мебел",
    "Експресно почистване",
    "Градинарски услуги",
  ];

  const servicesList3 = [
    "Полиране на фарове",
    "Пране на автотапицерии",
    "Борба с насекоми и вредители",
  ];

  const renderServicesList = (services) => (
    <StyledList split={false}>
      {services.map((service, index) => (
        <List.Item key={index}>
          <CheckCircleOutlined style={checkIconStyle} />
          {service}
        </List.Item>
      ))}
      <CallButtonContainer>
        <Button type="primary" size="large">
          Обади се
        </Button>
      </CallButtonContainer>
    </StyledList>
  );

  return (
    <SectionContainer
      title="Контакти"
      viewHeight={120}
      maxHeight={1000}
      id="contacts"
    >
      <Row gutter={[64, 64]} style={{ maxWidth: "1300px" }}>
        <Col xs={24} sm={12} xl={12}>
          <SectionHeading>Отдел</SectionHeading>
          {renderServicesList(servicesList1)}
        </Col>
        <Col xs={24} sm={12} xl={12}>
          <SectionHeading>Отдел</SectionHeading>
          {renderServicesList(servicesList2)}
        </Col>
        <Col xs={24} sm={12} xl={12}>
          <SectionHeading>Отдел</SectionHeading>
          {renderServicesList(servicesList3)}
        </Col>
        <Col xs={24} sm={12} xl={12}>
          <SectionHeading>Изпратете запитване</SectionHeading>
          <ContactUsForm />
        </Col>
      </Row>
    </SectionContainer>
  );
};

export default ContactUs;
