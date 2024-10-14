import { Card, Modal, Button, Flex } from "antd";
import { useState } from "react";

const DotLottieIcon = ({ src }) => {
  return (
    <dotlottie-player
      src={src}
      background="transparent"
      speed="1"
      style={{ width: "150px", height: "150px" }}
      loop
      autoplay
    ></dotlottie-player>
  );
};
const services = [
  {
    title: "Основно почистване",
    description:
      "Почистване на трудно достъпни места. Обезпрашаване, почистване на дограма и прозорци вътрешно (външно ако са достъпни). Основно почистване на кухня, хладилник (ако е празен), фурна, котлони, шкафове външно (вътрешно ако са празни). Почистване на баня - душ, вана, душкабина, тоалетна, фуги и премахване на котлен камък.",
    icon: (
      <DotLottieIcon src="https://lottie.host/eef38f27-d573-4b97-ae10-ab37affaa871/dIVoNxHfer.json" />
    ),
    key: "basic_cleaning",
  },
  {
    title: "Почистване след ремонт",
    description:
      "Услугата включва премахване на следи от ремонтни дейности, обезпрашаване, почистване на дограми и прозорци, почистване на баня, тоалетна и кухня.",
    icon: (
      <DotLottieIcon src="https://lottie.host/c04834fe-0081-45e3-b5fa-b0b99ce04517/afRr9JUimR.json" />
    ),
    key: "post_renovation_cleaning",
  },
  {
    title: "Пране на мека мебел и килими на място",
    description:
      "Услугата включва машинно пране на мека мебел и килими с безвредни и качествени препарати. След изпиране са нужни между 3 и 8 часа за пълно изсъхване според зависимост от материята и това колко вода поема.",
    icon: (
      <DotLottieIcon src="https://lottie.host/9d7b5157-cb43-4333-958c-acbe4967fda0/ROva1Oxomf.json" />
    ),
    key: "upholstery_carpet_cleaning",
  },
  {
    title: "Експресно почистване",
    description:
      "Услугата включва 2 часа обезпрашаване, прахосмукиране, почистване на баня, кухня и мопиране на твърди подови настилки.",
    icon: (
      <DotLottieIcon src="https://lottie.host/22eb5309-4e27-47f4-b612-7b3720f95938/bwKxPA3nUB.json" />
    ),
    key: "express_cleaning",
  },
  {
    title: "Пране на автотапицерия",
    description:
      "Услугата включва пране на седалки, подове и багажник. Освежаване на таблото и подлакътник. Тавани и кори не се перат. Услугата се извършва на ваш адрес или в гаража на Торнадо Сървисиз.",
    icon: (
      <DotLottieIcon src="https://assets5.lottiefiles.com/packages/lf20_tdllc410.json" />
    ),
    key: "car_upholstery_cleaning",
  },
  {
    title: "Грижа за фаровете",
    description:
      "Услугата се предлага на ваш адрес или в гаража на Торнадо Сървисиз.",
    icon: (
      <DotLottieIcon src="https://lottie.host/d29a80c9-694b-4d07-bd52-c8e3b8c2cfd1/KQWFDAVfXz.json" />
    ),
    key: "headlight_polishing",
  },
  {
    title: "Хамалски услуги",
    description:
      "Услугата включва хамалски услуги, изхвърляне на боклук и пренасяне на багаж.",
    icon: (
      <DotLottieIcon src="https://assets3.lottiefiles.com/packages/lf20_7foh1e6l.json" />
    ),
    key: "moving_services",
  },
  {
    title: "Градинарски услуги",
    description:
      "Проектиране, изграждане и поддръжка на зелени площи, абонаментна поддръжка на градини и дворове, затревяване с райграс и тревни чимове, засаждане на декоративни дървета, храсти, цветя и жив плет. Подрязване на жив плет, дървета и храсти. Озеленяване на градини, дворове, паркове и тераси. Косене на трева и райграс.",
    icon: (
      <DotLottieIcon src="https://assets2.lottiefiles.com/packages/lf20_ndCfQl/Flower.json" />
    ),
    key: "gardening_services",
  },
  {
    title: "Борба с насекоми и вредители",
    description:
      "Услугата включва професионални методи за борба с насекоми и вредители.",
    icon: (
      <DotLottieIcon src="https://assets3.lottiefiles.com/packages/lf20_5uHqB6.json" />
    ),
    key: "pest_control",
  },
];

const CleaningServicesCards = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const showModal = (service) => {
    setSelectedService(service);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedService(null);
  };

  return (
    <>
      <Card style={{ maxWidth: "1500px" }}>
        {services.map((service) => (
          <Card.Grid
            className="service-card-grid"
            key={service.key}
            hoverable
            onClick={() => showModal(service)}
            style={{ padding: "10px" }}
          >
            <Flex justify="center" align="center" vertical>
              {service.icon}

              <h2>{service.title}</h2>
              <p style={{ color: "#1290cb" }}>Кликни за подробности</p>
            </Flex>
          </Card.Grid>
        ))}
      </Card>
      <Modal
        title={selectedService?.title}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" danger key="close" onClick={handleCancel}>
            Затвори
          </Button>,
        ]}
      >
        <p>{selectedService?.description}</p>
      </Modal>
    </>
  );
};

export default CleaningServicesCards;
