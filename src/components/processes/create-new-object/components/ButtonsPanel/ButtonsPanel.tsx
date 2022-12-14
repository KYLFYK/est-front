import React from "react";
import NavArrowIcon from "../../../../../icons/NavArrow/NavArrow";
import BaseButton from "../../../../shared/BaseButton/BaseButtons";
import Typography from "../../../../shared/Typography/Typography";

import s from "./ButtonsPanel.module.scss";
import { IEditInfo, IInfoLoaded } from "../../../../../hooks/useEditObject";
import {useRouter} from "next/router";

export interface ICreateObjectControls {
  onPrevTab: () => void;
  onNextTab?: () => void;
  onPublish?: (advertisementId: string) => void;
  onPreview?: () => void;
}

interface Props {
  onPrevTab: () => void;
  onNextTab?: () => void;
  onPublish?: () => void;
  onPreview?: () => void;
  presets?: IEditInfo;
  info?: IInfoLoaded;
}

const ButtonPanel: React.FC<Props> = ({
  children,
  onNextTab,
  onPrevTab,
  onPreview,
  onPublish,
  presets,
  info,
}) => {
  const onNextTab1 = () => {
    onNextTab && onNextTab();
  };

  const router = useRouter()

  return (
    <div className={s.wrapper}>
      <div>{children}</div>
      <div className={s.buttonsBlock}>
        <BaseButton
          buttonHTMLType={"button"}
          iconPosition="start"
          onClick={onPrevTab}
          type="secondary"
          icon={<NavArrowIcon />}
        >
          <Typography size="small"> К предыдущему этапу </Typography>
        </BaseButton>
        <div className={s.buttonsGroup}>
          {onPreview && (!presets || !presets.editMode) && (
              <div style={{cursor:'pointer',display:'flex'}} onClick={()=>router.push('/viewing ')}>
                <Typography color="accent" size="small">
                  Предпросмотр перед публикацией
                </Typography>
              </div>
          )}
          {/*<BaseButton buttonHTMLType={"button"} type="secondary">
            <Typography size="small"> В черновик </Typography>
          </BaseButton>*/}
          {onPublish ? (
            <BaseButton
              buttonHTMLType={"button"}
              type="primary"
              onClick={onPublish}
            >
              <Typography size="small" color="secondary">
                {presets && presets.editMode
                  ? " Сохранить изменения "
                  : " Опубликовать "}
              </Typography>
            </BaseButton>
          ) : (
            <BaseButton
              buttonHTMLType={"button"}
              type="secondary"
              onClick={onNextTab1}
              isActive
              icon={<NavArrowIcon className={s.nextArrow} />}
            >
              <Typography size="small" color="secondary">
                {" "}
                Продолжить{" "}
              </Typography>
            </BaseButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default ButtonPanel;
