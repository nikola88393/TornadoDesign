import { List, Row, Col } from "antd";
import { FacebookOutlined } from "@ant-design/icons";

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

const AppFooter = () => {
  return (
    <>
      <Row gutter={32} style={{ maxWidth: "1500px", margin: "0 auto" }}>
        <Col xs={24} sm={12} xl={8}>
          <h2>Контакти</h2>
          <List
            dataSource={contacts}
            renderItem={(contact) => (
              <List.Item key={contact.title}>
                <strong>{contact.title}</strong>: {contact.value}
              </List.Item>
            )}
          />
        </Col>
        <Col xs={24} sm={12} xl={8}>
          <h2>Работно време</h2>
          <List
            dataSource={workingHours}
            renderItem={(workingHour) => (
              <List.Item key={workingHour.title}>
                <strong>{workingHour.title}</strong>: {workingHour.value}
              </List.Item>
            )}
          />
        </Col>
        <Col xs={24} sm={12} xl={8}>
          <h2>Социални мрежи</h2>
          <List
            dataSource={socialMedia}
            renderItem={(socialMediaItem) => (
              <List.Item key={socialMediaItem.title}>
                {socialMediaItem.icon}{" "}
                <a href={socialMediaItem.value}>{socialMediaItem.title}</a>
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Copyright © 2024 Tornado Services
      </p>
    </>
  );
};

export default AppFooter;
