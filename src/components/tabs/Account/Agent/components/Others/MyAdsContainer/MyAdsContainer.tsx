import React, { FC } from "react";
import { SearchOffice } from "../../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import CardObject from "../../../../../../shared/CardObject/CardObject";
import Typography from "../../../../../../shared/Typography/Typography";
import css from "./Active.module.scss";
import LineV1 from "../../../../../../shared/CardObject/Lines/LineV1";
import LineAddressV1 from "../../../../../../shared/CardObject/Lines/LineAddressV1";
import LineArray from "../../../../../../shared/CardObject/Lines/LineArray";
import {GlassIcon} from '../../../../../../../icons/InputIcon/GlassIcon';

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
  objects: Array<{
    id: string;
    img: string;
    type: string;
    name: string;
    price: string;
    mainSpecifications: Array<string>;
    agent: string;
    dateStart: string;
    dateEnd: string;
    status: string;
    address: string;
  }>;
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
      <SearchOffice type={menu} inputIcon={<GlassIcon/>} inputIconPlacement={'right'} placeholder={'Поиск...'} className={`${css.placeholder} ${css.altPadding}`}/>
      <FilterSearch />
      {objects.map((home) => (
        <div key={home.id} className={css.borderCard}>
          <CardObject img={home.img}>
            <div className={css.paddingCard}>
              <LineV1
                id={home.id}
                onPublish={publish}
                onRecover={recover}
                typeMenu={menu}
                price={home.price}
                name={home.name}
                typeObject={home.type}
                type={home.status}
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
                <Typography color={"tertiary"} className={css.paddingRight_20}>
                  {home.agent}
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
                  color={searchColor(home.status)}
                  className={css.paddingRight_20}
                >
                  {home.status}
                </Typography>
                {home.status === "Забронирован" && (
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
      ))}
    </div>
  );
};

export default MyAdsContainer;
