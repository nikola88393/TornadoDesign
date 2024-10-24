import SectionContainer from "../common/SectionContainer";
import { Anchor, ConfigProvider } from "antd";
// import styled from "styled-components";

const anchorItem = [
  {
    key: 1,
    title: "Начало",
    href: "#hero",
  },
];

// const StyledAnchorLink = styled(Anchor.Link)`
//   border: 1px solid red;
//   paddingblock: 10px;
// `;
const LastCallToAction = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          Anchor: {
            // remove underline from anchor and active anchor links
            colorSplit: "none",
            colorPrimary: "none",
            linkPaddingBlock: "10px",
            linkPaddingInline: "20px",
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
        {/* using deprecated anchor child because newer methods with 'items' props causes issues;
        use in case newer version jumps to the bottom of the page when scrolling to the top  */}
        {/* <Anchor affix={false}>
          <StyledAnchorLink href="#hero" title="Начало" />
        </Anchor> */}
        <Anchor items={anchorItem} />
      </SectionContainer>
    </ConfigProvider>
  );
};

export default LastCallToAction;
