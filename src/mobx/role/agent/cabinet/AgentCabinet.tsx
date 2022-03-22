import { createContext, FC, useContext } from "react";
import { makeAutoObservable } from "mobx";
import {
  cabinetAPI,
  UpdateAgentCabinetType,
} from "../../../../api/cabinet/cabinet";
import imgMoc from "../../../../components/tabs/Account/Agent/components/PersonalCabinetTab/AccountInfo/logoFalse.svg";
import { instance } from "../../../../api/instance";
import { AuthApi } from "../../../../api/auth/auth";

class AgentCabinetStore {
  constructor() {
    makeAutoObservable(this);
  }

  initialData = {
    info: [
      { label: "Имя", value: "", placeholder: "" },
      //{ label: "Статус", value: "", placeholder: "" },
      { label: "Стаж", value: "", placeholder: "" },
      { label: "Телефон", value: "", placeholder: "" },
      { label: "E-mail", value: "", placeholder: "" },
      //{ label: "Telegram", value: "", placeholder: "" },
      //{ label: "WhatsApp", value: "", placeholder: "" },
      //{ label: "Viber", value: "", placeholder: "" },
    ],
    setting: {
      newPassword: "",
      email: "",
      phone: "",
    },
    id: 0,
    img: imgMoc,
    statusVerification: "notConfirmed",
    name: "",
    status: "Agency",
    experience: "",
    phone: "",
    email: "estatum@mail.com",
    telegram: "estatum.com",
    whatsApp: "estatum.com",
    viber: "estatum.com",
    phoneArray: [],
    loading: true,
    file: [] as {
      fileName: string;
      mimeType: string;
      size: number;
      url: string;
    }[],
  };

  setsettingsMail(value: any) {
    this.initialData.setting = {
      ...this.initialData.setting,
      email: value,
    };
  }
  setsettingsPassword(value: any) {
    this.initialData.setting = {
      ...this.initialData.setting,
      newPassword: value,
    };
  }
  setsettingsPhone(value: any) {
    this.initialData.setting = {
      ...this.initialData.setting,
      phone: value,
    };
  }

  async fetch() {
    this.initialData.loading = true;
    const res = await cabinetAPI.getCabinetAgent();
    this.initialData = {
      info: [
        {
          label: "Имя",
          value: res.data.agentProperty.name
            ? res.data.agentProperty.name
            : "name",
          placeholder: "",
        },
        //{ label: "Статус", value: res.data.role, placeholder: "" },
        {
          label: "Стаж",
          value: res.data.agentProperty.experience
            ? res.data.agentProperty.experience
            : "0",
          placeholder: "",
        },
        {
          label: "Телефон",
          value: res.data.agentProperty.phone[0].value
            ? res.data.agentProperty.phone[0].value
            : "",
          placeholder: "",
        },
        { label: "E-mail", value: res.data.email, placeholder: "E-mail" },
        /*{
          label: "Telegram",
          value: res.data.agentProperty.messengers?.telegram
            ? res.data.agentProperty.messengers.telegram
            : "",
          placeholder: "estatum",
        },
        {
          label: "WhatsApp",
          value: res.data.agentProperty.messengers?.whatsApp
            ? res.data.agentProperty.messengers.whatsApp
            : "",
          placeholder: "89996667722",
        },
        { label: "Viber", value: "viber", placeholder: "" },*/
      ],
      setting: {
        newPassword: "",
        email: "",
        phone: "",
      },
      id: res.data.id,
      img: imgMoc,
      statusVerification: res.data.isConfirmed ? "confirmed" : "notConfirmed",
      name: res.data.agentProperty.name ? res.data.agentProperty.name : "name",
      status: res.data.role,
      experience: res.data.agentProperty?.experience,
      phone: res.data.agentProperty.phone[0].value
        ? res.data.agentProperty.phone[0].value
        : "",
      email: res.data.email,
      telegram: res.data.agentProperty.messengers?.telegram
        ? res.data.agentProperty.messengers.telegram
        : "",
      whatsApp: res.data.agentProperty.messengers?.whatsApp
        ? res.data.agentProperty.messengers.whatsApp
        : "",
      viber: "viber",
      phoneArray:
        res.data.agentProperty.phone.length > 0
          ? res.data.agentProperty.phone.map((p: any) => p.value)
          : [],
      loading: false,
      file: res.data.agentProperty.file,
    };
  }

  async update(id: number, updateValue: any) {
    await cabinetAPI.updateAgentsCabinet(id, updateValue);
  }

  async updatePass(newPassword: string, accountId: number, token: string) {
    const res = await AuthApi.changePassword(newPassword, accountId, token);
  }

  async updateAvatar(data: FormData, id: number) {
    const response = await instance.post(`media/s3-upload`, data, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
      },
    });

    this.initialData.file = [response.data];

    await instance.patch(
      `agent/${id}`,
      {
        file: [response.data],
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      }
    );
    this.initialData.file = [response.data];
  }

  get() {
    return JSON.parse(JSON.stringify({ ...this.initialData }));
  }
}

const StoreContext = createContext<AgentCabinetStore>(new AgentCabinetStore());

const StoreProvider: FC<{ store: AgentCabinetStore }> = ({
  children,
  store,
}) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;

const useStoreAgentCabinet = () => {
  return useContext(StoreContext);
};

export { AgentCabinetStore, StoreProvider, useStoreAgentCabinet };
