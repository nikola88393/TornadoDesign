import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 20px;
  margin: "100px";
`;

const SectionContainer = ({ viewHeight, title, children, id }) => {
  return (
    <Container id={id} style={{ minHeight: `${viewHeight}vh` }}>
      {title && <h1 style={{ fontWeight: 600 }}>{title.toUpperCase()}</h1>}
      {children}
    </Container>
  );
};

SectionContainer.propTypes = {
  viewHeight: propTypes.number,
  title: propTypes.string,
  children: propTypes.node,
  id: propTypes.string,
};
export default SectionContainer;
