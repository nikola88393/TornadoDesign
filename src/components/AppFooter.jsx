import { List, Row, Col, FloatButton } from "antd";
import { FacebookOutlined, ArrowUpOutlined } from "@ant-design/icons";
import styled from "styled-components";

const contacts = [
  {
    title: "Телефон",
    value: "+359 87 835 1360",
  },
];

const workingHours = [
  {
    title: "Понеделник - Петък",
    value: "08:30 - 17:00",
  },
  {
    title: "Събота",
    value: "09:00 - 14:00",
  },
  {
    title: "Неделя",
    value: "09:00 - 12:00",
  },
];

const socialMedia = [
  {
    title: "Facebook",
    value: "https://www.facebook.com",
    icon: <FacebookOutlined />,
  },
];

const FooterText = styled.p`
  text-align: center;
  margin: 0;
  margin-top: 20px;
`;

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const FooterContainer = styled.div`
  width: 100%;
  background-color: #1290cb;
  color: white;
  max-width: 100vw;
`;

const AppFooter = () => {
  return (
    <>
      <div style={{ overflow: "hidden", lineHeight: "0" }}>
        <svg
          viewBox="0 0 1920 80"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", minHeight: "90px" }}
        >
          <path
            d="M0 20C0 20 169.5 0 510 0C850.5 0 1069.5 60 1410 60C1750.5 60 1920 20 1920 20V80H0V20Z"
            fill="#1290cb"
          ></path>
        </svg>
      </div>
      <FooterContainer>
        <Row gutter={[32, 32]} align="center">
          <StyledCol xs={24} sm={10} xl={6}>
            <h2>Контакти</h2>
            <List
              dataSource={contacts}
              renderItem={(contact) => (
                <List.Item key={contact.title} style={{ color: "white" }}>
                  {contact.title}: <strong>{contact.value}</strong>
                </List.Item>
              )}
            />
          </StyledCol>
          <StyledCol xs={24} sm={12} xl={6}>
            <h2>Работно време</h2>
            <List
              dataSource={workingHours}
              renderItem={(workingHour) => (
                <List.Item key={workingHour.title} style={{ color: "white" }}>
                  {workingHour.title}: <strong>{workingHour.value}</strong>
                </List.Item>
              )}
            />
          </StyledCol>
          <StyledCol xs={24} sm={12} xl={6}>
            <h2>Социални мрежи</h2>
            <List
              dataSource={socialMedia}
              renderItem={(socialMediaItem) => (
                <List.Item
                  key={socialMediaItem.title}
                  style={{ color: "white" }}
                >
                  {socialMediaItem.icon}{" "}
                  <a href={socialMediaItem.value}>{socialMediaItem.title}</a>
                </List.Item>
              )}
            />
          </StyledCol>
        </Row>
        <FooterText>Copyright © 2024 Tornado Services</FooterText>
        <FloatButton.BackTop duration={700} icon={<ArrowUpOutlined />} />
      </FooterContainer>
    </>
  );
};

export default AppFooter;
