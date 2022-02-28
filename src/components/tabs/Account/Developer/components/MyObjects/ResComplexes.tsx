import React, { FC, useEffect, SetStateAction, Dispatch } from "react";
import { observer } from "mobx-react-lite";
import FilterSearch from "../../../../../shared/FilterSearch/FilterSearch";
import { SearchOffice } from "../../../../../containers/SearchOffice/SearchOffice";
import LineV1 from "../../../../../shared/CardObject/Lines/LineV1";
import LineAddressV1 from "../../../../../shared/CardObject/Lines/LineAddressV1";
import LineArray from "../../../../../shared/CardObject/Lines/LineArray";
import Typography from "../../../../../shared/Typography/Typography";
import CardObject from "../../../../../shared/CardObject/CardObject";
import {Loader} from '../../../../../shared/Loader/Loader';
import styles from "./ResComplexes.module.scss";
import css from "../../../Agent/components/Others/MyAdsContainer/Active.module.scss";
import {useStoreDeveloperMyObjectStore} from "../../../../../../mobx/role/developer/myObject/DeveloperMyObject";
import {accFromToken} from '../../../../../../lib/localStorage/localStorage';

type ResComplexesType ={
  onComplex: Dispatch<SetStateAction<boolean>>
  setComplexId: Dispatch<SetStateAction<{id: number, name: string}>>
}

export const ResComplexes: FC<ResComplexesType> = observer(({onComplex, setComplexId}) => {

  const store = useStoreDeveloperMyObjectStore()

  useEffect(() => {
    store.fetchAllComplexByOwnerId(accFromToken().id)
  },[])

  const onSetCompex = (id: number, name: string) => {
    onComplex(true)
    setComplexId({id: id, name: name})
  }
  store.get()
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
    <div className={styles.wrapper} >
      <SearchOffice hideButton placeholder={"Поиск"} />
      <FilterSearch className={styles.filter} type="agent" />
      <div className={styles.objectsList}>
        {/*{Data.objects.map((home, index) => (*/}
        {store.initialData.loading ? <Loader/> : store.initialData.complex && store.initialData.complex.map((home, index) => (
          <div className={styles.object} key={index} onClick={() => onSetCompex(+home.id, home.name)}>
            <CardObject img={home.img}>
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
});
