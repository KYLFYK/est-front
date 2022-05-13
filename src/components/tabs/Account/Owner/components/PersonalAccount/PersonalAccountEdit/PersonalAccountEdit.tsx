import React, { FC, useState } from "react";
import BackPage from "../../../../Agent/components/Others/BackPage/BackPage";
import Typography from "../../../../../../shared/Typography/Typography";
import { BaseInput } from "../../../../../../shared/BaseInput/Input";
import css from "./personalAccountEdit.module.scss";
import { AvatarSection } from "../../../../../../shared/AvatarSection";
import importImage from "../../../../Agent/components/PersonalCabinetTab/AccountEditAgent/ImportImage.svg";
import { observer } from "mobx-react-lite";
import { useStoreOwnerCabinet } from "../../../../../../../mobx/role/owner/cabinet/OwnerCabinet";
import { Modal } from "../../../../../../shared/Modal/Modal";
import { LogoIcon } from "../../../../../../../icons/Header/LogoIcon";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import { Dashed } from "../../../../../../../icons/Dashed/dashed";

type PersonalAccountEditType = {
    onCurrent: (id:number) => void;
};

const PersonalAccountEdit: FC<PersonalAccountEditType> = observer(
  ({ onCurrent }) => {
    const store = useStoreOwnerCabinet();
    const [comparison, setComparison] = useState<boolean>(false);

    const [name, setName] = useState<string>(store.initialData.name);
    const [birthday, setBirthday] = useState<string>(
      store.initialData.dateBirth
    );
    const [phone, setPhone] = useState<string>(store.initialData.phone);
    const [email, setEmail] = useState<string>(store.initialData.email);

    const backPage = () => {
      if (
        store.initialData.name !== name ||
        store.initialData.dateBirth !== birthday ||
        store.initialData.phone !== phone ||
        store.initialData.email !== email
      )
        setComparison(true);
      else {
        onCurrent(0);
      }
    };

    const saveBack = async () => {
      const updateValue = {
        phone: [{ ord: 1, value: phone }],
        name: name,
        email: email,
        birthday: birthday,
      };
      // await store.update(store.initialData.id, updateValue);

      setTimeout(() => {
        store.fetch();
      }, 100);
      setComparison(false);
      onCurrent(0);
    };
    const backPageNoSave = () => {
      setComparison(false);
      onCurrent(0);
    };

    return (
      <div style={{ margin: "12px 28px 20px 30px" }}>
        <BackPage onBackPage={backPage} title={"Редактирование аккаунта"} />
        <div className={css.column}>
          <div style={{ width: "100%", height: "400px" }}>
            <Typography weight={"bold"} className={css.mL_2}>Аккаунт</Typography>
            <div className={css.df} style={{ width: "90%" }}>
              <div className={css.mR_10} style={{ width: "367px" }}>
                <Typography
                    color={"tertiary"}
                    className={css.mB_10}
                >
                    Имя
                </Typography>
                <BaseInput
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </div>
              <div className={css.mR_10} style={{ width: "190px" }}>
                <Typography
                    className={css.mB_10}
                    color={"tertiary"}
                >
                    Дата рождения
                </Typography>
                <BaseInput
                  value={birthday}
                  onChange={(e) => setBirthday(e.currentTarget.value)}
                />
              </div>
            </div>
            <div className={css.df} style={{ width: "90%" }}>
              <div className={css.mR_10} style={{ width: "200px" }}>
                <Typography
                    className={css.mB_10}
                    color={"tertiary"}
                >
                    Телефон
                </Typography>
                <BaseInput
                  value={phone}
                  onChange={(e) => setPhone(e.currentTarget.value)}
                />
              </div>
              <div className={css.mR_10} style={{ width: "262px" }}>
                <Typography
                    className={css.mB_10}
                    color={"tertiary"}
                >
                    E-mail
                </Typography>
                <BaseInput
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </div>
            </div>
          </div>
          <div >
            <Typography weight={"bold"} className={css.pL_2}>Фотография профиля</Typography>
            <div className={css.dashed}>
              <Dashed />
              <div className={css.marginImage}>
                <AvatarSection
                  src={importImage}
                  changeable
                  activeUpload
                  size={200}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={css.buttonSave}>
          <div>
            {store.initialData.name !== name ||
              store.initialData.dateBirth !== birthday ||
              store.initialData.phone !== phone ||
              (store.initialData.email !== email && (
                <Typography color={"tertiary"}>
                  Есть не сохранённые изменения
                </Typography>
              ))}
          </div>
          <BaseButton type={"secondary"} isActive>
            Сохранить
          </BaseButton>
        </div>
        <div>
          {
            <Modal
              setActive={() => setComparison(!comparison)}
              active={comparison}
            >
              <div className={css.modal}>
                <LogoIcon />
                <Typography className={css.modalTypo}>
                  В аккаунте агентсва остались несохраненные
                  изменения.Сохранить?
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
                <BaseButton
                  onClick={backPageNoSave}
                  className={css.widthButton}
                >
                  <Typography weight={"medium"}>
                    Не сохранять, покинуть страницу
                  </Typography>
                </BaseButton>
              </div>
            </Modal>
          }
        </div>
      </div>
    );
  }
);

export default PersonalAccountEdit;
