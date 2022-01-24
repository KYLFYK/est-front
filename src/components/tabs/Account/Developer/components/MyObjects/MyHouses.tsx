import React, { FC } from "react";
import { SearchOffice } from "../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../shared/FilterSearch/FilterSearch";
import LineV1 from "../../../../../shared/CardObject/Lines/LineV1";
import LineAddressV1 from "../../../../../shared/CardObject/Lines/LineAddressV1";
import LineArray from "../../../../../shared/CardObject/Lines/LineArray";
import Typography from "../../../../../shared/Typography/Typography";
import CardObject from "../../../../../shared/CardObject/CardObject";

import styles from "./ResComplexes.module.scss";
import css from "../../../Agent/components/Others/MyAdsContainer/Active.module.scss";
import {useStoreDeveloperMyObjectStore} from "../../../../../../mobx/role/developer/myObject/DeveloperMyObject";

const Data = {
  objects: [
    {
      id: "1902830123",
      img: "https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg",
      type: "Аренда",
      name: "3-этажный коттедж",
      price: "100 000р/mec",
      mainSpecifications: [
        "600м",
        "3 этажа",
        "Бассейн",
        "Гараж 50м2",
        "Терраса 20 m2",
      ],
      agent: "Виталий Панкратов",
      dateStart: "31/08/2021",
      dateEnd: "05/09/21",
      address: "Крым, Ялта",
    },
  ],
};

export const MyHouses: FC = () => {

  const store = useStoreDeveloperMyObjectStore()

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
    <div className={styles.wrapper}>
      <SearchOffice hideButton placeholder={"Поиск"} />
      <FilterSearch className={styles.filter} type="agent" />
      <div className={styles.objectsList}>
        {/*{Data.objects.map((home, index) => (*/}
        {store.initialData.house.map((home, index) => (
          <div className={styles.object} key={index}>
            <CardObject img={home.img}>
              <div className={css.paddingCard}>
                <LineV1
                  id={home.id}
                  onPublish={publish}
                  onRecover={recover}
                  name={home.name}
                  price={home.price}
                  typeObject={home.type}
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
                    {home.agent}
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
                </div>
              </div>
            </CardObject>
          </div>
        ))}
      </div>
    </div>
  );
};
