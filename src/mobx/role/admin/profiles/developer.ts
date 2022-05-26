import { makeAutoObservable } from "mobx";
import { instance } from "../../../../api/instance";

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

interface IDeveloper {
  INN: string;
  KPP: string;
  OGRN: string;
  OKATO: string;
  OKFS: string;
  OKOGU: string;
  OKOPF: string;
  OKPO: string;
  OKTMO: string;
  address: string;
  authorizedCapital: number;
  branch: number;
  completedBuildingAmount: number;
  completedComplexAmount: number;
  description: string;
  enterpriseSize: number;
  founders: string;
  id: number;
  inProgressBuildingAmount: number;
  inProgressComplexAmount: number;
  leaderName: string;
  legalAddress: string;
  legalFullName: string;
  logo: string;
  mainOccupation: string | null;
  name: string;
  netAssets: number;
  netProfit: number;
  numberOfStaff: number;
  registeringAuthorityLocated: string | null;
  registrationAuthorityAddress: string | null;
  registrationAuthorityName: string | null;
  registrationDate: string | null;
  revenue: number;
  risks: null | string;
  site: string | null;
  status: null | string;
  type: string;
  extraOccupations: {
    ord: number;
    value: string;
  }[];
  phone: {
    ord: number;
    value: string;
  }[];
  press: {
    date: string;
    id: number;
    link: string;
    logo: string;
    text: string;
    title: string;
  }[];
  statistics: {
    items: {
      item: string;
      value: number;
    }[];
    title: string;
  }[];
}

interface IResponse {
  createAt: string;
  email: string;
  id: number;
  isConfirmed: boolean;
  markAsDelete: boolean;
  phone: string;
  role: string;
  updateAt: string;
  developerProperty: IDeveloper;
}

class DeveloperProfile {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  profileData: null | IResponse = null;
  developerId: string | null = null;

  loadProfileInfo: (developerId: string) => void = async (developerId) => {
    try {
      const response = await instance.get<IResponse>(
        `developer/${developerId}`
      );
      this.loaded = true;
      this.errorOnLoad = false;
      this.profileData = response.data;
      this.developerId = developerId;
    } catch (e) {
      console.error("Developer loading error", e);
      this.loaded = false;
      this.errorOnLoad = true;
    }
  };

  changeProfileInfo: (data: IDeveloper,id:string) => void = async (data,id:string) => {
    try {
      const response = await instance.patch(
        `developer/${id}`,
        data,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessEstatum')}`
            }
          }
      )

      this.profileData = this.profileData
        ? {
            ...this.profileData,
            developerProperty: data,
          }
        : null;
    } catch (e) {
      console.error("Profile update error", e);
    }
  };
  updateAccount:(accountMenu:any,idAccount:string)=> void = async (accountMenu:any,idAccount:string) => {
    try{
      const response = await instance.patch(
          `developer/{accountId}?accountId=${idAccount}`,
          accountMenu,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessEstatum')}`
            }
          }
      )
      this.loadProfileInfo(idAccount)
    }catch (e){
      console.error("Profile update error", e);
    }
  }
  legalInfo:(legalInfoMenu:any)=> void = async (legalInfoMenu:any) => {
    try{
      const response = await instance.patch(
          `developer/${this.profileData?.id}`,
          legalInfoMenu,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessEstatum')}`
            }
          }
      )
      this.loadProfileInfo(this.profileData?.id.toString()!)
    }catch (e){
      console.error("Profile update error", e);
    }
  }
}

export const DeveloperProfileStore = new DeveloperProfile();


// "name": "Александр1",
//     "type": "Девелоперская1 компания",
//     "address": "str11ing",
//     "site": "https://hilma1.com",
//     "description": "st11ring1",

type delel={

  "phone": [
    {
      "ord": 1,
      "value": "+7(999)999-99-99"
    }
  ],
  "name": "string",
  "type": "Девелоперская компания",
  "logo": "https://hilma.com",
  "address": "string",
  "site": "https://hilma.com",
  "description": "string",
  "legalFullName": "string",
  "legalAddress": "string",
  "authorizedCapital": 0,
  "OKFS": "string",
  "OKOPF": "string",
  "OKOGU": "string",
  "INN": "000000000000",
  "OGRN": "0000000000000",
  "KPP": "000000000",
  "OKATO": "66 000 000 000",
  "OKPO": "0000000000",
  "OKTMO": "00000000000",
  "status": "Действующая",
  "leaderName": "string",
  "founders": "string",
  "enterpriseSize": 0,
  "numberOfStaff": 0,
  "branch": 0,
  "revenue": 0,
  "netProfit": 0,
  "netAssets": 0,
  "registrationDate": "2022-05-20T11:34:56.998Z",
  "registrationAuthorityName": "string",
  "registrationAuthorityAddress": "string",
  "registeringAuthorityLocated": "string",
  "mainOccupation": "Деятельность заказчика-застройщика",
  "extraOccupations": [
    {
      "ord": 1,
      "value": "Подготовка к продаже собственного недвижимого имущества"
    }
  ],
  "statistics": [
    {
      "title": "Арбитражные дела",
      "items": [
        {
          "item": "Судебные дела",
          "value": 15
        }
      ]
    }
  ],
  "risks": [
    {
      "title": "Индекс финансового риска",
      "description": "Оценка вероятности неплатежеспособности компании",
      "value": 0
    }
  ],
  "press": [
    {
      "id": 0,
      "date": "2022-05-20T11:34:56.998Z",
      "text": "string",
      "title": "string",
      "link": "string",
      "logo": "string"
    }
  ],
  "completedComplexAmount": 0,
  "inProgressComplexAmount": 0,
  "completedBuildingAmount": 0,
  "inProgressBuildingAmount": 0,
  "id": 0

}
