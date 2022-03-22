import { instance } from "../instance";

export enum UrlMainPage {
  accountOur = "auth/me", //get
  account = 'account'
}

export const cabinetAPI = {

  getAccountData: async () => {
    try {
      return await instance.get<any>(`${UrlMainPage.accountOur}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      return e;
    }
  },

  getCabinetDeveloper: async () => {
    try {
      return await instance.get<CabinetAgentType>(`${UrlMainPage.accountOur}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      return e;
    }
  },
  updateDeveloper: async (id: number, updateDeveloper: {}) => {
    try {
      return await instance.patch(
        `/developer/{accountId}?accountId=${id}`,
        updateDeveloper,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
          },
        }
      );
    } catch (e: any) {
      return e;
    }
  },
  getCabinetOwner: async () => {
    try {
      return instance.get<CabinetAgentType>(`${UrlMainPage.accountOur}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      return e;
    }
  },
  getCabinetAgent: async () => {
    try {
      return await instance.get(`${UrlMainPage.accountOur}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      return e;
    }
  },
  getCabinetAgency: async () => {
    try {
      return await instance.get(`${UrlMainPage.accountOur}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      return e;
    }
  },
  updateAgencyCabinet: async (
    id: number,
    updateValue: UpdateAgencyCabinetType
  ) => {
    try {
      await instance.put(`agency/{accountId}?accountId=${id}`, updateValue, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e) {
      return false;
    }
  },
  updateBankCabinet: async (
    id: number,
    updateValue: UpdateAgentCabinetType
  ) => {
    try {
      const res = await instance.patch(`account/${id}`, updateValue, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e) {
      return false;
    }
  },
  updateAgentsCabinet: async (
    id: number,
    updateValue: UpdateAgentCabinetType
  ) => {
    try {
      const res = await instance.patch(`agent/${id}`, updateValue, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e) {
      return false;
    }
  },
};

export type UpdateAgencyCabinetType = {};

export type UpdateAgentCabinetType = {
  phone: Array<{ ord: number; value: string }>;
  name: string;
  experience: string;
  rating: number;
  inviteLink: string;
  file: {
    fileName: string;
    mimeType: string;
    size: number;
    url: string;
  }[];
};

export type CabinetDeveloperType = {
  data: {
    createAt: string;
    customerProperty: { id: boolean; name: string; phone: string };
    email: string;
    id: number;
    isConfirmed: boolean;
    markAsDelete: boolean;
    phone: string;
    role: string;
    updateAt: string;
  };
};

export type CabinetAgentType = {
  data: {
    createAt: string;
    developerProperty: {
      logo:string
      INN: null | number;
      KPP: null | number;
      OGRN: null | number;
      OKATO: null | number;
      OKFS: null | number;
      OKOGU: null | number;
      OKOPF: null | number;
      OKPO: null | number;
      OKTMO: null | number;
      address: null | string;
      authorizedCapital: null | string;
      branch: null | string;
      description: null | string;
      enterpriseSize: null | string;
      extraOccupations: null | string;
      founders: null | string;
      id: 11;
      leaderName: null | string;
      legalAddress: null | string;
      legalFullName: null | string;
      mainOccupation: null | string;
      name: string;
      netAssets: null | string;
      netProfit: null | string;
      numberOfStaff: null | string;
      phone: Array<{ ord: number; value: string }>;
      press: [];
      registeringAuthorityLocated: null | string;
      registrationAuthorityAddress: null | string;
      registrationAuthorityName: null | string;
      registrationDate: null | string;
      revenue: null | string;
      risks: null | string;
      site: null | string;
      statistics: null | string;
      status: null | string;
      type: null | string;
    };
    email: string;
    id: number;
    isConfirmed: boolean;
    markAsDelete: boolean;
    phone: string;
    role: string;
    updateAt: string;
  };
};
