import { Button, Form, Select, Space } from "antd";
import { useState } from "react";
import styled from "styled-components";
import livingRoomHero from "../../assets/living-room-hero.jpg";

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
    items: [
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
    items: [
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
    items: [
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
const FormContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 32px;
  border-radius: 8px;
  width: 100%;
  min-height: 100vh;
  backdrop-filter: blur(3px);
`;

const FormContainer = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
const InfoContainer = styled.div`
  display: flex;
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
  color: white;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 700px;
`;

const OpacityLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 16px;
  border-radius: 8px;
`;
const OrderService = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].value);

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    console.log(value);
  };

  return (
    <HeroContainer id="hero">
      <FormContainerWrapper>
        <OpacityLayer>
          <HeroText>
            <h1>
              Бързо и ефективно почистване, което прави вашия дом като нов!
            </h1>
            <p>
              Лесно резервирайте и следете своите поръчки за почистване онлайн –
              включително и за уикенди!
            </p>
          </HeroText>
          <FormContainer
            layout="vertical"
            size="large"
            initialValues={{
              address: {
                city: countries[0].value,
                area: countries[0].items[0].value,
              },
            }}
          >
            <Form.Item label="1. Локация">
              <Space.Compact>
                <Form.Item
                  name={["address", "city"]}
                  noStyle
                  style={{ width: "150px", margin: 0 }}
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
                        .items.map((area) => (
                          <Select.Option key={area.value} value={area.value}>
                            {area.title}
                          </Select.Option>
                        ))}
                  </StyledSelect>
                </Form.Item>
              </Space.Compact>
            </Form.Item>
            <Form.Item label="2. Услуга">
              <StyledSelect options={servicesTest} />
            </Form.Item>
            <Form.Item>
              <SubmitButton type="primary">Запиши</SubmitButton>
            </Form.Item>
          </FormContainer>
          <InfoContainer>
            <div>
              <h2>1 000+</h2>
              <p>Почистени жилища</p>
            </div>
            <div>
              <h2>3 Стъпки</h2>
              <p>Лесна и бърза поръчка</p>
            </div>
            <div>
              <h2>300+</h2>
              <p>Положителни отзива</p>
            </div>
          </InfoContainer>
        </OpacityLayer>
      </FormContainerWrapper>
    </HeroContainer>
  );
};

export default OrderService;
