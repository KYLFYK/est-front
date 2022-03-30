import React, { FC, useState } from "react";
import importImage from "./ImportImage.svg";
import css from "./AccountEdit.module.scss";
import BackPage from "../../Others/BackPage/BackPage";
import Typography from "../../../../../../shared/Typography/Typography";
import { BaseInput } from "../../../../../../shared/BaseInput/Input";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import { Modal } from "src/components/shared/Modal/Modal";
import { LogoIcon } from "../../../../../../../icons/Header/LogoIcon";
import { observer } from "mobx-react-lite";
import { useStoreAgentCabinet } from "../../../../../../../mobx/role/agent/cabinet/AgentCabinet";
import { UpdateAgentCabinetType } from "../../../../../../../api/cabinet/cabinet";
import { AvatarSection } from "../../../../../../shared/AvatarSection";
import { Dashed } from "../../../../../../../icons/Dashed/dashed";

export type infoAgentType = {
  name: string;
  experience: string;
  phone: string;
  email: string;
};

type AccountEditType = {
  onEdit: (tabId: number) => void;
  // infoAgency:infoAgentType
};

const AccountEditAgent: FC<AccountEditType> = observer(({ onEdit }) => {
  const store = useStoreAgentCabinet();

  const infoAgency = {
    name: store.initialData.name,
    experience: store.initialData.experience,
    phone: store.initialData.phone,
    email: store.initialData.email,
  };

  const [agentInfo, setAgentInfo] = useState<infoAgentType>(infoAgency); // start years Experience

  // for input date user
  /*const date = new Date();
  const dateReal = date.toISOString().substr(0, 4); // year
  const mountAndDay = agentInfo.experience.substr(5, 5); // save for api ( mountAndDay )
  const yearsExperience = agentInfo.experience.substr(0, 4);*/ const [
    valueName,
    setValueName,
  ] = useState(store.get().name);
  const [valueExperience, setValueExperience] = useState<string>(
    store.get().experience
  );
  const [valuePhone, setValuePhone] = useState(agentInfo.phone);
  const [valueEmail, setValueEmail] = useState(agentInfo.email);

  const [comparison, setComparison] = useState<boolean>(false);
  const backPage = () => {
    if (
      agentInfo.name === valueName &&
      //+dateReal - +yearsExperience === +valueExperience &&
      agentInfo.phone === valuePhone &&
      agentInfo.email === valueEmail
    ) {
      onEdit(0);
    } else {
      setComparison(true);
    }
  };

  const save = async () => {
    const updateValue: UpdateAgentCabinetType = {
      phone: [{ ord: 1, value: valuePhone }],
      name: valueName,
      experience: valueExperience,
      rating: 0,
      inviteLink: "string",
      file: store.initialData.file,
    };

    await store.update(store.initialData.id, updateValue);

    setAgentInfo({
      name: valueName,
      experience: valueExperience,
      phone: valuePhone,
      email: valueEmail,
    });

    store.fetch();
  };

  const saveBack = async () => {
    const updateValue: any = {
      phone: [{ ord: 1, value: valuePhone }],
      name: valueName,

      rating: 0,
      inviteLink: "string",
      file: store.initialData.file,
    };

    await store.update(store.initialData.id, updateValue);

    setTimeout(() => {
      store.fetch();
    }, 100);

    setComparison(false);
    onEdit(0);
  };

  const backPageNoSave = () => {
    setComparison(false);
    onEdit(0);
  };

  const changeAvatar = (data: FormData) => {
    store.updateAvatar(data, store.initialData.id).then();
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <BackPage onBackPage={backPage} title={"Редактирование аккаунта"} />
      <div className={css.df_jc}>
        <div>
          <Typography weight={"bold"}>Аккаунт</Typography>
          <div className={css.df_jc}>
            <div style={{ width: "50vw" }}>
              <div className={css.df}>
                <div className={css.marginColumn} style={{ width: "80%" }}>
                  <Typography color={"tertiary"} className={css.marginTypo}>
                    Имя
                  </Typography>
                  <BaseInput
                    value={valueName}
                    onChange={(e) => setValueName(e.currentTarget.value)}
                    className={css.styleButton}
                  />
                </div>
                <div className={css.marginColumn} style={{ width: "40%" }}>
                  <Typography color={"tertiary"} className={css.marginTypo}>
                    Стаж
                  </Typography>
                  <BaseInput
                    value={valueExperience}
                    type={"date"}
                    onChange={(e) => {
                      setValueExperience(e.target.value);
                    }}
                    className={css.styleButton}
                  />
                </div>
              </div>
              <div className={css.df}>
                <div className={css.marginColumn} style={{ width: "25%" }}>
                  <Typography color={"tertiary"} className={css.marginTypo}>
                    Телефон
                  </Typography>
                  <BaseInput
                    value={valuePhone}
                    onChange={(e) => setValuePhone(e.currentTarget.value)}
                    className={css.styleButton}
                  />
                </div>
                <div className={css.marginColumn} style={{ width: "40%" }}>
                  <Typography color={"tertiary"} className={css.marginTypo}>
                    E-mail
                  </Typography>
                  <BaseInput
                    disabled={true}
                    // value={valueEmail}
                    placeholder={valueEmail}
                    onChange={(e) => setValueEmail(e.currentTarget.value)}
                    className={css.styleButton}
                  />
                </div>
              </div>
              <div className={css.df}></div>
            </div>
          </div>
        </div>
        <div>
          <Typography weight={"bold"}>Фотография</Typography>
          <div className={css.dashed}>
            <Dashed />
            <div className={css.marginImage}>
              <AvatarSection
                src={
                  store.initialData.file && store.initialData.file[0]
                    ? store.initialData.file[0].url
                    : importImage
                }
                onChange={changeAvatar}
                changeable
                activeUpload
                size={200}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", width: "100%", flexDirection: "row-reverse" }}
      >
        <BaseButton
          type={"secondary"}
          isActive
          className={css.marginButton}
          onClick={save}
        >
          Сохранить
        </BaseButton>
        {agentInfo.name !== valueName ||
          //+dateReal - +yearsExperience !== +valueExperience ||
          agentInfo.phone !== valuePhone ||
          (agentInfo.email !== valueEmail && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <Typography color={"tertiary"}>
                Есть несохраненные изменения
              </Typography>
            </div>
          ))}
      </div>
      {
        <Modal setActive={() => setComparison(!comparison)} active={comparison}>
          <div className={css.modal}>
            <LogoIcon />
            <Typography className={css.modalTypo}>
              В аккаунте агентсва остались несохраненные изменения.Сохранить?
            </Typography>
            <BaseButton
              onClick={saveBack}
              isActive
              type={"secondary"}
              className={css.widthButton}
            >
              <Typography weight={"medium"} color={"secondary"}>
                Да, сохранить
              </Typography>
            </BaseButton>
            <BaseButton onClick={backPageNoSave} className={css.widthButton}>
              <Typography weight={"medium"}>
                Не сохранять, покинуть страницу
              </Typography>
            </BaseButton>
          </div>
        </Modal>
      }
    </div>
  );
});

export default AccountEditAgent;
