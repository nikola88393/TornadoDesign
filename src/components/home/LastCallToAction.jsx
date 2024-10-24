import SectionContainer from "../common/SectionContainer";
import { Anchor, ConfigProvider } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import styled from "styled-components";

const anchorItem = [
  {
    key: 1,
    title: <ArrowUpOutlined className="animated-arrow" />,
    href: "#hero",
  },
];

const StyledAnchor = styled(Anchor)`
  .animated-arrow {
    animation: bounce 2s infinite;
    font-size: 25px;
    color: #1290cb;
    padding: 10px;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px); /* Bouncing up */
    }
    60% {
      transform: translateY(-5px); /* Bouncing down */
    }
  }
`;
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
        <p style={{ textAlign: "center" }}>
          Поръчайте професионално почистване днес и се насладете на чист и свеж
          дом или офис.
        </p>
        <p style={{ textAlign: "center" }}>
          {" "}
          Свържете се с нас сега и вземете своята специална оферта!
        </p>
        {/* using deprecated anchor child because newer methods with 'items' props causes issues;
        use in case newer version jumps to the bottom of the page when scrolling to the top  */}
        {/* <Anchor affix={false}>
          <StyledAnchorLink href="#hero" title="Начало" />
        </Anchor> */}
        <StyledAnchor style={{ fontSize: "30px" }} items={anchorItem} />
      </SectionContainer>
    </ConfigProvider>
  );
};

export default LastCallToAction;
