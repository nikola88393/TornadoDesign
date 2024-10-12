import { Timeline } from "antd";

const WhyChooseServices = () => {
  return (
    <>
      <h1>Защо да изберете нас?</h1>
      <Timeline mode="alternate">
        <Timeline.Item label="01">
          Поставяме клиента на първо място.
        </Timeline.Item>
        <Timeline.Item label="02">
          Достъпни цени без компромис в качеството на рабора.
        </Timeline.Item>
        <Timeline.Item label="03">
          Персонала ни е подбран и със задължителен предишен опит в услугата
          която изпълнява.
        </Timeline.Item>
        <Timeline.Item label="04">
          Отговаряме на всяко повикване и запитване.
        </Timeline.Item>
        <Timeline.Item label="05">
          Служителите ни в офиса са на разположение 7дни в седмицата.
        </Timeline.Item>
        <Timeline.Item label="06">
          Водеща фирма в бранша в България и Великобритания.
        </Timeline.Item>
      </Timeline>
    </>
  );
};

export default WhyChooseServices;
