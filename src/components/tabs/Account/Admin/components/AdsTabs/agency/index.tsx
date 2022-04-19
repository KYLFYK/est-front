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
import Typography from "../../../../../../shared/Typography/Typography";
import { statusActiveApi } from "../../../../../../shared/Loader/Loader";

export const AgencyTab: FC = observer(() => {
  const store = AllAdsStore;
  const [sort, setSort] = useState<string>("default");
  const [filterValue, setFilterValue] = useState<string>("");

  let sortedData: any = [];
  if (store.get()) {
    if (sort === "high") {
      sortedData = [
        ...store.get().sort((a: any, b: any) => {
          a.price > b.price ? 1 : -1;
        }),
      ];
    }
    if (sort === "low") {
      sortedData = [
        ...store.get().sort((a: any, b: any) => (a.price < b.price ? 1 : -1)),
      ];
    }
    if (sort === "default") {
      sortedData = [...store.get()];
    }
  }

  const onChangeFilter = (e: any) => {
    setFilterValue(e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <PageFilter
        buttonText={"Добавить объект"}
        value={filterValue}
        onChange={onChangeFilter}
      />
      <FilterSearch
        setSort={(e: any) => {
          setSort(e);
          store.filter(e, "agent");
        }}
        sort={sort}
      />
      <div className={styles.list}>
        {store.adsList !== null && store.adsList.length > 0
          ? store.adsList
              .filter((el: any) => el.owner.role === "agent")
              .map((object: any) => {
                const textButton = object.markAsDelete
                  ? "Восстановить"
                  : undefined;

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
                      (el: any) =>
                        el.subtitle_ru !== null &&
                        el.type_en !== "furniture" &&
                        el.type_en !== "window"
                    )
                    .map((el: any) => ({
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
              })
          : statusActiveApi(store.statusLoader)}
      </div>
    </div>
  );
});
