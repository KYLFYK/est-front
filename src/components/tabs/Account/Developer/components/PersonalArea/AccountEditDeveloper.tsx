import React, { FC, useState } from "react";
import Image from "next/image";
import { Modal } from "src/components/shared/Modal/Modal";
import { observer } from "mobx-react-lite";
import BackPage from "../../../Agent/components/Others/BackPage/BackPage";
import Typography from "../../../../../shared/Typography/Typography";
import css from "./AccountEditDeveloper.module.scss";
import { BaseInput } from "../../../../../shared/BaseInput/Input";
import { myLoader } from "../../../../../../utils/image/image";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";
import { LogoIcon } from "../../../../../../icons/Header/LogoIcon";
import importImage from "./ImportImage.svg";
import { useStoreDeveloperCabinet } from "../../../../../../mobx/role/developer/cabinet/DeveloperCabinet";
import { BaseTextarea } from "../../../../../shared/BaseTextarea/BaseTextarea";
import { AvatarSection } from "../../../../../shared/AvatarSection";
import { Dashed } from "../../../../../../icons/Dashed/dashed";

export type infoDeveloperType = {
  name: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  site: string;
  description: string;
};

type AccountEditType = {
  onEdit: (tabId: number) => void;
  // infoAgency:infoAgentType
};

const image =
  "data:image/svg+xml;utf8,<svg width='100%' height='100%' " +
  "xmlns='http://www.w3.org/2000/svg'><rect width='240px' height='240px' rx='6px'" +
  " style='fill: none; stroke: rgb(26, 72, 98); stroke-width: 1; stroke-dasharray: 9 9'/></svg>";

const AccountEditDeveloper: FC<AccountEditType> = observer(({ onEdit }) => {
  const store = useStoreDeveloperCabinet();

  const infoAgency = {
    name: store.initialData.account.profileForm.name,
    type: store.initialData.account.profileForm.type,
    address: store.initialData.account.profileForm.address,
    phone: store.initialData.account.profileForm.phone,
    email: store.initialData.account.profileForm.email,
    site: store.initialData.account.profileForm.site,
    description: store.initialData.account.profileForm.description,
  };

  const [agentInfo, setAgentInfo] = useState<infoDeveloperType>(infoAgency);

  const [valueName, setValueName] = useState<string>(agentInfo.name);
  const [valueType, setValueType] = useState<string>(agentInfo.type);
  const [valueAddress, setValueAddress] = useState<string>(agentInfo.address);
  const [valuePhone, setValuePhone] = useState<string>(agentInfo.phone);
  const [valueEmail, setValueEmail] = useState<string>(agentInfo.email);
  const [valueSite, setValueSite] = useState<string>(agentInfo.site);
  const [valueDescription, setValueDescription] = useState<string>(
    agentInfo.description
  );

  const [comparison, setComparison] = useState<boolean>(false);

  const backPage = () => {
    if (
      agentInfo.name === valueName &&
      agentInfo.type === valueType &&
      agentInfo.address === valueAddress &&
      agentInfo.phone === valuePhone &&
      agentInfo.email === valueEmail &&
      agentInfo.site === valueSite &&
      agentInfo.description === valueDescription
    ) {
      onEdit(0);
    } else {
      setComparison(true);
    }
  };

  const save = async () => {
    const updateValue = {
      phone: [{ ord: 1, value: valuePhone }],
      name: valueName,
      type: valueType,
      address: valueAddress,
      // "email": valueEmail,
      site: valueSite,
      description: valueDescription,
    };
    await store.updateDeveloper(store.initialData.account.id, updateValue);
    setAgentInfo({
      name: valueName,
      type: valueType,
      address: valueAddress,
      phone: valuePhone,
      email: valueEmail,
      site: valueSite,
      description: valueDescription,
    });
    setTimeout(() => {
      store.fetch();
    }, 100);
  };
  const saveBack = async () => {
    const updateValue = {
      phone: [{ ord: 1, value: valuePhone }],
      name: valueName,
      type: valueType,
      address: valueAddress,
      // "email": valueEmail,
      site: valueSite,
      description: valueDescription,
    };
    await store.updateDeveloper(store.initialData.account.id, updateValue);
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
    store.updateAvatar(data, store.initialData.account.id).then();
  };

  return (
    <div style={{ margin: "20px" }}>
      <BackPage onBackPage={backPage} title={"???????????????????????????? ????????????????"} />
      <div className={css.df_jc}>
        <div>
          <Typography weight={"bold"}>??????????????</Typography>
          <div className={css.df_jc}>
            <div style={{ width: "50vw" }}>
              <div className={css.df}>
                <div className={css.marginColumn} style={{ width: "100%" }}>
                  <Typography color={"tertiary"} className={css.marginTypo}>
                    ???????????????????????? ????????????????
                  </Typography>
                  <BaseInput
                    value={valueName}
                    onChange={(e) => setValueName(e.currentTarget.value)}
                    className={css.styleButton}
                  />
                </div>
                <div className={css.marginColumn} style={{ width: "100%" }}>
                  <Typography color={"tertiary"} className={css.marginTypo}>
                    ?????? ??????????????????????
                  </Typography>
                  <BaseInput
                    disabled={true}
                    // value={valueStatus}
                    placeholder={valueType}
                    onChange={(e) => setValueType(e.currentTarget.value)}
                    className={css.styleButton}
                  />
                </div>
              </div>
              <div
                className={css.marginColumn}
                style={{ width: "98%", marginTop: "20px" }}
              >
                <Typography color={"tertiary"} className={css.marginTypo}>
                  ??????????
                </Typography>
                <BaseInput
                  value={valueAddress}
                  onChange={(e) => setValueAddress(e.currentTarget.value)}
                  className={css.styleButton}
                />
              </div>
              <div className={css.df}>
                <div className={css.marginColumn} style={{ width: "40%" }}>
                  <Typography color={"tertiary"} className={css.marginTypo}>
                    ??????????????
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
                <div className={css.marginColumn} style={{ width: "40%" }}>
                  <Typography color={"tertiary"} className={css.marginTypo}>
                    ????????
                  </Typography>
                  <BaseInput
                    placeholder={"estatum"}
                    value={valueSite}
                    onChange={(e) => setValueSite(e.currentTarget.value)}
                    className={!valueSite ? css.styleButton : ""}
                  />
                </div>
              </div>
              <div>
                <div
                  className={css.marginColumn}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <BaseTextarea
                    classNameWrapper={css.baseTextarea}
                    className={css.baseTextarea}
                    style={{ paddingLeft: "10px" }}
                    placeholder={"????????????????..."}
                    label={"????????????????"}
                    value={valueDescription}
                    onChange={(e) => setValueDescription(e.currentTarget.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Typography weight={"bold"}>??????????????</Typography>
          <div className={css.dashed}>
            <Dashed />
            <div className={css.marginImage}>
              <AvatarSection
                src={importImage}
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
          ??????????????????
        </BaseButton>

        {(agentInfo.name !== valueName ||
          agentInfo.type !== valueType ||
          agentInfo.address !== valueAddress ||
          agentInfo.phone !== valuePhone ||
          agentInfo.email !== valueEmail ||
          agentInfo.site !== valueSite ||
          agentInfo.description !== valueDescription) && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <Typography color={"tertiary"}>
              ???????? ?????????????????????????? ??????????????????
            </Typography>
          </div>
        )}
      </div>
      {
        <Modal setActive={() => setComparison(!comparison)} active={comparison}>
          <div className={css.modal}>
            <LogoIcon />
            <Typography className={css.modalTypo}>
              ?? ???????????????? ???????????????? ???????????????? ?????????????????????????? ??????????????????.???????????????????
            </Typography>
            <BaseButton
              onClick={saveBack}
              isActive
              type={"secondary"}
              className={css.widthButton}
            >
              <Typography weight={"medium"} color={"secondary"}>
                ????, ??????????????????
              </Typography>
            </BaseButton>
            <BaseButton onClick={backPageNoSave} className={css.widthButton}>
              <Typography weight={"medium"}>
                ???? ??????????????????, ???????????????? ????????????????
              </Typography>
            </BaseButton>
          </div>
        </Modal>
      }
    </div>
  );
});

export default AccountEditDeveloper;
