import { FloatButton, ConfigProvider, Anchor, Layout } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import styled from "styled-components";
import SectionContainer from "./SectionContainer";
import propTypes from "prop-types";

const { Footer } = Layout;

const AnchorServicesMenu = [
  {
    key: 1,
    title: "Основно почистване",
    href: "#services",
  },
  {
    key: 2,
    title: "Почистване след ремонт",
    href: "#services",
  },
  {
    key: 3,
    title: "Пране на мека мебел",
    href: "#services",
  },
  {
    key: 4,
    title: "Пране на килими",
    href: "#services",
  },
];

const AnchorInfoMenu = [
  {
    key: 1,
    title: "ЧЗВ",
    href: "#faq",
  },
  {
    key: 2,
    title: "Контакти",
    href: "#contacts",
  },
  {
    key: 3,
    title: "Общи условия",
    href: "#",
  },
  {
    key: 4,
    title: "Политика за поверителност",
    href: "#",
  },
];
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
  margin: 20px 0;
  gap: 20px;
  width: 50%;
  @media (max-width: 950px) {
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
      style={{
        width: "50px",
        height: "34.29px",
      }}
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
            Anchor: {
              colorSplit: "none",
              colorText: "white",
              colorPrimary: "white",
              lineWidthBold: "0",
              padding: "0",
            },
          },
        }}
      >
        <Footer style={{ width: "100%", padding: "0" }}>
          <div
            style={{
              marginBottom: "-2px",
            }}
          >
            <svg
              viewBox="0 0 1920 80"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
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
              padding: "10px 50px 50px 50px",
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
                <div style={{ width: "25px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{
                      transition: "fill 0.3s ease", // Smooth transition for the color
                      fill: "#ffffff", // Initial color
                    }}
                    className="svg-icon-facebook" // Optional class for CSS styling
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                  </svg>
                </div>

                <div style={{ marginLeft: "-4px" }}>
                  <PaymentMethodIcon src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7v0ju2za034-353%3A4566?alt=media&token=ec55f6aa-26ba-4f1c-b994-bba8cd628ea2" />
                  <PaymentMethodIcon src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ana4ia1r3ep-353%3A4444?alt=media&token=5e7873ba-6683-4598-af22-9838a34482a8" />
                  <PaymentMethodIcon src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nkyjz29hsud-353%3A4479?alt=media&token=c49330a7-29fe-4bc1-8e5d-0cc189265074" />
                  <PaymentMethodIcon src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/96x7tic4blg-353%3A4498?alt=media&token=bf26dd9d-afb5-49cc-ab21-4ae68df1996c" />
                </div>

                <p>Copyright © 2024 Tornado Services</p>
              </FooterTextContainer>
              <FooterMenusContainer>
                <div>
                  <ListItemHeading>УСЛУГИ</ListItemHeading>
                  <Anchor direction="vertical" items={AnchorServicesMenu} />
                </div>
                <div>
                  <ListItemHeading>ЗА КЛИЕНТА</ListItemHeading>
                  <Anchor direction="vertical" items={AnchorInfoMenu} />
                </div>
              </FooterMenusContainer>

              <FloatButton.BackTop duration={700} icon={<ArrowUpOutlined />} />
            </FooterContainer>
          </SectionContainer>
        </Footer>
      </ConfigProvider>
    </>
  );
};

export default AppFooter;
