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

  changeProfileInfo: (data: IDeveloper) => void = async (data) => {
    try {
      const response = await instance.patch(
        `developer/${this.developerId}`,
        data
      );

      console.log(response);

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
}

export const DeveloperProfileStore = new DeveloperProfile();
