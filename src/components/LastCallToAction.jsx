import SectionContainer from "./common/SectionContainer";
import styled from "styled-components";
import { Button, Anchor, FloatButton } from "antd";

const heroLink = [
  {
    key: 1,
    title: "НАЧАЛО",
    href: "#hero",
  },
];

const StyledAnchor = styled(Anchor)`
  border: 1px solid #1290cb;
  padding: 10px;
  border-radius: 5px;
`;

const LastCallToAction = () => {
  const scrollToTop = () => {
    // Check if the window or a specific scrollable element is being used
    const scrollableElement = document.querySelector("#aboutUs"); // or use a specific container
    console.log(scrollableElement);
    scrollableElement.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
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
      <Button type="primary" size="large" onClick={scrollToTop}>
        Запази час
      </Button>
      {/* <StyledAnchor direction="horizontal" affix={false} items={heroLink} /> */}
    </SectionContainer>
  );
};

export default LastCallToAction;
