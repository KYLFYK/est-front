import React, { FC, useState } from "react";
import jwtDecode from "jwt-decode";
import { Modal } from "src/components/shared/Modal/Modal";
import { observer } from "mobx-react-lite";
import BackPage from "../../Others/BackPage/BackPage";
import Typography from "../../../../../../shared/Typography/Typography";
import { BaseInput } from "../../../../../../shared/BaseInput/Input";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import { LogoIcon } from "../../../../../../../icons/Header/LogoIcon";
import { useStoreAgentCabinet } from "../../../../../../../mobx/role/agent/cabinet/AgentCabinet";

import styles from "../../../../Admin/components/UsersTab/agency/agency.module.scss";
import css from "./Settings.module.scss";

export type infoDeveloperType = {
  phone: string;
  email: string;
};

type SettingDeveloperType = {
  onEdit: (tabId: number) => void;
};

const image =
  "data:image/svg+xml;utf8,<svg width='100%' height='100%' " +
  "xmlns='http://www.w3.org/2000/svg'><rect width='240px' height='240px' rx='6px'" +
  " style='fill: none; stroke: rgb(26, 72, 98); stroke-width: 1; stroke-dasharray: 9 9'/></svg>";

export const SettingsEditAgent: FC<SettingDeveloperType> = observer(
  ({ onEdit }) => {
    const store = useStoreAgentCabinet();
    const infoAgency = {
      phone: store.get().setting.phone,
      email: store.get().setting.email,
    };
    console.log(store.get())
    const [agentInfo, setAgentInfo] = useState<infoDeveloperType>(infoAgency);
    const [valuePhone, setValuePhone] = useState<string>(agentInfo.phone);
    const [valueEmail, setValueEmail] = useState<string>(agentInfo.email);

    const [comparison, setComparison] = useState<boolean>(false);

    const backPage = () => {
      if (agentInfo.phone === valuePhone && agentInfo.email === valueEmail) {
        onEdit(1);
      } else {
        setComparison(true);
      }
    };
    
    const save = async () => {
      await store.updatePass(
        store.get().setting.newPassword,
        store.get().id,
        localStorage.getItem("accessEstatum") as string
      );
      await store.update(store.get().id, {
        phone: [{"ord": 1, "value": store.get().setting.phone}],
        email: store.get().setting.email,
      });
      await store.fetch()
      onEdit(1);
    };
    const saveBack = async () => {
      setTimeout(() => {
        store.fetch();
      }, 100);
      setComparison(false);
      onEdit(1);
    };
    const backPageNoSave = () => {
      setComparison(false);
      onEdit(1);
    };

    return (
      <div style={{ marginTop: "10px" }}>
        <BackPage onBackPage={backPage} title={"Редактирование настроек"} />
        <div className={css.df_jc}>
            <Typography weight={"bold"}>Данные регистрации</Typography>
            <div>
              <BaseInput
                classNameWrapper={styles.smallWrapper}
                className={styles.small}
                isError={store.get().setting.phone === ''}
                errorLabel="Поле не может быть пустым"
                label="Телефон"
                type="text"
                name={"phoneNumber"}
                value={store.get().setting.phone}
                onChange={(e) => {
                  store.setsettingsPhone(e.target.value);
                }}
              />
              <BaseInput
                classNameWrapper={styles.smallWrapper}
                className={styles.small}
                isError={store.get().setting.email === ''}
                errorLabel="Поле не может быть пустым"
                label="E-mail"
                type="text"
                name={"phoneNumber"}
                value={store.get().setting.email}
                onChange={(e) => {
                  store.setsettingsMail(e.target.value);
                }}
              />
            </div>
            
            {/*<BaseInput
                        classNameWrapper={styles.largeWrapper}
                        className={styles.large}
                        errorLabel=""
                        label="Старый пароль"
                        type="text"
                        name={"phoneNumber"}
                        value={store.get().setting.oldPassword}
                        onChange={(e) => {
                           
                        }}
                    />*/}
            <BaseInput
              classNameWrapper={styles.smallWrapper}
              className={styles.small}
              isError={store.get().setting.newPassword === ''}
              errorLabel="Поле не может быть пустым"
              label="Новый пароль"
              type="text"
              name={"phoneNumber"}
              value={store.get().setting.newPassword}
              onChange={(e) => {
                store.setsettingsPassword(e.target.value);
              }}
            />
        </div>
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            width: "100%",
            flexDirection: "row-reverse",
          }}
        >
          <BaseButton
            type={"secondary"}
            isActive
            className={css.marginButton}
            onClick={save}
          >
            Сохранить
          </BaseButton>

          {(agentInfo.phone !== valuePhone ||
            agentInfo.email !== valueEmail) && (
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
          )}
        </div>
        {
          <Modal
            setActive={() => setComparison(!comparison)}
            active={comparison}
          >
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
  }
);
