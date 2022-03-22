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

    const info = store.initialData.info;

    const apiStatus = () => {

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
              {store.initialData.file.length > 0 ? (
                <AvatarSection src={store.initialData.file[0].url} />
              ) : (
                <AvatarSection size={80} src={imgMoc} />
              )}
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
                {statusVerificationTitle(store.get().statusVerification)}
              </Typography>
            </BaseButton>
          </div>
        </div>
        <Typography weight={"bold"} className={css.marginText}>
          Аккаунт
        </Typography>
        <div className={css.df_w}>
          {store.get().info.map((i: {label: string, value: string, placeholder: string}, index: number) => (
            <DataTypography
              key={index}
              title={i.label}
              value={i.value}
              placeholder={i.placeholder}
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
