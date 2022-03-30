import React, { FC, useState } from "react";
import Typography from "../../../../../../../../../shared/Typography/Typography";
import { BaseInput } from "../../../../../../../../../shared/BaseInput/Input";
import importImage from "./ImportImage.svg";
import BaseButton from "../../../../../../../../../shared/BaseButton/BaseButtons";
import { Modal } from "../../../../../../../../../shared/Modal/Modal";
import { LogoIcon } from "../../../../../../../../../../icons/Header/LogoIcon";
import BackPage from "../../../../../../../Agent/components/Others/BackPage/BackPage";
import css from "./AccountEdit.module.scss";
import { BaseTextarea } from "../../../../../../../../../shared/BaseTextarea/BaseTextarea";
import { observer } from "mobx-react-lite";
import { useStoreAgencyCabinet } from "../../../../../../../../../../mobx/role/agency/cabinet/AgencyCabinet";
import { cabinetAPI } from "../../../../../../../../../../api/cabinet/cabinet";
import { AvatarSection } from "../../../../../../../../../shared/AvatarSection";
import { Dashed } from "../../../../../../../../../../icons/Dashed/dashed";

type AccountEditType = {
  onEdit: () => void;
};

const AccountEditAgency: FC<AccountEditType> = observer(({ onEdit }) => {
  const store = useStoreAgencyCabinet();

  const infoAgency = {
    name: store.initialData.name,
    status: store.initialData.status,
    address: store.initialData.address,
    phone: store.initialData.phone,
    email: store.initialData.email,
    website: store.initialData.website,
    description: store.initialData.description,
  };

  const copyAgency = { ...infoAgency };

  const [valueName, setValueName] = useState(copyAgency.name);
  const [valueStatus, setValueStatus] = useState(copyAgency.status);
  const [valueAddress, setValueAddress] = useState(copyAgency.address);
  const [valuePhone, setValuePhone] = useState(copyAgency.phone);
  const [valueEmail, setValueEmail] = useState(copyAgency.email);
  const [valueWebsite, setValueWebsite] = useState(copyAgency.website);
  const [valueDescription, setValueDescription] = useState(
    copyAgency.description
  );

  const [comparison, setComparison] = useState<boolean>(false);

  const backPage = () => {
    if (
      infoAgency.name === valueName &&
      infoAgency.status === valueStatus &&
      infoAgency.address === valueAddress &&
      infoAgency.phone === valuePhone &&
      infoAgency.email === valueEmail &&
      infoAgency.website === valueWebsite &&
      infoAgency.description === valueDescription
    ) {
      onEdit();
    } else {
      setComparison(true);
    }
  };

  const save = async () => {
    const infoAgency = {
      phone: [
        {
          ord: 1,
          value: valuePhone,
        },
      ],
      name: valueName,
      address: valueAddress,
      site: valueWebsite,
      description: valueDescription,
    };
    await cabinetAPI.updateAgencyCabinet(store.initialData.id, infoAgency);
    await store.fetch();
  };
  const saveBack = async () => {
    const infoAgency = {
      phone: [
        {
          ord: 1,
          value: valuePhone,
        },
      ],
      name: valueName,
      address: valueAddress,
      site: valueWebsite,
      description: valueDescription,
    };
    await cabinetAPI.updateAgencyCabinet(store.initialData.id, infoAgency);
    await store.fetch();
    setComparison(false);
    onEdit();
  };

  const backPageNoSave = () => {
    setComparison(false);
    onEdit();
  };

  const changeAvatar = (data: FormData) => {
    store.updateAvatar(data).then();
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <BackPage
        onBackPage={backPage}
        title={"Редактирование аккаунта агентства"}
      />
      <div className={css.df_jc}>
        <div style={{ width: "100%" }}>
          <Typography weight={"bold"}>Аккаунт</Typography>
          <div className={css.df_jc}>
            <div style={{ width: "50vw" }}>
              <div className={css.df}>
                <div className={css.marginColumn} style={{ width: "60%" }}>
                  <Typography color={"tertiary"} className={css.marginTypo}>
                    Наименование
                  </Typography>
                  <BaseInput
                    value={valueName}
                    onChange={(e) => setValueName(e.currentTarget.value)}
                    className={css.styleButton}
                  />
                </div>
                <div className={css.marginColumn} style={{ width: "60%" }}>
                  <Typography color={"tertiary"} className={css.marginTypo}>
                    Статус
                  </Typography>
                  <BaseInput
                    disabled={true}
                    // value={valueStatus}
                    placeholder={valueStatus}
                    onChange={(e) => setValueStatus(e.currentTarget.value)}
                    className={css.styleInput}
                  />
                </div>
              </div>
              <div className={css.marginColumn}>
                <Typography color={"tertiary"} className={css.marginTypo}>
                  Адрес
                </Typography>
                <BaseInput
                  value={valueAddress}
                  onChange={(e) => setValueAddress(e.currentTarget.value)}
                  className={css.styleButton}
                />
              </div>
              <div className={css.df}>
                <div className={css.marginColumn} style={{ width: "60%" }}>
                  <Typography color={"tertiary"} className={css.marginTypo}>
                    Телефон
                  </Typography>
                  <BaseInput
                    value={valuePhone}
                    onChange={(e) => setValuePhone(e.currentTarget.value)}
                    className={css.styleButton}
                  />
                </div>
                <div className={css.marginColumn} style={{ width: "60%" }}>
                  <Typography color={"tertiary"} className={css.marginTypo}>
                    E-mail
                  </Typography>
                  <BaseInput
                    disabled={true}
                    // value={valueEmail}
                    placeholder={valueEmail}
                    onChange={(e) => setValueEmail(e.currentTarget.value)}
                    className={css.styleInput}
                  />
                </div>
                <div className={css.marginColumn} style={{ width: "60%" }}>
                  <Typography color={"tertiary"} className={css.marginTypo}>
                    Сайт
                  </Typography>
                  <BaseInput
                    value={valueWebsite}
                    onChange={(e) => setValueWebsite(e.currentTarget.value)}
                    className={css.styleButton}
                  />
                </div>
              </div>
              <div className={css.marginColumn}>
                <Typography color={"tertiary"} className={css.marginTypo}>
                  Описание
                </Typography>
                <BaseTextarea
                  value={valueDescription}
                  onChange={(e) => setValueDescription(e.currentTarget.value)}
                  className={css.textArea}
                />
              </div>
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

        {infoAgency.name !== valueName ||
          infoAgency.status !== valueStatus ||
          infoAgency.address !== valueAddress ||
          infoAgency.phone !== valuePhone ||
          infoAgency.email !== valueEmail ||
          infoAgency.website !== valueWebsite ||
          (infoAgency.description !== valueDescription && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
                paddingTop: "20px",
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

export default AccountEditAgency;
