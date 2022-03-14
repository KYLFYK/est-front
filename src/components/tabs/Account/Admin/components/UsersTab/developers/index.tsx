import React, { FC, useEffect, useState } from "react";
import { PageFilter } from "../../common/PageFilter";
import { AgentCard } from "../agency/AgentCard";
import { observer } from "mobx-react-lite";
import { DevelopersListStore } from "../../../../../../../mobx/role/admin/users/developers";
import {Loader, Empty, Error} from '../../../../../../shared/Loader/Loader';
import { BaseDropDown } from "src/components/shared/BaseDropDown/BaseDropDown";
import {sortNameOptions} from '../../../../../../../lib/configs/dropdownOptions';

import commonStyles from "../../../AdminRoleStyles.module.scss";
import styles from "../agency/agency.module.scss";

export const DevelopersTab: FC = observer(() => {
  const hrefPrefix = "/developers/";

  const { list, loaded, uploadList, errorOnLoad } = DevelopersListStore;
  const store = DevelopersListStore;
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
        {sortedData?.filter((d: any) => d.developerName.toLowerCase().includes(textFilter.toLowerCase())).map((developer: any, index: number) => (
          <AgentCard
            key={index}
            hrefPrefix={hrefPrefix}
            description={
              developer.description ? developer.description : "Не указано"
            }
            title={developer.developerName}
            imgUrl={developer.imgUrl}
            id={developer.id}
          />
        ))}
      </div>
    </div>
  ) : (
    <Loader/>
  );
});
