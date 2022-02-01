import { makeAutoObservable } from "mobx";
import moment from "moment";

interface ISmiNews {
  title: string;
  iconUrl?: string;
  description: string;
  createdAt: Date;
  url: string;
}

interface IDeveloperRequisites {
  organizationName: string; // Полное название организации
  address: string; // Адрес
  authorizedCapital: string; // Уставной капитал
  okfs: string; // ОКФС
  okopf: string; // ОКОПФ
  okogu: string; // ОКОГУ
  inn: string; // ИНН
  ogrn: string; // ОГРН
  kpp: string; // КПП
  okato: string; // ОКАТО
  okpo: string; // ОКПО
  oktmo: string; // ОКТМО
  companyStatus: string; // Статус компании
  supervisor: string; // Руководители
  founders: string; // Учредители
  enterpriseSize: string; // Размер предприятия
  personalCount: string; // Численность персонала
  filial: string; // Филиалы
  revenue: string; // Выручка
  netProfit: string; // Чистая прибыль
  netAssets: string; // Чистые активы
  stateRegistrationDate: Date; // Сведения о государственной регистрации | Дата регистрации
  registrationObject: string; // Регистрирующий орган
  registrationObjectAddress: string; // Адрес регистрирующего органа
  registrationFileLocated: string; // Регистрирующий орган, в котором находится регистрационное дело
  okved: string; // Основной вид деятельности по ОКВЭД
  additionalActivities: string[]; // Дополнительные виды деятельности
}

interface IStatistic {
  courtCases: number; // Судебные дела
  asAPlaintiff: number; // В качестве истца
  asADefendant: number; // В качестве ответчика
  currentProductions: number; // Текущие производства
  completedProductions: number; // Завершённые производства
  numberOfPurchases: number; // Количество закупок
  allSignificantEvents: number; // Существенные события (За всю историю компании)
  significantEventsOfYear: number; // Существенные события (За текущий год)
  subsidiaries: number; // Дочерние предприятия
  coOwners: number; // Совладельцы
  rentedHouses: number; // Сдано домов
  rentedLS: number; // Сдано ЖК
  underConstructionHouses: number; // Строится домов
  underConstructionLS: number; // Строится ЖК
}

interface IRisk {
  dueDiligenceIndex: string; // Индекс должной осмотрительности
  financialRiskIndex: string; // Индекс финансового риска
  paymentDisciplineIndex: string; // Индекс платежной дисциплины
}

interface ISettings {
  login: string;
  password: string;
  email: string;
  phoneNumbers: string[];
}

interface IIdentify {
  status: "readyToTest"; // Статус идентификации
  documents: {
    name: string;
    format: string;
    url: string;
  }[];
}

export interface IDeveloperProfile {
  id: string;
  name: string;
  type: string;
  address: string;
  phoneNumber: string;
  email: string;
  citeUrl: string;
  description: string;
  avatarUrl: string;
  requisites: IDeveloperRequisites;
  smiNews: ISmiNews[];
  statistic: IStatistic;
  risk: IRisk;
  settings: ISettings;
  identify: IIdentify;
}

const InitialData: null | IDeveloperProfile = {
  id: "",
  name: "",
  type: "",
  address: "",
  phoneNumber: "",
  email: "",
  citeUrl: "",
  description: "",
  avatarUrl: "",
  requisites: {
    organizationName: "",
    address: "",
    authorizedCapital: "",
    okfs: "",
    okopf: "",
    okogu: "",
    inn: "",
    ogrn: "",
    kpp: "",
    okato: "",
    okpo: "",
    oktmo: "",
    companyStatus: "",
    supervisor: "",
    founders: "",
    enterpriseSize: "",
    personalCount: "",
    filial: "",
    revenue: "",
    netProfit: "",
    netAssets: "",
    stateRegistrationDate: moment().toDate(),
    registrationObject: "",
    registrationObjectAddress: "",
    registrationFileLocated: "",
    okved: "",
    additionalActivities: [""],
  },
  smiNews: [
    {
      title: "",
      iconUrl: "",
      description: "",
      createdAt: moment().toDate(),
      url: "",
    },
  ],
  statistic: {
    courtCases: 0,
    asAPlaintiff: 0,
    asADefendant: 0,
    currentProductions: 0,
    completedProductions: 0,
    numberOfPurchases: 0,
    allSignificantEvents: 0,
    significantEventsOfYear: 0,
    subsidiaries: 0,
    coOwners: 0,
    rentedHouses: 0,
    rentedLS: 0,
    underConstructionHouses: 0,
    underConstructionLS: 0,
  },
  risk: {
    dueDiligenceIndex: "",
    financialRiskIndex: "",
    paymentDisciplineIndex: "",
  },
  settings: {
    login: "",
    password: "",
    email: "",
    phoneNumbers: [""],
  },
  identify: {
    status: "readyToTest",
    documents: [
      {
        name: "",
        format: "",
        url: "",
      },
    ],
  },
};

class DeveloperProfile {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  profileData: null | IDeveloperProfile = null;

  loadProfileInfo: () => void = async () => {
    this.loaded = true;
    this.errorOnLoad = false;
    this.profileData = InitialData;
  };
}

export const DeveloperProfileStore = new DeveloperProfile();
