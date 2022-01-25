import React, { FC, useEffect } from "react";
import { PageFilter } from "../../common/PageFilter";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import { AdItem } from "./AdItem";
import { AgenciesAdsStore } from "../../../../../../../mobx/role/admin/ads/agencies";
import { observer } from "mobx-react-lite";
import moment from "moment";

import styles from "./AgencyTab.module.scss";

export const AgencyTab: FC = observer(() => {
  const { loaded, errorOnLoad, list, uploadList } = AgenciesAdsStore;

  useEffect(() => {
    if (!loaded && !errorOnLoad) {
      uploadList();
    }
  }, [loaded, errorOnLoad, uploadList]);

  return list !== null ? (
    <div className={styles.wrapper}>
      <PageFilter buttonText={"Добавить объект"} />
      <FilterSearch />
      <div className={styles.list}>
        {list.map((object, index) => {
          const textButton =
            object.published && !object.archived
              ? undefined
              : object.archived
              ? "Восстановить"
              : "Опубликовать";

          const headerElems = [
            {
              key: "Агент:",
              value: object.agentFullName,
            },
          ];

          const footerMainElems: {
            key: string;
            value: string | number;
          }[] = [
            {
              key: "Цена",
              value: object.price,
            },
            {
              key: "Тип объекта",
              value: object.objectType,
            },
          ];

          if (object.archived && object.archivedAt) {
            headerElems.push({
              key: "В архиве с:",
              value: moment(object.archivedAt).format("DD.MM.YYYY"),
            });
          } else if (object.published && object.createAt) {
            headerElems.push({
              key: "Дата публикации:",
              value: moment(object.createAt).format("DD.MM.YYYY"),
            });
          } else {
            headerElems.push({
              key: "Изменено:",
              value: moment(object.editAt).format("DD.MM.YYYY"),
            });
          }

          object.livingYardage !== null &&
            footerMainElems.push({
              key: "Жилая площадь",
              value: `${object.livingYardage} м²`,
            });
          object.numberOfStoreys !== null &&
            footerMainElems.push({
              key: "Этажность",
              value: `${object.numberOfStoreys} этажа`,
            });
          object.haveSwimmingPool !== null &&
            footerMainElems.push({
              key: "Бассейн",
              value: object.haveSwimmingPool ? "Есть" : "Нет",
            });
          object.garage !== null &&
            footerMainElems.push({
              key: "Гараж",
              value: object.garage
                ? typeof object.garage === "boolean"
                  ? "Есть"
                  : `${object.garage} м²`
                : "Нет",
            });
          object.terrace !== null &&
            footerMainElems.push({
              key: "Терраса",
              value: object.terrace
                ? typeof object.terrace === "boolean"
                  ? ""
                  : `${object.terrace} м²`
                : "Нет",
            });
          object.communications !== null &&
            footerMainElems.push({
              key: "Коммуникации",
              value: object.communications ? "Есть" : "Нет",
            });
          object.buildings !== null &&
            footerMainElems.push({
              key: "Строения",
              value: object.buildings ? "Есть" : "Нет",
            });
          object.areaStatus !== null &&
            footerMainElems.push({
              key: "Статус",
              value: object.areaStatus,
            });
          object.houseType !== null &&
            footerMainElems.push({
              key: "Тип дома",
              value: object.houseType,
            });
          object.numberOfStoreysOfHouse !== null &&
            object.storeysOfHouse !== null &&
            footerMainElems.push({
              key: "Этаж",
              value: `${object.storeysOfHouse}/${object.numberOfStoreysOfHouse}`,
            });
          object.resComplexName !== null &&
            footerMainElems.push({
              key: "ЖК",
              value: "Знаменский",
            });
          object.roomsCount !== null &&
            footerMainElems.push({
              key: "Комнат",
              value: object.roomsCount,
            });
          object.yardage !== null &&
            footerMainElems.push({
              key: "Площадь",
              value: `${object.yardage} соток`,
            });

          return (
            <AdItem
              name={object.name}
              address={object.address}
              textButton={textButton}
              headerElems={headerElems}
              footerMainElems={footerMainElems}
              key={index}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <>Loading</>
  );
});
