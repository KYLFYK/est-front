import React, {
  FC,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import BackPage from "../../../Agent/components/Others/BackPage/BackPage";
import Typography from "../../../../../shared/Typography/Typography";
import { BaseDropDown } from "../../../../../shared/BaseDropDown/BaseDropDown";
import { useStoreDeveloperMyObjectStore } from "../../../../../../mobx/role/developer/myObject/DeveloperMyObject";
import ObjectCard from "../../../../../containers/Card";
import BaseLink from "../../../../../shared/BaseLink/BaseLink";
import { Loader, Empty } from "../../../../../shared/Loader/Loader";
import { createEditLink } from "../../../../../../utils/routes/createEditLink";
import css from "./ResComplexes.module.scss";
import Scroll from "../../../../../shared/Scroll/Scroll";

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
      <div style={{ padding: "20px" }}>
        <BackPage onBackPage={() => onComplex(false)} title={complexId.name} />
        <Typography weight={"bold"} className={css.marginB_20}>
          Квартиры и апартаменты
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
        <div style={{ marginTop: "20px" }}>
          <Scroll height={"470"}>
            <div className={css.grid4}>
              {store.get().loading ? (
                <Loader />
              ) : filteredData ? (
                filteredData.map((object: any, index: number) => (
                  <div key={index} style={{ position: "relative" }}>
                    <ObjectCard
                      key={object.id}
                      route={"apartment"}
                      typeObject={"new"}
                      houseData={object}
                      data={object}
                      hideLike
                    />

                    <div className={css.link}>
                      <Link
                        href={createEditLink(
                          "edit",
                          object.id,
                          0,
                          complexId.id
                        )}
                      >
                        <a>
                          <svg
                            className={css.svg}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z"
                              fill="#3D4550"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <Empty />
              )}
            </div>
          </Scroll>
        </div>
      </div>
    );
  }
);

export default ResComplexObjects;
