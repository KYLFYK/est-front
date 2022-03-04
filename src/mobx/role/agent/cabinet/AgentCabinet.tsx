import { createContext, FC, useContext } from "react";
import { makeAutoObservable } from "mobx";
import {
  cabinetAPI,
  UpdateAgentCabinetType,
} from "../../../../api/cabinet/cabinet";
import imgMoc from "../../../../components/tabs/Account/Agent/components/PersonalCabinetTab/AccountInfo/logoFalse.svg";
import { instance } from "../../../../api/instance";

class AgentCabinetStore {
  constructor() {
    makeAutoObservable(this);
  }

  initialData = {
    info: [
      { label: "Имя", value: "", placeholder: "" },
      { label: "Статус", value: "", placeholder: "" },
      { label: "Стаж", value: "", placeholder: "" },
      { label: "Телефон", value: "", placeholder: "" },
      { label: "E-mail", value: "", placeholder: "" },
      { label: "Telegram", value: "", placeholder: "" },
      { label: "WhatsApp", value: "", placeholder: "" },
      { label: "Viber", value: "", placeholder: "" },
    ],
    id: 1,
    img: imgMoc,
    statusVerification: "notConfirmed",
    name: "",
    status: "Agency",
    experience: "Смоленская обл. г.Смоленск",
    phone: "",
    email: "estatum@mail.com",
    telegram: "estatum.com",
    whatsApp: "estatum.com",
    viber: "estatum.com",
    phoneArray: [""],
    loading: true,
    file: [] as {
      fileName: string;
      mimeType: string;
      size: number;
      url: string;
    }[],
  };

  async fetch() {
    const res = await cabinetAPI.getCabinetAgent();

    const name = res.data.agentProperty.name
      ? res.data.agentProperty.name
      : "name";
    const status = res.data.role;
    const experience = res.data.agentProperty.experience
      ? res.data.agentProperty.experience
      : "0";
    const phone = res.data.agentProperty.phone[0].value
      ? res.data.agentProperty.phone[0].value
      : "";
    const email = res.data.email;
    const telegram = res.data.agentProperty.messengers?.telegram
      ? res.data.agentProperty.messengers.telegram
      : "";
    const whatsApp = res.data.agentProperty.messengers?.whatsApp
      ? res.data.agentProperty.messengers.whatsApp
      : "";
    const viber = "viber";

    this.initialData.info = [
      { label: "Имя", value: name, placeholder: "" },
      { label: "Статус", value: status, placeholder: "" },
      { label: "Стаж", value: experience, placeholder: "" },
      { label: "Телефон", value: phone, placeholder: "" },
      { label: "E-mail", value: email, placeholder: "E-mail" },
      { label: "Telegram", value: telegram, placeholder: "estatum" },
      { label: "WhatsApp", value: whatsApp, placeholder: "89996667722" },
      { label: "Viber", value: viber, placeholder: "" },
    ];
    this.initialData.id = res.data.id;
    this.initialData.statusVerification = res.data.isConfirmed
      ? "confirmed"
      : "notConfirmed";

    this.initialData.name = name;
    this.initialData.status = status;
    this.initialData.experience = experience;
    this.initialData.phone = res.data.agentProperty.phone[0].value
      ? res.data.agentProperty.phone[0].value
      : "";
    this.initialData.phoneArray =
      res.data.agentProperty.phone.length > 0
        ? res.data.agentProperty.phone.map((p: any) => p.value)
        : [""];
    this.initialData.email = email;
    this.initialData.telegram = telegram;
    this.initialData.whatsApp = whatsApp;
    this.initialData.viber = viber;
    this.initialData.file = res.data.agentProperty.file;
    this.initialData.loading = false;
  }

  async update(id: number, updateValue: UpdateAgentCabinetType) {
    console.log(id, updateValue);
    await cabinetAPI.updateAgentsCabinet(id, updateValue);
  }

  async updateAvatar(data: FormData) {
    const response = await instance.post(`media/s3-upload`, data, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
      },
    });

    this.initialData.file = [response.data];

    await instance.patch(
      "agent/%7BaccountId%7D",
      {
        file: [response.data],
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
        params: {
          accountId: this.initialData.id,
        },
      }
    );
  }

  get() {
    return JSON.parse(JSON.stringify({ ...this.initialData }))
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
