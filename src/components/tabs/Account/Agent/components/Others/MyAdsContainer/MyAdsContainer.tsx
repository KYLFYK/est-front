import React, { FC } from "react";
import { SearchOffice } from "../../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import CardObject from "../../../../../../shared/CardObject/CardObject";
import Typography from "../../../../../../shared/Typography/Typography";
import css from "./Active.module.scss";
import LineV1 from "../../../../../../shared/CardObject/Lines/LineV1";
import LineAddressV1 from "../../../../../../shared/CardObject/Lines/LineAddressV1";
import LineArray from "../../../../../../shared/CardObject/Lines/LineArray";
import { GlassIcon } from "../../../../../../../icons/InputIcon/GlassIcon";
import { IObject } from "../../../../../../../mobx/role/agent/ads/AgentAds";

export const searchColor = (status: string) => {
  switch (status) {
    case "Забронирован":
      return "nude";
    case "Свободна":
      return "green";
    case "Продан":
      return "tertiary";
    case "Архив":
      return "tertiary";
    default:
      return "tertiary";
  }
};
type ActiveType = {
  menu?: "active" | "archive" | "draft";
  objects: IObject[];
};

export type IObjType = "rent" | "sale" | "buy";

export const getObjType: (type: IObjType) => string = (type) => {
  switch (type) {
    case "rent":
      return "Аренда";
    case "sale":
      return "Продажа";
    case "buy":
      return "Покупка";
  }
};

const MyAdsContainer: FC<ActiveType> = ({ menu, objects }) => {
  const recover = (id: string) => {
    console.log(id, "recover");
  };
  const del = (id: string) => {
    console.log(id, "del");
  };
  const edit = (id: string) => {
    console.log(id, "edit");
  };
  const publish = (id: string) => {
    console.log(id, "publish");
  };

  return (
    <div>
      <SearchOffice
        type={menu}
        inputIcon={<GlassIcon />}
        inputIconPlacement={"right"}
        placeholder={"Поиск..."}
        className={`${css.placeholder} ${css.altPadding}`}
      />
      <FilterSearch />
      {objects.length > 0 ? (
        objects.map((home) => (
          <div key={home.id} className={css.borderCard}>
            <CardObject img={home.img.src}>
              <div className={css.paddingCard}>
                <LineV1
                  id={home.id.toString()}
                  onPublish={publish}
                  onRecover={recover}
                  typeMenu={menu}
                  price={home.price}
                  name={home.name}
                  typeObject={getObjType(home.type as IObjType)}
                  type={home.status ? home.status.status : ""}
                  onEdit={edit}
                  onDelete={del}
                />
                <LineAddressV1 address={home.address} />
                <LineArray mainSpecifications={home.mainSpecifications} />
                <div style={{ display: "flex", paddingBottom: "10px" }}>
                  <Typography
                    weight={"light"}
                    color={"tertiary"}
                    className={css.paddingRight_5}
                  >
                    Агент:
                  </Typography>
                  <Typography
                    color={"tertiary"}
                    className={css.paddingRight_20}
                  >
                    {home.agent ? home.agent.email : ""}
                  </Typography>
                  <Typography
                    color={"tertiary"}
                    weight={"light"}
                    className={css.paddingRight_5}
                  >
                    От:
                  </Typography>
                  <Typography
                    color={"tertiary"}
                    className={css.paddingRight_20}
                  >
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
        ))
      ) : (
        <div
          style={{
            marginTop: 40,
          }}
        >
          <Typography
            color={"default"}
            weight={"bold"}
            className={css.paddingRight_5}
          >
            Нет объявлений
          </Typography>
        </div>
      )}
    </div>
  );
};

export default MyAdsContainer;
