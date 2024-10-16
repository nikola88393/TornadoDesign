import { Row, Col } from "antd";
import "../styles/AboutUs.css";
import logo_big from "../assets/tornado_logo_big.png";
import CustomerReviews from "./CustomerReviews";
import WhyChooseServices from "./WhyChooseServices";

const AboutUs = () => {
  return (
    <>
      <WhyChooseServices />
      <Row
        gutter={[16, 32]}
        align="middle"
        justify="center"
        wrap
        style={{ padding: "20px", maxWidth: "1500px", marginTop: "50px" }}
      >
        <Col
          xs={24} // Full width on extra small screens (mobile)
          sm={24} // Full width on small screens (mobile)
          md={12} // Half width on medium screens (tablet)
          lg={10} // Slightly less than half width on large screens (desktop)
        >
          <div className="about-us-content">
            <h1>Кои сме ние?</h1>
            <p style={{ fontSize: "17px", textAlign: "left" }}>
              Ние сме фирма започнала дейността си в сферата на почистването
              през 2016 г. в Лондон. През 2018 г. стъпихме на българския пазар
              под името Торнадо Клийн.От 2020 г. Торнадо Сървисиз сключи 5
              годишен договор с най-голямата австралийска почистваща компания. В
              партньорство с нея Торнадо започна да предлага услуги различни от
              почистването, но пак свързани с нуждите на едно домакинство.
              Успехите зад граница се прехвърлиха и в родината ни и смело се
              утвърждава на пазара, вече не само в Англия, но и в България.
            </p>
          </div>
        </Col>

        <Col
          xs={24} // Full width on extra small screens (mobile)
          sm={24} // Full width on small screens (mobile)
          md={12} // Half width on medium screens (tablet)
          lg={8} // Slightly less than half width on large screens (desktop)
          style={{ textAlign: "center" }} // Center the image on smaller screens
        >
          <img
            style={{
              width: "100%", // Let the image take full width of the column
              maxWidth: "300px", // Limit max size to avoid stretching
              margin: "0 auto", // Center the image on small screens
            }}
            src={logo_big}
            alt="logo"
          />
        </Col>
      </Row>
      <CustomerReviews />
    </>
  );
};

export default AboutUs;
