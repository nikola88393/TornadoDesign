import SectionContainer from "./common/SectionContainer";
import { Anchor, ConfigProvider } from "antd";

const LastCallToAction = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          Anchor: {
            // remove underline from anchor and active anchor links
            colorSplit: "none",
            colorPrimary: "none",
            padding: "0",
          },
        },
      }}
    >
      <SectionContainer
        title="Не чакайте повече!"
        className="last-call-to-action"
        viewHeight={40}
        maxHeight={500}
      >
        <p>
          Поръчайте професионално почистване днес и се насладете на чист и свеж
          дом или офис.
        </p>
        <p>Свържете се с нас сега и вземете своята специална оферта!</p>
        {/* using deprecated anchor child because newer methods with 'items' props causes issues  */}
        <Anchor affix={false}>
          <Anchor.Link href="#hero" title="Начало"></Anchor.Link>
        </Anchor>
      </SectionContainer>
    </ConfigProvider>
  );
};

export default LastCallToAction;
