import React, { FC, useState } from "react";
import { PageFilter } from "../../common/PageFilter";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import { AdItem } from "./AdItem";
import { observer } from "mobx-react-lite";
import moment from "moment";
import { AllAdsStore } from "../../../../../../../mobx/role/admin/ads";
import { ObjTypeToRu } from "../../../../Agent/components/Others/MyAdsContainer/MyAdsContainer";
import { typeToRuString } from "../../../../../../../utils/interfaces/objects";

import styles from "./AgencyTab.module.scss";

export const AgencyTab: FC = observer(() => {
  const store = AllAdsStore;
  const [sort, setSort]=useState<string>('default')

  return store.adsList &&
    store.adsList.filter((el) => el.owner.role === "agent").length > 0 ? (
    <div className={styles.wrapper}>
      <PageFilter buttonText={"Добавить объект"} />
      <FilterSearch
          setSort={(e:any)=>{
            setSort(e)
            store.filter(e,"agent")
            }}
            sort={sort}
      />
      <div className={styles.list}>
        {store.adsList
          .filter((el) => el.owner.role === "agent")
          .map((object) => {
            const textButton = object.markAsDelete ? "Восстановить" : undefined;

            const headerElems = [
              {
                key: "Агент:",
                value: object.owner.email,
              },
            ];

            const footerMainElems: {
              key: string;
              value: string | number;
            }[] = [
              {
                key: "Объект",
                value: typeToRuString(object.objType),
              },
              {
                key: "Цена",
                value: object.price,
              },
              {
                key: "Тип объекта",
                value: ObjTypeToRu(object.objectType),
              },
              ...object.guides
                .filter(
                  (el) =>
                    el.subtitle_ru !== null &&
                    el.type_en !== "furniture" &&
                    el.type_en !== "window"
                )
                .map((el) => ({
                  key: el.type_ru,
                  value: el.value,
                })),
            ];

            if (object.markAsDelete) {
              headerElems.push({
                key: "В архиве с:",
                value: moment(object.updateAt).format("DD.MM.YYYY"),
              });
            } else {
              headerElems.push({
                key: "Изменено:",
                value: moment(object.updateAt).format("DD.MM.YYYY"),
              });
            }

            return (
              <AdItem
                name={object.name}
                address={object.address}
                textButton={textButton}
                headerElems={headerElems}
                footerMainElems={footerMainElems}
                key={object.id}
                image={object.files[0] ? object.files[0].url : undefined}
                objId={object.id}
                objType={object.objType}
                markedAsDeleted={object.markAsDelete}
              />
            );
          })}
      </div>
    </div>
  ) : (
    <>Loading</>
  );
});
