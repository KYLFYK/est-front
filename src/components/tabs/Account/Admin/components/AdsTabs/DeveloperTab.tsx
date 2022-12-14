import React, { FC, useState } from "react";
import { PageFilter } from "../common/PageFilter";
import FilterSearch from "../../../../../shared/FilterSearch/FilterSearch";
import { AdItem } from "./agency/AdItem";
import moment from "moment";
import { observer } from "mobx-react-lite";
import { AllAdsStore } from "../../../../../../mobx/role/admin/ads";
import {
  ObjectTypes,
  typeToRuString,
} from "../../../../../../utils/interfaces/objects";
import { ObjTypeToRu } from "../../../Agent/components/Others/MyAdsContainer/MyAdsContainer";

import styles from "./agency/AgencyTab.module.scss";
import Typography from "../../../../../shared/Typography/Typography";
import {statusActiveApi} from "../../../../../shared/Loader/Loader";

export const DeveloperTab: FC = observer(() => {
  const store = AllAdsStore;

  const [sort,setSort]=useState<string>('default')
  const [filterValue,setFilterValue]=useState<string>('')

  /*let sortedData: any = [];
  if (sort === "high") {
    sortedData = [
      ...objects.sort((a: any, b: any) => (a.price > b.price ? 1 : -1)),
    ];
  }
  if (sort === "low") {
    sortedData = [
      ...objects.sort((a: any, b: any) => (a.price < b.price ? 1 : -1)),
    ];
  }
  if (sort === "default") {
    sortedData = [...objects];
  }*/

  const onChangeFilter = (e: any) => {
    setFilterValue(e.target.value)
  }

  return  (
    <div className={styles.wrapper}>
      <PageFilter buttonText={"Добавить объект"} value={filterValue} onChange={onChangeFilter}/>
      <FilterSearch
        sort={sort}
        setSort={(e:any)=>{
          setSort(e)
          store.filter(e,'developer')
        }}
      />
      <div className={styles.list}>
        {store.adsList !== null && store.adsList.length > 0 ?
         store.adsList.filter((el) => el.owner.role === "developer")
          .map((object) => {
            const textButton = object.markAsDelete ? "Восстановить" : undefined;

            const headerElems = [
              {
                key: "Застройщик:",
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
                .filter((el, index) => index < 3)
                .map((el) => ({
                  key: el.type_ru,
                  value: el.value,
                })),
            ];

            if (object.objType !== ObjectTypes.RESCOMPLEX) {
              footerMainElems.push({
                key: "Цена",
                value: object.price,
              });
            }

            if (
              object.objType !== ObjectTypes.RESCOMPLEX &&
              object.complex &&
              object.complex.name
            ) {
              footerMainElems.push({
                key: "ЖК",
                value: object.complex.name,
              });
            }

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
                complexId={
                  object.complex && object.objType !== ObjectTypes.RESCOMPLEX
                    ? object.complex.id
                    : undefined
                }
              />
            )
          }): statusActiveApi(store.statusLoader)
        }
      </div>
    </div>
  )
});
