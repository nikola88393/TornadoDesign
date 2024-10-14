import { Table, Tabs } from "antd";

const { TabPane } = Tabs;

// Define columns for all the tables
const columns = [
  {
    title: "Услуга",
    dataIndex: "service",
    key: "service",
  },
  {
    title: "Цена",
    dataIndex: "price",
    key: "price",
  },
];

// Data for "Почистване" services
const cleaningServices = [
  {
    key: "1",
    service: "Основно почистване",
    price: "4лв.кв.м - 220лв минимално посещение",
  },
  {
    key: "2",
    service: "Почистване след ремонт",
    price: "5лв.кв.м - 250лв минимално посещение",
  },
  {
    key: "3",
    service: "Пране на мека мебел и килими",
    price: (
      <ul className="list">
        <li>Минимална цена на посещение - 60лв</li>
        <li>Седящо място диван - 11лв</li>
        <li>Фотьойл - 11лв/бр.</li>
        <li>Табуретка - 7лв/бр.</li>
        <li>Стол - 7лв/бр.</li>
        <li>Матрак единичен - 20лв</li>
        <li>Матрак двоен - 25лв</li>
        <li>Килим до 6кв.м - 25лв</li>
        <li>Килим до 12кв.м - 27лв</li>
      </ul>
    ),
  },
];

// Data for "Автомобили" services
const carServices = [
  {
    key: "4",
    service: "Пране на автомобил",
    price: (
      <ul className="list">
        <li>120лв до 5 места</li>
        <li>150лв Мини ван</li>
        <li>100лв Бус</li>
      </ul>
    ),
  },
  {
    key: "5",
    service: "Полиране на фарове на автомобил и поставяне на защитно фолио",
    price: (
      <ul className="list">
        <li>Полиране на фарове в наш гараж - 30лв</li>
        <li>Полиране на фарове на ваш адрес - 40лв</li>
        <li>Поставяне на фолио нисък клас - 60лв</li>
        <li>Поставяне на фолио висок клас - 100лв</li>
      </ul>
    ),
  },
];

// Data for "Други Услуги"
const otherServices = [
  {
    key: "6",
    service: "Хамалски услуги, изхвърляне на боклук, и преместване на багаж",
    price: "Изпратете запитване или се свържете с нас",
  },
  {
    key: "7",
    service: "Градинарски услуги",
    price: "Изпратете запитване или се свържете с нас",
  },
  {
    key: "8",
    service: "Борба с насекоми и вредители",
    price: "Изпратете запитване или се свържете с нас",
  },
];

// Main component rendering tabs and tables
const ServicesTabs = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Почистване" key="1">
          <Table
            scroll
            columns={columns}
            dataSource={cleaningServices}
            pagination={false}
            bordered
          />
        </TabPane>
        <TabPane tab="Автомобили" key="2">
          <Table
            columns={columns}
            dataSource={carServices}
            pagination={false}
            bordered
          />
        </TabPane>
        <TabPane tab="Други Услуги" key="3">
          <Table
            columns={columns}
            dataSource={otherServices}
            pagination={false}
            bordered
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ServicesTabs;
