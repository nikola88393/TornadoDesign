import { List, FloatButton, ConfigProvider } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import styled from "styled-components";
import SectionContainer from "./common/SectionContainer";
import propTypes from "prop-types";

const FooterTextContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  max-width: 400px;
`;
const FooterMenusContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: #1290cb;
  color: white;
  max-width: 100vw;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const StyledList = styled(List)`
  padding: 0;
  margin: 0;
  color: white;
`;
const StyledListItem = styled(List.Item)`
  .ant-list-item {
    padding: 0;
    margin: 0;
    color: white;
  }
`;
const ListItemHeading = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: white;
`;
const PaymentMethodIcon = ({ src }) => {
  return (
    <img
      src={src}
      alt="Payment method"
      style={{ width: "50px", height: "34.29px" }}
    />
  );
};

PaymentMethodIcon.propTypes = {
  src: propTypes.string.isRequired,
};

const AppFooter = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            List: {
              itemPadding: 0,
              colorText: "#fff",
              colorSplit: "none",
            },
            // Seed Token
          },
        }}
      >
        <div style={{ overflow: "hidden", lineHeight: "0" }}>
          <svg
            viewBox="0 0 1920 80"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", minHeight: "90px" }}
          >
            <path
              d="M0 20C0 20 169.5 0 510 0C850.5 0 1069.5 60 1410 60C1750.5 60 1920 20 1920 20V80H0V20Z"
              fill="#1290cb"
            ></path>
          </svg>
        </div>
        <SectionContainer
          viewHeight={30}
          maxHeight={400}
          style={{
            backgroundColor: "#1290cb",
            color: "white",
            padding: "0 50px 50px 50px",
            margin: "0",
          }}
        >
          <FooterContainer>
            <FooterTextContainer>
              <p>
                Tornado Services е надеждният избор за почистване в София от
                2016 г. Работим с екологични продукти и съвременни техники, за
                да гарантираме безупречна чистота.
              </p>
              <div style={{ width: "30px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#fff"
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                  />
                </svg>
              </div>

              <div>
                <PaymentMethodIcon src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7v0ju2za034-353%3A4566?alt=media&token=ec55f6aa-26ba-4f1c-b994-bba8cd628ea2" />
                <PaymentMethodIcon src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ana4ia1r3ep-353%3A4444?alt=media&token=5e7873ba-6683-4598-af22-9838a34482a8" />
                <PaymentMethodIcon src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nkyjz29hsud-353%3A4479?alt=media&token=c49330a7-29fe-4bc1-8e5d-0cc189265074" />
                <PaymentMethodIcon src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/96x7tic4blg-353%3A4498?alt=media&token=bf26dd9d-afb5-49cc-ab21-4ae68df1996c" />
              </div>

              <p>Copyright © 2024 Tornado Services</p>
            </FooterTextContainer>
            <FooterMenusContainer>
              <StyledList>
                <ListItemHeading>УСЛУГИ</ListItemHeading>
                <StyledListItem>
                  <p>Основно почистване</p>
                </StyledListItem>
                <StyledListItem>
                  <p>Почистване след ремонт</p>
                </StyledListItem>
                <StyledListItem>
                  <p>Пране на мека мебел</p>
                </StyledListItem>
                <StyledListItem>
                  <p>Пране на килими</p>
                </StyledListItem>
              </StyledList>
              <StyledList>
                <ListItemHeading>ЗА КЛИЕНТА</ListItemHeading>
                <StyledListItem>
                  <p>ЧЗВ</p>
                </StyledListItem>
                <StyledListItem>
                  <p>Контакти</p>
                </StyledListItem>
                <StyledListItem>
                  <p>Общи условия</p>
                </StyledListItem>
                <StyledListItem>
                  <p>Политика за поверителност</p>
                </StyledListItem>
              </StyledList>
            </FooterMenusContainer>

            <FloatButton.BackTop duration={700} icon={<ArrowUpOutlined />} />
          </FooterContainer>
        </SectionContainer>
      </ConfigProvider>
    </>
  );
};

export default AppFooter;
