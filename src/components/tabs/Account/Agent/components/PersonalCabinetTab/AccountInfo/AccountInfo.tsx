// тут описываем горизонтальный подтаб "Аккаунт агенства", который является частью таба "Заявки на просмотр"

import { FC } from "react";
import Typography from "../../../../../../shared/Typography/Typography";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import { observer } from "mobx-react-lite";
import { useStoreAgentCabinet } from "../../../../../../../mobx/role/agent/cabinet/AgentCabinet";
import { AvatarSection } from "../../../../../../shared/AvatarSection";

import css from "./AccountInfo.module.scss";
import imgMoc from "./logoFalse.svg";

type PersonalCabinetAccountInfoType = {
  onEdit: () => void;
};
const statusVerificationTitle = (status: string) => {
  switch (status) {
    case "resend":
      return "Отправьте повторно данные";
    case "waiting":
      return "Ожидает проверки";
    case "confirmed":
      return "Подтверждён";
    case "notConfirmed":
      return "Пройти верификацию";
    default:
      return "Пройти верификацию";
  }
};

const PersonalCabinetAccountInfo: FC<PersonalCabinetAccountInfoType> = observer(
  ({ onEdit }) => {
    const store = useStoreAgentCabinet();

    const statusVerification = store.initialData.statusVerification;
    const info = store.initialData.info;
    const img = store.initialData.img;

    const apiStatus = () => {
      console.log("apiStatus");
    };

    return (
      <div>
        <div className={css.column}>
          <div>
            <Typography weight={"bold"}>Фотография</Typography>
            <div
              style={{
                marginTop: 20,
                marginBottom: 30,
              }}
            >
              <AvatarSection size={80} src={img ? img : imgMoc} />
            </div>
          </div>
          <div className={css.df}>
            <BaseButton
              type={"secondary"}
              className={css.margin}
              onClick={onEdit}
            >
              <Typography size={"small"}>Редактировать аккаунт</Typography>
            </BaseButton>
            <BaseButton
              type={"secondary"}
              isActive
              className={css.margin}
              onClick={apiStatus}
            >
              <Typography size={"small"} color={"secondary"}>
                {statusVerificationTitle(statusVerification)}
              </Typography>
            </BaseButton>
          </div>
        </div>
        <Typography weight={"bold"} className={css.marginText}>
          Аккаунт
        </Typography>
        <div className={css.df_w}>
          {info.map(({ label, value, placeholder }, index) => (
            <DataTypography
              key={index}
              title={label}
              value={value}
              placeholder={placeholder}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default PersonalCabinetAccountInfo;

type DataTypographyType = {
  title: string;
  value: string;
  placeholder: string;
};

const DataTypography: FC<DataTypographyType> = ({ title, value }) => {
  const date = new Date();

  return (
    <div className={css.marginTextBlock}>
      {title === "Стаж" ? (
        <>
          <Typography color={"tertiary"} className={css.marginText}>
            {title}
          </Typography>
          <Typography color={"accent"} className={css.marginText}>
            {+date.toISOString().substr(0, 4) - +value.substr(0, 4)}
          </Typography>
        </>
      ) : (
        <>
          <Typography color={"tertiary"} className={css.marginText}>
            {title}
          </Typography>
          <Typography color={"accent"} className={css.marginText}>
            {value}
          </Typography>
        </>
      )}
    </div>
  );
};
