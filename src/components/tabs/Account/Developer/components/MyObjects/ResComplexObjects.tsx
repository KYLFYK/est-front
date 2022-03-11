import React, {
  FC,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import { observer } from "mobx-react-lite";
import BackPage from "../../../Agent/components/Others/BackPage/BackPage";
import Typography from "../../../../../shared/Typography/Typography";
import { BaseDropDown } from "../../../../../shared/BaseDropDown/BaseDropDown";
import { useStoreDeveloperMyObjectStore } from "../../../../../../mobx/role/developer/myObject/DeveloperMyObject";
import ObjectCard from "../../../../../containers/Card";
import BaseLink from "../../../../../shared/BaseLink/BaseLink";
import { Loader, Empty } from "../../../../../shared/Loader/Loader";
import css from "./ResComplexes.module.scss";

type ResComplexObjectsType = {
  onComplex: Dispatch<SetStateAction<boolean>>;
  complexId: { id: number; name: string };
};

const ResComplexObjects: FC<ResComplexObjectsType> = observer(
  ({ onComplex, complexId }) => {
    const store = useStoreDeveloperMyObjectStore();
    const [corpus, setCompus] = useState<number>(0);
    const [floor, setFloor] = useState<number>(0);

    let defaultOptionCorpus = [{ value: 0, label: "Показаны все корпуса" }];
    let defaultOptionFloor = [{ value: 0, label: "Показаны все этажи" }];
    useEffect(() => {
      store.fetchAllObjectsByComplexId(complexId.id);
    }, []);

    let filteredData: any = [];
    if (corpus === 0 && floor === 0) {
      filteredData = store.get().complexObjects;
    } else if (corpus === 0 && floor !== 0) {
      filteredData = store
        .get()
        .complexObjects.filter((d: any) => d.property.floor === floor);
    } else if (corpus !== 0 && floor === 0) {
      filteredData = store
        .get()
        .complexObjects.filter(
          (d: any) => d.property.buildingNumber === corpus
        );
    } else if (corpus !== 0 && floor !== 0) {
      filteredData = store
        .get()
        .complexObjects.filter(
          (d: any) =>
            d.property.floor === floor && d.property.buildingNumber === corpus
        );
    }

    return (
      <div>
        <BackPage onBackPage={() => onComplex(false)} title={complexId.name} />
        <Typography weight={"bold"} className={css.marginB_20}>
          Квартиры и аппартаменты
        </Typography>
        <div style={{ display: "flex" }}>
          <BaseDropDown
            className={css.marginR_10}
            options={defaultOptionCorpus.concat(
              Array.from(
                new Set(
                  store
                    .get()
                    ?.complexObjects?.map((d: any) => d.property.buildingNumber)
                )
              )
                .map((el: any) => {
                  return { value: el, label: `Корпус ${el}` };
                })
                .sort((a, b) => (a.value > b.value ? 1 : -1))
            )}
            placeholder={"Показаны все корпуса"}
            onChange={setCompus}
            value={corpus}
          />
          <BaseDropDown
            options={defaultOptionFloor.concat(
              Array.from(
                new Set(
                  store.get()?.complexObjects?.map((d: any) => d.property.floor)
                )
              )
                .map((el: any) => {
                  return { value: el, label: `${el} этаж` };
                })
                .sort((a, b) => (a.value > b.value ? 1 : -1))
            )}
            placeholder={"Показаны все этажи"}
            onChange={setFloor}
            value={floor}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <BaseLink href={`/ads/new-object?complex=${complexId.id}`} isActive>
              <Typography size="small">Добавить квартиру</Typography>
            </BaseLink>
          </div>
        </div>
        <div className={css.grid4}>
          {store.get().loading ? (
            <Loader />
          ) : filteredData ? (
            filteredData.map((object: any) => (
              <ObjectCard
                key={object.id}
                route={"apartment"}
                typeObject={"new"}
                houseData={object}
                data={object}
                hideLike
              />
            ))
          ) : (
            <Empty />
          )}
        </div>
      </div>
    );
  }
);

export default ResComplexObjects;
