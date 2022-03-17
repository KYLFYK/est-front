import React, { useEffect, useState } from "react";
import ApartmentsIcon from "../../../../icons/ApartmentsIcon/ApartmentsIcon";
import CalendarIcon from "../../../../icons/CalendarIcon/CalendarIcon";
import HouseIcon from "../../../../icons/HouseIcon/HouseIcon";
import KeyIcon from "../../../../icons/KeyIcon/KeyIcon";
import LandIcon from "../../../../icons/LandIcon/LandIcon";
import NavArrowIcon from "../../../../icons/NavArrow/NavArrow";
import TownhouseIcon from "../../../../icons/TownhouseIcon/TownhouseIcon";
import Typography from "../../../shared/Typography/Typography";
import Link from "next/link";
import {
  NewObjectActionTypes,
  ObjectTypes,
} from "../../../../utils/interfaces/objects";
import classNames from "classnames";
import jwt_decode from "jwt-decode";

import s from "./StartScreen.module.scss";

interface Props {
  onChooseAction: (value: NewObjectActionTypes) => void;
  onChooseObjectType: (value: ObjectTypes) => void;
  choosedAction?: NewObjectActionTypes;
  choosedObjectType?: ObjectTypes;
}

const StartScreen: React.FC<Props> = ({
  onChooseAction,
  onChooseObjectType,
  choosedAction,
  choosedObjectType,
}) => {
  const cardClassName = (
    cardValue: NewObjectActionTypes | ObjectTypes,
    choosedValue?: NewObjectActionTypes | ObjectTypes
  ) => {
    return classNames(s.card, { [s.active]: cardValue === choosedValue });
  };

  const [role, setRole] = useState<string | "developer">("");

  useEffect(() => {
    const idOwner: any = jwt_decode(
      localStorage.getItem("accessEstatum")
        ? (localStorage.getItem("accessEstatum") as string)
        : "123"
    );

    setRole(idOwner.role);
  }, []);

  return (
    <div>
      <Link href="/ads">
        <a className={s.link}>
          <Typography weight="medium" icon={<NavArrowIcon />}>
            Новый объект
          </Typography>
        </a>
      </Link>
      <hr color="#F2F2F2" />
      <div className={s.content}>
        <div className={s.row}>
          <Typography weight="medium">
            {role === "developer" ? "Создать ЖК" : "Новый объект"}
          </Typography>

          <div className={s.cardList}>
            {role === "developer" ? (
              <>
                <div
                  className={cardClassName(
                    NewObjectActionTypes.SELL,
                    choosedAction
                  )}
                  onClick={() => {
                    onChooseObjectType(ObjectTypes.RESCOMPLEX);
                    onChooseAction(NewObjectActionTypes.SELL);
                  }}
                >
                  <div className={s.iconBlock}>
                    <KeyIcon />
                  </div>
                  <Typography size="subheaderBig" weight="medium">
                    ЖК
                  </Typography>
                </div>
                {/*<div
                  className={cardClassName(
                    NewObjectActionTypes.RENT,
                    choosedAction
                  )}
                  onClick={() => {
                    onChooseObjectType(ObjectTypes.RESCOMPLEX);
                    onChooseAction(NewObjectActionTypes.SELL);
                  }}
                >
                  <div className={s.iconBlock}>
                    <TownhouseIcon />
                  </div>
                  <Typography size="subheaderBig" weight="medium">
                    Посёлок
                  </Typography>
                </div>*/}
              </>
            ) : (
              <>
                <div
                  className={cardClassName(
                    NewObjectActionTypes.SELL,
                    choosedAction
                  )}
                  onClick={() => onChooseAction(NewObjectActionTypes.SELL)}
                >
                  <div className={s.iconBlock}>
                    <KeyIcon />
                  </div>
                  <Typography size="subheaderBig" weight="medium">
                    Продать
                  </Typography>
                </div>
                <div
                  className={cardClassName(
                    NewObjectActionTypes.RENT,
                    choosedAction
                  )}
                  onClick={() => onChooseAction(NewObjectActionTypes.RENT)}
                >
                  <div className={s.iconBlock}>
                    <CalendarIcon />
                  </div>
                  <Typography size="subheaderBig" weight="medium">
                    Сдать
                  </Typography>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={s.row}>
          <Typography weight="medium">
            {role === "developer"
              ? "Добавить квартиру к объекту"
              : "Выберите тип недвижимости"}
          </Typography>
          <div className={s.cardList}>
            <div
              className={cardClassName(
                ObjectTypes.APARTMENTS,
                choosedObjectType
              )}
              onClick={() => {
                onChooseObjectType(ObjectTypes.APARTMENTS);
                if (role === "developer") {
                  onChooseAction(NewObjectActionTypes.SELL);
                }
              }}
            >
              <div className={s.iconBlock}>
                <ApartmentsIcon />
              </div>
              <Typography size="subheaderBig" weight="medium">
                Квартира
              </Typography>
            </div>
            {role !== "developer" && (
              <>
                <div
                  className={cardClassName(
                    ObjectTypes.HOUSE,
                    choosedObjectType
                  )}
                  onClick={() => onChooseObjectType(ObjectTypes.HOUSE)}
                >
                  <div className={s.iconBlock}>
                    <HouseIcon />
                  </div>
                  <Typography size="subheaderBig" weight="medium">
                    Дом
                  </Typography>
                </div>
                <div
                  className={cardClassName(
                    ObjectTypes.TOWNHOUSE,
                    choosedObjectType
                  )}
                  onClick={() => onChooseObjectType(ObjectTypes.TOWNHOUSE)}
                >
                  <div className={s.iconBlock}>
                    <TownhouseIcon />
                  </div>
                  <Typography size="subheaderBig" weight="medium">
                    Таунхаус
                  </Typography>
                </div>
              </>
            )}
            {/*<div
              className={cardClassName(ObjectTypes.LAND, choosedObjectType)}
              onClick={() => {
                onChooseObjectType(ObjectTypes.LAND);
                if (role === "developer") {
                  onChooseAction(NewObjectActionTypes.SELL);
                }
              }}
            >
              <div className={s.iconBlock}>
                <LandIcon />
              </div>
              <Typography size="subheaderBig" weight="medium">
                Участок
              </Typography>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
