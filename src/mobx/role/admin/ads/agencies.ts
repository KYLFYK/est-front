import { makeAutoObservable } from "mobx";
import moment from "moment";

interface IAdminAgentAd {
  id: string;
  name: string;
  address: string;
  agentFullName: string;
  createAt: Date; // Дата публикации
  editAt: Date | null; // Дата изменения (только для неопубликованных)
  price: string;
  objectType: string; // Тип объекта (Коттедж, Квартира, Участок)
  livingYardage: string | number | null; // Жилая площадь (только для коттеджа или квартиры)
  yardage: string | number | null; // Площадь (только для участка)
  numberOfStoreys: string | number | null; // Кол-во этажей (только для несколькоэтажных квартир и коттеджей)
  numberOfStoreysOfHouse: string | number | null; // Этаж в доме (только для квартир)
  storeysOfHouse: string | number | null; // Всего этажей в доме (только для квартир)
  haveSwimmingPool: boolean | null; // Имеется ли бассейн (только для коттеджей)
  garage: boolean | number | null; // Площадь гаража (если имеется) (только для коттеджей)
  terrace: boolean | number | null; // Площадь террасы (если имеется) (только для коттеджей)
  roomsCount: string | number | null; // Кол-во комнат (только для коттеджа или квартиры)
  resComplexName: string | null; // Название ЖК (только для квартиры)
  houseType: string | null; // Тип дома (Например: кирпичный) (только для квартиры)
  areaStatus: string | null; // Статус участка (Например: ИЖС) (только для участка)
  buildings: boolean | null; // Имеются ли строения (только для участка)
  communications: boolean | null; // Имеются ли коммуникации (только для участка)
  published: boolean; // Опубликовано на сайт или ожидает подтверждения
  archived: boolean; // В архиве
  archivedAt: Date | null; // Дата архивации
}

const initialData: IAdminAgentAd[] = [
  {
    id: "1",
    name: "Аренда, 3-этажный коттедж, 600 м²",
    address: "Крым, Ялта",
    agentFullName: "Виталий Панкратов",
    createAt: moment().toDate(),
    price: "10 000 000",
    objectType: "Коттедж",
    livingYardage: 100,
    numberOfStoreys: 3,
    haveSwimmingPool: true,
    garage: 50,
    terrace: 20,
    published: true,
    archived: false,
    editAt: null,
    communications: null,
    buildings: null,
    areaStatus: null,
    houseType: null,
    archivedAt: null,
    numberOfStoreysOfHouse: null,
    storeysOfHouse: null,
    resComplexName: null,
    roomsCount: null,
    yardage: null,
  },
  {
    id: "2",
    name: "Аренда, 1-комнатная квартира в центре Сочи",
    address: "Сочи, улица Ленина, дом 36",
    agentFullName: "Виталий Панкратов",
    createAt: moment().toDate(),
    price: "15 000 000",
    objectType: "Квартира",
    livingYardage: 100,
    numberOfStoreys: null,
    haveSwimmingPool: null,
    garage: null,
    terrace: null,
    published: false,
    archived: false,
    editAt: moment().toDate(),
    communications: null,
    buildings: null,
    areaStatus: null,
    houseType: "Кирпичный",
    archivedAt: null,
    numberOfStoreysOfHouse: 18,
    storeysOfHouse: 1,
    resComplexName: "Знаменский",
    roomsCount: 1,
    yardage: null,
  },
  {
    id: "3",
    name: "Продажа, Участок в Троицком 30 соток, 600 м²",
    address: "Троицкое, микрорайон Ясная Поляна",
    agentFullName: "Виталий Панкратов",
    createAt: moment().toDate(),
    price: "5 000 000",
    objectType: "Участок",
    livingYardage: null,
    numberOfStoreys: null,
    haveSwimmingPool: null,
    garage: null,
    terrace: null,
    published: false,
    archived: true,
    editAt: moment().toDate(),
    communications: true,
    buildings: false,
    areaStatus: "ИЖС",
    houseType: null,
    archivedAt: moment().toDate(),
    numberOfStoreysOfHouse: null,
    storeysOfHouse: null,
    resComplexName: null,
    roomsCount: null,
    yardage: 30,
  },
];

class Agencies {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  list: IAdminAgentAd[] | null = null;

  uploadList: () => void = () => {
    this.loaded = true;
    this.errorOnLoad = false;
    this.list = initialData;
  };
}

export const AgenciesAdsStore = new Agencies();
