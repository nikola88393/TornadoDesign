import styled from "styled-components";
import propTypes from "prop-types";

//container for sizing each section individually
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 20px;
  margin: 50px 0;
  @media (max-width: 768px) {
    margin: 100px 0;
  }
`;

const SectionContainer = ({
  viewHeight,
  maxHeight,
  title,
  children,
  id,
  className,
  style,
}) => {
  return (
    <Container
      className={className}
      id={id}
      style={{ ...style, minHeight: `min(${viewHeight}vh, ${maxHeight}px)` }}
    >
      {title && (
        <h1 style={{ fontWeight: 700, textAlign: "center" }}>
          {title.toUpperCase()}
        </h1>
      )}
      {children}
    </Container>
  );
};

SectionContainer.propTypes = {
  viewHeight: propTypes.number.isRequired,
  maxHeight: propTypes.number.isRequired,
  title: propTypes.string,
  children: propTypes.node,
  id: propTypes.string,
  className: propTypes.string,
  style: propTypes.object,
};

export default SectionContainer;
