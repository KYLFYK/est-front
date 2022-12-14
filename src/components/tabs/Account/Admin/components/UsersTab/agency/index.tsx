import React, { FC, useEffect, useState } from "react";
import { PageFilter } from "../../common/PageFilter";
import { AgentCard } from "./AgentCard";
import { observer } from "mobx-react-lite";
import {
  AgencyListStore,
  IAdminAgent,
} from "../../../../../../../mobx/role/admin/users/agencies";
import { Loader } from "../../../../../../shared/Loader/Loader";
import { BaseDropDown } from "src/components/shared/BaseDropDown/BaseDropDown";
import { sortNameOptions } from "../../../../../../../lib/configs/dropdownOptions";

import commonStyles from "../../../AdminRoleStyles.module.scss";
import styles from "./agency.module.scss";
import Scroll from "../../../../../../shared/Scroll/Scroll";

export const listSortFunction: (
  a: IAdminAgent,
  b: IAdminAgent,
  method: "inc" | "dec"
) => 1 | -1 = (a, b, method) => {
  if (method === "inc") {
    return a.agencyName > b.agencyName ? 1 : -1;
  } else {
    return a.agencyName < b.agencyName ? 1 : -1;
  }
};

export const AgencyTab: FC = observer(() => {
  const hrefPrefix = "/agencies/";

  const { loaded, uploadList, errorOnLoad, handleRestore, handleDelete } =
    AgencyListStore;
  const store = AgencyListStore;
  const [textFilter, setTextFilter] = useState("");
  const [sort, setSort] = useState("default");

  const [sortedData, setSortedData] = useState<IAdminAgent[]>([...store.get()]);

  useEffect(() => {
    if (!loaded && !errorOnLoad) {
      uploadList();
    }
  }, [loaded, errorOnLoad]);

  useEffect(() => {
    switch (sort) {
      case "high":
        setSortedData([
          ...store.get().sort((a, b) => listSortFunction(a, b, "inc")),
        ]);
        break;
      case "low":
        setSortedData([
          ...store.get().sort((a, b) => listSortFunction(a, b, "dec")),
        ]);
        break;
      case "default":
        setSortedData([...store.get()]);
    }
  }, [sort, store.list]);

  const onChange = (e: any) => {
    setTextFilter(e.target.value);
  };

  return sortedData.length > 0 ? (
    <div className={commonStyles.wrapperAgency}>
      <div className={styles.filtersortWrapper}>
        <BaseDropDown
          options={sortNameOptions}
          onChange={setSort}
          placeholder={
            sort
              ? `??????????????????????: ${
                  sortNameOptions.filter((o) => o.value === sort)[0].label
                }`
              : "??????????????????????: ???? ??????????????????"
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
        {/*<div className={styles.wrapper}>*/}
        <Scroll height={'480'}>
          <div className={styles.wrapperAgencyTab}>
            {sortedData
                .filter((d) =>
                    d.agencyName.toLowerCase().includes(textFilter.toLowerCase())
                )
                .map((agent, index) => (
                    <AgentCard
                        key={index}
                        hrefPrefix={hrefPrefix}
                        description={agent.description}
                        title={agent.agencyName}
                        imgUrl={agent.imgUrl}
                        markAsDeleted={agent.markAsDelete}
                        id={agent.id}
                        handleDelete={handleDelete}
                        handleRestore={handleRestore}
                    />
                ))}
          </div>
        </Scroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
});
