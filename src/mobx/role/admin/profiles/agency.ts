import { makeAutoObservable } from "mobx";
import moment from "moment";
import { instance } from "../../../../api/instance";

export type IPlan = "premium" | "standard" | "economy";
export type IPayment = "card" | "cash";
export type IIdentStatus = "readyToIdent";

interface ITariff {
  plan: IPlan;
  autoResume: boolean;
  paymentMethod: IPayment;
  autoPayment: boolean;
}

export interface IPaymentHistory {
  date: Date;
  sum: string | number;
  status: "paid" | "waiting" | "expired";
  notificationDate: Date;
}

interface IDocument {
  name: string;
  format: string;
  url: string;
}

interface IIdentify {
  status: IIdentStatus;
  documents: IDocument[];
}

export interface IAgentProfile {
  id: string;
  agencyName: string;
  status: string;
  avatarUrl?: string;
  experience: string | number;
  agencyEmail: string;
  citeUrl: string;
  description: string;
  login: string;
  password: string;
  email: string;
  phoneNumbers: string[];
  tariff: ITariff;
  paymentHistory: IPaymentHistory[];
  identification: IIdentify;
}

const InitialData: IAgentProfile = {
  id: "",
  agencyName: "DEAL",
  status: "",
  avatarUrl: "",
  experience: "",
  agencyEmail: "",
  citeUrl: "",
  description: "",
  login: "",
  password: "",
  email: "",
  phoneNumbers: [""],
  tariff: {
    plan: "premium",
    autoResume: true,
    paymentMethod: "card",
    autoPayment: true,
  },
  paymentHistory: [
    {
      date: moment().toDate(),
      sum: "1 000 000,00",
      status: "waiting",
      notificationDate: moment().toDate(),
    },
    {
      date: moment().toDate(),
      sum: "1 000 000,00",
      status: "expired",
      notificationDate: moment().toDate(),
    },
    {
      date: moment().toDate(),
      sum: "1 000 000,00",
      status: "paid",
      notificationDate: moment().toDate(),
    },
    {
      date: moment().toDate(),
      sum: "1 000 000,00",
      status: "paid",
      notificationDate: moment().toDate(),
    },
  ],
  identification: {
    status: "readyToIdent",
    documents: [
      {
        name: "???????????????? ???? ?????????????? ???????????????????????? 08.08.2021",
        format: "pdf",
        url: "/",
      },
      {
        name: "?????????????????????????????? ??????????????????????",
        format: "pdf",
        url: "/",
      },
    ],
  },
};

class AgentProfile {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  profile: null | IAgentProfile = null;

  uploadProfile: (id: string) => void = async (id) => {
    try {
      await instance.get(`account/${id}`);
      this.loaded = true;
      this.errorOnLoad = false;
      this.profile = {
        ...InitialData,
      };
      this.profile.id = id;
    } catch (e) {
      console.error("Error profile loading", e);
      this.loaded = false;
      this.errorOnLoad = true;
    }
  };
}

export const AgentProfileStore = new AgentProfile();
