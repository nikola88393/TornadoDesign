import { Button, Form, Input } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)`
  width: 100%;
`;

const ContactUsForm = () => {
  return (
    <Form className="formContainer">
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Моля, въведете вашето име!" }]}
      >
        <Input size="large" placeholder="Име" />
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: "Моля, въведете вашият телефонен номер!",
          },
        ]}
      >
        <Input size="large" placeholder="Телефон" />
      </Form.Item>
      <Form.Item
        name="message"
        rules={[
          { required: true, message: "Моля, въведете вашето съобщение!" },
        ]}
      >
        <Input.TextArea
          autoSize={{ minRows: 6 }}
          count={10}
          size="large"
          placeholder="Съобщение"
        />
      </Form.Item>
      <Form.Item>
        <StyledButton type="primary" size="large" htmlType="submit">
          Изпрати
        </StyledButton>
      </Form.Item>
    </Form>
  );
};

export default ContactUsForm;
