import { Card, Modal, Row, Col, Button } from "antd";
import { HomeOutlined, CarOutlined, ShopOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Meta } = Card;

const services = [
  {
    title: "Основно почистване",
    description:
      "Почистване на трудно достъпни места. Обезпрашаване, почистване на дограма и прозорци вътрешно (външно ако са достъпни). Основно почистване на кухня, хладилник (ако е празен), фурна, котлони, шкафове външно (вътрешно ако са празни). Почистване на баня - душ, вана, душкабина, тоалетна, фуги и премахване на котлен камък.",
    icon: HomeOutlined,
    key: "basic_cleaning",
  },
  {
    title: "Почистване след ремонт",
    description:
      "Услугата включва премахване на следи от ремонтни дейности, обезпрашаване, почистване на дограми и прозорци, почистване на баня, тоалетна и кухня.",
    icon: HomeOutlined,
    key: "post_renovation_cleaning",
  },
  {
    title: "Пране на мека мебел и килими на място",
    description:
      "Услугата включва машинно пране на мека мебел и килими с безвредни и качествени препарати. След изпиране са нужни между 3 и 8 часа за пълно изсъхване според зависимост от материята и това колко вода поема.",
    icon: CarOutlined,
    key: "upholstery_carpet_cleaning",
  },
  {
    title: "Експресно почистване",
    description:
      "Услугата включва 2 часа обезпрашаване, прахосмукиране, почистване на баня, кухня и мопиране на твърди подови настилки.",
    icon: HomeOutlined,
    key: "express_cleaning",
  },
  {
    title: "Пране на автотапицерия",
    description:
      "Услугата включва пране на седалки, подове и багажник. Освежаване на таблото и подлакътник. Тавани и кори не се перат. Услугата се извършва на ваш адрес или в гаража на Торнадо Сървисиз.",
    icon: CarOutlined,
    key: "car_upholstery_cleaning",
  },
  {
    title: "Полиране на фарове и поставяне на защитно фолио",
    description:
      "Услугата се предлага на ваш адрес или в гаража на Торнадо Сървисиз.",
    icon: CarOutlined,
    key: "headlight_polishing",
  },
  {
    title: "Хамалски услуги, Изхвърляне на боклук, и пренасяне на багаж",
    description:
      "Услугата включва хамалски услуги, изхвърляне на боклук и пренасяне на багаж.",
    icon: ShopOutlined,
    key: "moving_services",
  },
  {
    title: "Градинарски услуги",
    description:
      "Проектиране, изграждане и поддръжка на зелени площи, абонаментна поддръжка на градини и дворове, затревяване с райграс и тревни чимове, засаждане на декоративни дървета, храсти, цветя и жив плет. Подрязване на жив плет, дървета и храсти. Озеленяване на градини, дворове, паркове и тераси. Косене на трева и райграс.",
    icon: ShopOutlined,
    key: "gardening_services",
  },
  {
    title: "Борба с насекоми и вредители",
    description:
      "Услугата включва професионални методи за борба с насекоми и вредители.",
    icon: ShopOutlined,
    key: "pest_control",
  },
];

const CleaningServicesMenu = () => {
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
    <div>
      <Row gutter={[16, 16]}>
        {services.map((service) => (
          <Col xs={24} sm={12} md={8} key={service.key}>
            <Card
              hoverable
              onClick={() => showModal(service)}
              cover={
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <service.icon
                    style={{ fontSize: "48px", color: "#1290cb" }}
                  />
                </div>
              }
            >
              <Meta title={service.title} />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title={selectedService?.title}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Затвори
          </Button>,
        ]}
      >
        <p>{selectedService?.description}</p>
      </Modal>
    </div>
  );
};

export default CleaningServicesMenu;
