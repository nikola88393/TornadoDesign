import { Button, DatePicker, Form, TreeSelect, Select } from "antd";

const services = [
  { label: "Основно почистване", value: "deep_cleaning" },
  { label: "Почистване след ремонт", value: "post_renovation_cleaning" },
  {
    label: "Пране на мека мебел и килими на място",
    value: "upholstery_and_rug_cleaning",
  },
  { label: "Експресно почистване", value: "express_cleaning" },
  { label: "Пране на автотапицерия", value: "car_upholstery_cleaning" },
  {
    label: "Полиране на фарове и поставяне на защитно фолио",
    value: "headlight_polishing",
  },
  { label: "Хамалски услуги", value: "moving_services" },
  { label: "Изхвърляне на боклук", value: "junk_removal" },
  { label: "Пренасяне на багаж", value: "luggage_transport" },
  { label: "Градинарски услуги", value: "gardening_services" },
  { label: "Борба с насекоми и вредители", value: "pest_control" },
];
const countries = [
  {
    title: "Sofia",
    value: "sofia",
    children: [
      { title: "Lozenets", value: "lozenets" },
      { title: "Mladost", value: "mladost" },
      { title: "Vitosha", value: "vitosha" },
      { title: "Oborishte", value: "oborishte" },
      { title: "Lyulin", value: "lyulin" },
      { title: "Krasno Selo", value: "krasno_selo" },
    ],
  },
  {
    title: "Plovdiv",
    value: "plovdiv",
    children: [
      { title: "Kapana", value: "kapana" },
      { title: "Trakia", value: "trakia" },
      { title: "Smirnenski", value: "smirnenski" },
      { title: "Kyuchuk Paris", value: "kyuchuk_paris" },
      { title: "Central District", value: "central_district" },
      { title: "Ostromila", value: "ostromila" },
    ],
  },
  {
    title: "Varna",
    value: "varna",
    children: [
      { title: "Asparuhovo", value: "asparuhovo" },
      { title: "Levski", value: "levski" },
      { title: "Briz", value: "briz" },
      { title: "Mladost", value: "mladost" },
      { title: "Vazrazhdane", value: "vazrazhdane" },
      { title: "Galata", value: "galata" },
    ],
  },
];
const OrderService = () => {
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      size="large"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Локация">
        <TreeSelect treeData={countries} />
      </Form.Item>
      <Form.Item label="Дата">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Услуга">
        <Select
          style={{
            width: 350,
          }}
          options={services}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Запиши</Button>
      </Form.Item>
    </Form>
  );
};
export default OrderService;
