import React, { createRef, FC, useEffect, useState } from "react";
import { IObject } from "../../../../../../../mobx/role/agent/ads/AgentAds";
import CardObject from "../../../../../../shared/CardObject/CardObject";
import LineV1 from "../../../../../../shared/CardObject/Lines/LineV1";
import LineAddressV1 from "../../../../../../shared/CardObject/Lines/LineAddressV1";
import LineArray from "../../../../../../shared/CardObject/Lines/LineArray";
import Typography from "../../../../../../shared/Typography/Typography";
import { getObjType, IObjType, searchColor } from "./MyAdsContainer";

import css from "./Active.module.scss";
import { ObjectTypes } from "../../../../../../../utils/interfaces/objects";

interface Props {
  maxCardWidth: number | "unset";
  menu?: "active" | "archive" | "draft";
  home: IObject;
  deleteObject?: (id: number, type: ObjectTypes) => void;
  restoreObject?: (id: number, type: ObjectTypes) => void;
}

export const MyAdsItem: FC<Props> = ({
  maxCardWidth,
  menu,
  home,
  deleteObject,
  restoreObject,
}) => {
  const LineRef = createRef<HTMLDivElement>();

  const recover = () => {
    if (restoreObject) {
      restoreObject(home.id, home.objType);
    }
  };
  const del = () => {
    if (deleteObject) {
      deleteObject(home.id, home.objType);
    }
  };
  const edit = (id: string) => {

  };
  const publish = (id: string) => {

  };

  const [thisGuides, setThisGuides] = useState<string[]>(
    home.mainSpecifications
  );

  useEffect(() => {
    const lineWidth: number | "unset" =
      maxCardWidth !== "unset" ? maxCardWidth - 270 : maxCardWidth;

    if (LineRef.current && lineWidth !== "unset") {
      if (LineRef.current.clientWidth > lineWidth) {
        setThisGuides(
          thisGuides.filter((el, index) => index !== thisGuides.length - 1)
        );
      }
    }
  });

  return (
    <div
      key={home.id}
      className={css.borderCard}
      style={{
        maxWidth: maxCardWidth,
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <CardObject img={home.files[0] ? home.files[0].url : home.img}>
        <div className={css.paddingCard}>
          <LineV1
            id={home.id.toString()}
            onPublish={publish}
            onRecover={recover}
            typeMenu={menu}
            price={home.price}
            name={home.name}
            typeObject={getObjType(home.type as IObjType)}
            type={menu === "archive" ? "Архив" : "Свободна"}
            onEdit={edit}
            onDelete={del}
            enumedType={home.objType}
          />
          <LineAddressV1 address={home.address} />
          <div
            ref={LineRef}
            style={{
              whiteSpace: "nowrap",
              width: "fit-content",
            }}
          >
            <LineArray mainSpecifications={thisGuides} />
          </div>
          <div style={{ display: "flex", paddingBottom: "10px" }}>
            <Typography
              weight={"light"}
              color={"tertiary"}
              className={css.paddingRight_5}
            >
              Агент:
            </Typography>
            <Typography color={"tertiary"} className={css.paddingRight_20}>
              {home.agent ? home.agent.email : ""}
            </Typography>
            <Typography
              color={"tertiary"}
              weight={"light"}
              className={css.paddingRight_5}
            >
              От:
            </Typography>
            <Typography color={"tertiary"} className={css.paddingRight_20}>
              {home.dateStart}
            </Typography>
            <Typography
              color={"tertiary"}
              weight={"light"}
              className={css.paddingRight_5}
            >
              Статус:
            </Typography>
            <Typography
              color={searchColor(home.status ? home.status.status : "")}
              className={css.paddingRight_20}
            >
              {home.status && home.status.status}
            </Typography>
            {home.status && home.status.status === "Забронирован" && (
              <>
                <Typography
                  color={"tertiary"}
                  weight={"light"}
                  className={css.paddingRight_5}
                >
                  До:
                </Typography>
                <Typography color={"tertiary"}>{home.dateEnd}</Typography>
              </>
            )}
          </div>
        </div>
      </CardObject>
    </div>
  );
};
