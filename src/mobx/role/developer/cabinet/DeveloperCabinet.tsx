import { createContext, FC, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { cabinetAPI, CabinetAgentType } from "../../../../api/cabinet/cabinet";
import { instance } from "../../../../api/instance";

class DeveloperCabinetStore {
  constructor() {
    makeAutoObservable(this);
  }

  initialData = {
    account: {
      id: 0,
      src: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
      profileForm: {
        name: "",
        type: "",
        address: "",
        phone: "",
        email: "",
        site: "",
        description: "",
      },
    },
    setting: {
      phoneNumber: "",
      login: "",
      oldPassword: "",
      newPassword: "",
      noticePhone: "",
      noticeEmail: "",
    },
    file: [
      {
        fileName: "2fe95d2797f26d5f6f0b7b63d5604771.jpg",
        mimeType: "image/jpeg",
        size: 707409,
        url: "http://s3.dtln.ru:80/mp-data/2fe95d2797f26d5f6f0b7b63d5604771.jpg",
      },
    ],
    legal: {
      INN: null,
      KPP: null,
      OGRN: null,
      OKATO: null,
      OKFS: null,
      OKOGU: null,
      OKOPF: null,
      OKPO: null,
      OKTMO: null,
      authorizedCapital: null,
      branch: null,
      enterpriseSize: null,
      extraOccupations: null,
      founders: null,
      leaderName: null,
      legalAddress: null,
      legalFullName: null,
      mainOccupation: null,
      netAssets: null,
      netProfit: null,
      numberOfStaff: null,
      registeringAuthorityLocated: null,
      registrationAuthorityAddress: null,
      registrationAuthorityName: null,
      registrationDate: null,
      revenue: null,
      status: null,
    },
    loading: true,
  };

  setlegalfullName(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      legalFullName: value,
    };
  }
  setlegalAddress(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      legalAddress: value,
    };
  }
  setauthorizedCapital(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      authorizedCapital: value,
    };
  }
  setOKFS(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      OKFS: value,
    };
  }
  setOKOPF(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      OKOPF: value,
    };
  }
  setOKOGU(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      OKOGU: value,
    };
  }
  setINN(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      INN: value,
    };
  }
  setOGRN(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      OGRN: value,
    };
  }
  setKPP(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      KPP: value,
    };
  }
  setOKATO(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      OKATO: value,
    };
  }
  setOKPO(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      OKPO: value,
    };
  }
  setOKTMO(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      OKTMO: value,
    };
  }
  setstatus(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      status: value,
    };
  }
  setleaderName(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      leaderName: value,
    };
  }
  setfounders(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      founders: value,
    };
  }
  setenterpriseSize(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      enterpriseSize: value,
    };
  }
  setnumberOfStaff(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      numberOfStaff: value,
    };
  }
  setbranch(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      branch: value,
    };
  }
  setrevenue(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      revenue: value,
    };
  }
  setnetProfit(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      netProfit: value,
    };
  }
  setnetAssets(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      netAssets: value,
    };
  }
  setregistrationDate(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      registrationDate: value,
    };
  }
  setregistrationAuthorityName(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      registrationAuthorityName: value,
    };
  }
  setregistrationAuthorityAddress(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      registrationAuthorityAddress: value,
    };
  }
  setregisteringAuthorityLocated(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      registeringAuthorityLocated: value,
    };
  }
  setmainOccupation(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      mainOccupation: value,
    };
  }
  setextraOccupations(value: any) {
    this.initialData.legal = {
      ...this.initialData.legal,
      extraOccupations: value,
    };
  }

  async fetch() {
    this.initialData.loading = true;
    const res: any = await cabinetAPI.getCabinetDeveloper();
    this.initialData = {
      account: {
        id: res.data.id,
        src: res.data.developerProperty.logo
          ? res.data.developerProperty.logo
          : "http://s3.dtln.ru:80/mp-data/2fe95d2797f26d5f6f0b7b63d5604771.jpg",
        profileForm: {
          name: res.data.developerProperty.name,
          type: res.data.developerProperty.type
            ? res.data.developerProperty.type
            : "",
          address: res.data.developerProperty.address
            ? res.data.developerProperty.address
            : "",
          phone: res.data.developerProperty.phone[0].value
            ? res.data.developerProperty.phone[0].value
            : "",
          email: res.data.email,
          site: res.data.developerProperty.site
            ? res.data.developerProperty.site
            : "",
          description: res.data.developerProperty.description
            ? res.data.developerProperty.description
            : "",
        },
      },
      setting: {
        phoneNumber: res.data.developerProperty.phone[0].value
          ? res.data.developerProperty.phone[0].value
          : "",
        login: res.data.email,
        oldPassword: "",
        newPassword: "",
        noticePhone: res.data.phone,
        noticeEmail: res.data.email,
      },
      file: this.initialData.file,
      legal: {
        INN: res.data.developerProperty.INN,
        KPP: res.data.developerProperty.KPP,
        OGRN: res.data.developerProperty.OGRN,
        OKATO: res.data.developerProperty.OKATO,
        OKFS: res.data.developerProperty.OKFS,
        OKOGU: res.data.developerProperty.OKOGU,
        OKOPF: res.data.developerProperty.OKOPF,
        OKPO: res.data.developerProperty.OKPO,
        OKTMO: res.data.developerProperty.OKTMO,
        authorizedCapital: res.data.developerProperty.authorizedCapital,
        branch: res.data.developerProperty.branch,
        enterpriseSize: res.data.developerProperty.enterpriseSize,
        extraOccupations: res.data.developerProperty.extraOccupations,
        founders: res.data.developerProperty.founders,
        leaderName: res.data.developerProperty.leaderName,
        legalAddress: res.data.developerProperty.legalAddress,
        legalFullName: res.data.developerProperty.legalFullName,
        mainOccupation: res.data.developerProperty.mainOccupation,
        netAssets: res.data.developerProperty.netAssets,
        netProfit: res.data.developerProperty.netProfit,
        numberOfStaff: res.data.developerProperty.numberOfStaff,
        registeringAuthorityLocated:
          res.data.developerProperty.registeringAuthorityLocated,
        registrationAuthorityAddress:
          res.data.developerProperty.registrationAuthorityAddress,
        registrationAuthorityName:
          res.data.developerProperty.registrationAuthorityName,
        registrationDate: res.data.developerProperty.registrationDate,
        revenue: res.data.developerProperty.revenue,
        status: res.data.developerProperty.status,
      },
      loading: false,
    };
  }
  async updateDeveloper(id: number, updateDeveloper: {}) {
    await cabinetAPI.updateDeveloper(id, updateDeveloper);
  }

  async updateAvatar(data: FormData, id: number) {
    const response = await instance.post(`media/s3-upload`, data, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
      },
    });

    // @ts-ignore
    this.initialData.file = [response.data];

    await instance.patch(
      `developer/%7BaccountId%7D?accountId=${id}`,
      {
        logo: response.data.url,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      }
    );
    this.initialData.account.src = response.data.url;
  }

  get() {
    return JSON.parse(JSON.stringify({ ...this.initialData }));
  }
}

const StoreContext = createContext<DeveloperCabinetStore>(
  new DeveloperCabinetStore()
);

const StoreProvider: FC<{ store: DeveloperCabinetStore }> = ({
  children,
  store,
}) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;

const useStoreDeveloperCabinet = () => {
  return useContext(StoreContext);
};

export { DeveloperCabinetStore, StoreProvider, useStoreDeveloperCabinet };
