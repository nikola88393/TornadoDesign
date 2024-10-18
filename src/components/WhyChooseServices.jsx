import { Row, Col, Flex } from "antd";
import arrow from "../assets/arrow-in-the-target.svg";
import styled from "styled-components";

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

const ReasonToChooseContainer = styled(Row)`
  max-width: 1200px;
  display: flex;
`;
const ReasonToChooseNumber = styled.p`
  border-radius: 50%;
  background-color: rgba(18, 144, 203, 0.1);
  color: #1290cb;
  font-size: 17px;
  padding: 5px;
  width: 30px;
  font-weight: 600;
`;
const ReasonToChooseText = styled.p`
  font-size: 17px;
`;
const FlexContainer = styled(Flex)`
  margin-bottom: 30px;
`;
const WhyChooseServices = () => {
  return (
    <>
      <FlexContainer align="center" vertical>
        <img src={arrow} alt="arrow in target icon" />
      </FlexContainer>
      <ReasonToChooseContainer gutter={[32, 32]} align="middle">
        {reasonsToChooseUs.map((reason) => (
          <Col key={reason.number} xs={24} sm={12} md={8}>
            <Flex gap={15} align="center">
              <ReasonToChooseNumber className="reason-to-choose-number">
                {reason.number}
              </ReasonToChooseNumber>
              <ReasonToChooseText className="reason-to-choose-text">
                {reason.text}
              </ReasonToChooseText>
            </Flex>
          </Col>
        ))}
      </ReasonToChooseContainer>
    </>
  );
};

export default WhyChooseServices;
