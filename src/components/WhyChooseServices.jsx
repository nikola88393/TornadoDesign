import { Row, Col } from "antd";
import "../styles/WhyChooseServices.css";
import arrow from "../assets/arrow-in-the-target.svg";
const reasonsToChooseUs = [
  {
    number: "01",
    text: "Поставяме клиента на първо място.",
  },
  {
    number: "02",
    text: "Достъпни цени без компромис в качеството на работа.",
  },
  {
    number: "03",
    text: "Персонала ни е подбран и със задължителен предишен опит в услугата, която изпълнява.",
  },
  {
    number: "04",
    text: "Отговаряме на всяко повикване и запитване.",
  },
  {
    number: "05",
    text: "Служителите ни в офиса са на разположение 7дни в седмицата.",
  },
  {
    number: "06",
    text: "Водеща фирма в бранша в България и Великобритания.",
  },
];
const WhyChooseServices = () => {
  return (
    <>
      <div className="title-container">
        <h1 className="reasons-to-choose-title">Защо да изберете нас?</h1>
        <img
          className="reasons-title-icon"
          src={arrow}
          alt="arrow in target icon"
        />
      </div>
      <Row
        className="reasons-to-choose-container"
        gutter={[32, 32]}
        align="middle"
      >
        {reasonsToChooseUs.map((reason) => (
          <Col
            className="reason-container"
            key={reason.number}
            xs={24}
            sm={12}
            md={8}
          >
            <p className="reason-to-choose-number">{reason.number}</p>
            <p className="reason-to-choose-text">{reason.text}</p>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default WhyChooseServices;