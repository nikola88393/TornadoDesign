import { Button, DatePicker, Form, Select, Space } from "antd";
import { useState } from "react";
import styled from "styled-components";
import livingRoomHero from "../assets/living-room-hero.jpg";

// const services = [
//   { label: "Основно почистване", value: "deep_cleaning" },
//   { label: "Почистване след ремонт", value: "post_renovation_cleaning" },
//   {
//     label: "Пране на мека мебел и килими на място",
//     value: "upholstery_and_rug_cleaning",
//   },
//   { label: "Експресно почистване", value: "express_cleaning" },
//   { label: "Пране на автотапицерия", value: "car_upholstery_cleaning" },
//   {
//     label: "Полиране на фарове и поставяне на защитно фолио",
//     value: "headlight_polishing",
//   },
//   { label: "Хамалски услуги", value: "moving_services" },
//   { label: "Изхвърляне на боклук", value: "junk_removal" },
//   { label: "Пренасяне на багаж", value: "luggage_transport" },
//   { label: "Градинарски услуги", value: "gardening_services" },
//   { label: "Борба с насекоми и вредители", value: "pest_control" },
// ];

const servicesTest = [
  {
    label: <span>Основни</span>,
    title: "manager",
    options: [
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
    ],
  },
  {
    label: <span>Допълнителни</span>,
    title: "manager",
    options: [
      { label: "Хамалски услуги", value: "moving_services" },
      { label: "Изхвърляне на боклук", value: "junk_removal" },
      { label: "Пренасяне на багаж", value: "luggage_transport" },
      { label: "Градинарски услуги", value: "gardening_services" },
      { label: "Борба с насекоми и вредители", value: "pest_control" },
    ],
  },
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

// Styled components
const FormContainer = styled(Form)`
  width: 280px;
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled(Select)`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  margin-top: 16px; /* Optional: Add margin for better spacing */
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-image: url(${livingRoomHero});
  background-size: cover;
  background-position: center;
`;
const OrderService = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].value);

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    console.log(value);
  };

  return (
    <HeroContainer>
      <FormContainer layout="vertical" size="large">
        <Form.Item label="Локация">
          <Space.Compact>
            <Form.Item
              name={["address", "city"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "Градът е задължителен",
                },
              ]}
            >
              <StyledSelect
                placeholder="Избери град"
                onChange={handleCountryChange}
                defaultValue={countries[0].value}
              >
                {countries.map((country) => (
                  <Select.Option key={country.value} value={country.value}>
                    {country.title}
                  </Select.Option>
                ))}
              </StyledSelect>
            </Form.Item>
            <Form.Item
              name={["address", "area"]}
              noStyle
              rules={[
                {
                  required: true,
                  message: "Кварталът е задължителен",
                },
              ]}
            >
              <StyledSelect placeholder="Квартал">
                {selectedCountry &&
                  countries
                    .find((country) => country.value === selectedCountry)
                    .children.map((area) => (
                      <Select.Option key={area.value} value={area.value}>
                        {area.title}
                      </Select.Option>
                    ))}
              </StyledSelect>
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        <Form.Item label="Дата">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Услуга">
          <StyledSelect style={{}} options={servicesTest} />
        </Form.Item>
        <Form.Item>
          <SubmitButton type="primary">Запиши</SubmitButton>
        </Form.Item>
      </FormContainer>
    </HeroContainer>
  );
};

export default OrderService;
