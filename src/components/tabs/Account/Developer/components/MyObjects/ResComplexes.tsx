import React, {
  FC,
  useEffect,
  SetStateAction,
  Dispatch,
  useState,
} from "react";
import { observer } from "mobx-react-lite";
import FilterSearch from "../../../../../shared/FilterSearch/FilterSearch";
import { SearchOffice } from "../../../../../containers/SearchOffice/SearchOffice";
import LineV1 from "../../../../../shared/CardObject/Lines/LineV1";
import LineAddressV1 from "../../../../../shared/CardObject/Lines/LineAddressV1";
import LineArray from "../../../../../shared/CardObject/Lines/LineArray";
import Typography from "../../../../../shared/Typography/Typography";
import CardObject from "../../../../../shared/CardObject/CardObject";
import { Loader } from "../../../../../shared/Loader/Loader";
import styles from "./ResComplexes.module.scss";
import css from "../../../Agent/components/Others/MyAdsContainer/Active.module.scss";
import { useStoreDeveloperMyObjectStore } from "../../../../../../mobx/role/developer/myObject/DeveloperMyObject";
import { accFromToken } from "../../../../../../lib/localStorage/localStorage";
import { GlassIcon } from "../../../../../../icons/InputIcon/GlassIcon";
import Scroll from "../../../../../shared/Scroll/Scroll";

type ResComplexesType = {
  onComplex: Dispatch<SetStateAction<boolean>>;
  setComplexId: Dispatch<SetStateAction<{ id: number; name: string }>>;
};

export const ResComplexes: FC<ResComplexesType> = observer(
  ({ onComplex, setComplexId }) => {
    const store = useStoreDeveloperMyObjectStore();
    const [textFilter, setTextFilter] = useState("");
    const [sort, setSort] = useState("default");

    useEffect(() => {
      store.fetchAllComplexByOwnerId(accFromToken().id);
    }, []);

    let sortedData: any = [];
    if (sort === "high") {
      sortedData = [
        ...store
          .get()
          ?.complex.sort((a: any, b: any) =>
            a.priceMax > b.priceMax ? 1 : -1
          ),
      ];
    }
    if (sort === "low") {
      sortedData = [
        ...store
          .get()
          ?.complex.sort((a: any, b: any) =>
            a.priceMax < b.priceMax ? 1 : -1
          ),
      ];
    }
    if (sort === "default") {
      sortedData = [...store.get()?.complex];
    }

    const onSetCompex = (id: number, name: string) => {
      onComplex(true);
      setComplexId({ id: id, name: name });
    };

    const recover = (id: string) => {};
    const del = (id: string) => {};
    const edit = (id: string) => {};
    const publish = (id: string) => {};

    const onChange = (e: any) => {
      setTextFilter(e.target.value);
    };

    return (
      <div className={styles.wrapper}>
        <SearchOffice
          inputIcon={<GlassIcon />}
          inputIconPlacement={"right"}
          placeholder={"Поиск..."}
          value={textFilter}
          onChange={onChange}
        />
        <FilterSearch
          className={styles.filter}
          type="agent"
          sort={sort}
          setSort={setSort}
        />
          <Scroll height={'500'}>
            <div className={styles.objectsList}>
              {/*{Data.objects.map((home, index) => (*/}
              {store.initialData.loading ? (
                <Loader />
              ) : (
                sortedData
                  ?.filter((d: any) =>
                    d.name.toLowerCase().includes(textFilter.toLowerCase())
                  )
                  .map((home: any, index: number) => (
                    <div
                      className={styles.object}
                      key={index}
                      onClick={() => onSetCompex(+home.id, home.name)}
                    >
                      <CardObject
                        img={home.files[0] ? home.files[0].url : home.img}
                      >
                        <div className={css.paddingCard}>
                          <LineV1
                            id={home.id}
                            onPublish={publish}
                            onRecover={recover}
                            name={home.name}
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
                              Застройщик:
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
                  ))
              )}
            </div>
          </Scroll>
      </div>
    );
  }
);
