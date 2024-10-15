import { Button, Form, Input } from "antd";
import "../styles/ContactUsForm.css";

const ContactUsForm = () => {
  return (
    // <Flex align="center" justify="space-evenly" wrap style={{ width: "100%" }}>
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
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          style={{ width: "100%" }}
        >
          Изпрати
        </Button>
      </Form.Item>
    </Form>
    //   <div>
    //     <img src={contactUsImage} alt="contac us image" />
    //   </div>
    // </Flex>
  );
};

export default ContactUsForm;
