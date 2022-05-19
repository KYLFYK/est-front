import React, { FC, useEffect, useState } from "react";
import { PageFilter } from "../../common/PageFilter";
import { AgentCard } from "../agency/AgentCard";
import { observer } from "mobx-react-lite";
import {
  DevelopersListStore,
  IAdminDeveloperCard,
} from "../../../../../../../mobx/role/admin/users/developers";
import { Loader } from "../../../../../../shared/Loader/Loader";
import { BaseDropDown } from "src/components/shared/BaseDropDown/BaseDropDown";
import { sortNameOptions } from "../../../../../../../lib/configs/dropdownOptions";

import commonStyles from "../../../AdminRoleStyles.module.scss";
import styles from "../agency/agency.module.scss";

export const DevelopersTab: FC = observer(() => {
  const hrefPrefix = "/developers/";

  const { list, loaded, uploadList, errorOnLoad, handleDelete, handleRestore } =
    DevelopersListStore;
  const store = DevelopersListStore;
  const [textFilter, setTextFilter] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    if (!loaded && !errorOnLoad) {
      uploadList();
    }
  }, [loaded, errorOnLoad, uploadList]);

  const [sortedData, setSortedData] = useState<IAdminDeveloperCard[]>([
    ...store.get(),
  ]);

  useEffect(() => {
    switch (sort) {
      case "high":
        setSortedData([
          ...store
            .get()
            .sort((a, b) => (a.developerName > b.developerName ? 1 : -1)),
        ]);
        break;
      case "low":
        setSortedData([
          ...store
            .get()
            .sort((a, b) => (a.developerName < b.developerName ? 1 : -1)),
        ]);
        break;
      case "default":
        setSortedData([...store.get()]);
    }
  }, [sort, store.list]);

  const onChange = (e: any) => {
    setTextFilter(e.target.value);
  };

  return list ? (
    <div className={commonStyles.wrapper}>
      <div className={styles.filtersortWrapper}>
        <BaseDropDown
          options={sortNameOptions}
          onChange={setSort}
          placeholder={
            sort
              ? `Сортировать: ${
                  sortNameOptions.filter((o: any) => o.value === sort)[0].label
                }`
              : "Сортировать: по умолчанию"
          }
          className={styles.baseDropDown}
        />
        <PageFilter
            hideButton
            value={textFilter}
            onChange={onChange}
            wrapperClassName={styles.searchFilter}
        />
      </div>
      <hr color={'#F2F2F2'} style={{height:'1px',margin:'12px 0 0 0',borderBottom:'none'}}/>
      <div style={{marginTop:"19px"}}>
        <div className={styles.wrapper}>
          {sortedData
            .filter((d: any) =>
              d.developerName.toLowerCase().includes(textFilter.toLowerCase())
            )
            .map((developer, index: number) => (
              <AgentCard
                key={index}
                hrefPrefix={hrefPrefix}
                description={
                  developer.description ? developer.description : "Не указано"
                }
                title={developer.developerName}
                imgUrl={developer.imgUrl}
                id={developer.id}
                markAsDeleted={developer.markAsDelete}
                handleDelete={handleDelete}
                handleRestore={handleRestore}
              />
            ))}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
});
