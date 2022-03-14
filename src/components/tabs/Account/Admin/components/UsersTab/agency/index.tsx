import React, { FC, useEffect, useState } from "react";
import { PageFilter } from "../../common/PageFilter";
import { AgentCard } from "./AgentCard";
import { observer } from "mobx-react-lite";
import { AgencyListStore } from "../../../../../../../mobx/role/admin/users/agencies";
import {Loader, Empty, Error} from '../../../../../../shared/Loader/Loader';
import { BaseDropDown } from "src/components/shared/BaseDropDown/BaseDropDown";
import {sortNameOptions} from '../../../../../../../lib/configs/dropdownOptions';

import commonStyles from "../../../AdminRoleStyles.module.scss";
import styles from "./agency.module.scss";

export const AgencyTab: FC = observer(() => {
  const hrefPrefix = "/agencies/";

  const { list, loaded, uploadList, errorOnLoad} = AgencyListStore;
  const store = AgencyListStore;
  const [textFilter, setTextFilter] = useState('')
  const [sort, setSort] = useState('default')

  useEffect(() => {
    if (!loaded && !errorOnLoad) {
      uploadList();
    }
  }, [loaded, errorOnLoad, uploadList]);

  let sortedData: any = []
  if(sort === 'high'){
    sortedData = [...store.get()?.sort((a: any, b: any) => a.agencyName > b.agencyName ? 1 : -1)]
  } 
  if(sort === 'low'){
    sortedData = [...store.get()?.sort((a: any, b: any) => a.agencyName < b.agencyName ? 1 : -1)]
  } 
  if(sort === 'default'){
      sortedData = [...store.get()]
  }

  const onChange = (e: any) => {
    setTextFilter(e.target.value)
  }

  return sortedData !== null ? (
    <div className={commonStyles.wrapper}>
      <div className={styles.filtersortWrapper}>
        <BaseDropDown 
          options={sortNameOptions}
          onChange={setSort}
          placeholder={sort
            ? `Сортировать: ${
              sortNameOptions.filter((o: any) => o.value === sort)[0].label
              }`
            : "Сортировать: по умолчанию"}
        />
        <PageFilter value={textFilter} onChange={onChange}/>
      </div>
      <div className={styles.wrapper}>
        {sortedData?.filter((d: any) => d.agencyName.toLowerCase().includes(textFilter.toLowerCase())).map((agent: any, index: number) => (
          <AgentCard
            key={index}
            hrefPrefix={hrefPrefix}
            description={agent.description}
            title={agent.agencyName}
            imgUrl={agent.imgUrl}
            id={agent.id}
          />
        ))}
      </div>
    </div>
  ) : (
    <Loader/>
  );
});
