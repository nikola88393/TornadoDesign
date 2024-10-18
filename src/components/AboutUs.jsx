import { Row, Col } from "antd";
import styled from "styled-components";
import logo_big from "../assets/tornado_logo_big.png";
import CustomerReviews from "./CustomerReviews";
import WhyChooseServices from "./WhyChooseServices";

const AboutUsContent = styled.div`
  h1 {
    font-size: 24px;
  }

  p {
    font-size: 17px;
    text-align: left;
  }
`;

const StyledRow = styled(Row)`
  padding: 20px;
  max-width: 1500px;
  margin-top: 50px;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  text-align: center;
`;

const AboutUs = () => {
  return (
    <>
      <WhyChooseServices />
      <StyledRow gutter={[16, 32]} align="middle" justify="center" wrap>
        <Col xs={24} sm={24} md={12} lg={10}>
          <AboutUsContent>
            <h1>Кои сме ние?</h1>
            <p>
              Ние сме фирма започнала дейността си в сферата на почистването
              през 2016 г. в Лондон. През 2018 г. стъпихме на българския пазар
              под името Торнадо Клийн. От 2020 г. Торнадо Сървисиз сключи
              5-годишен договор с най-голямата австралийска почистваща компания.
              В партньорство с нея Торнадо започна да предлага услуги различни
              от почистването, но пак свързани с нуждите на едно домакинство.
              Успехите зад граница се прехвърлиха и в родината ни и смело се
              утвърждава на пазара, вече не само в Англия, но и в България.
            </p>
          </AboutUsContent>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} style={{ textAlign: "center" }}>
          <StyledImage src={logo_big} alt="logo" />
        </Col>
      </StyledRow>
      <CustomerReviews />
    </>
  );
};

export default AboutUs;
