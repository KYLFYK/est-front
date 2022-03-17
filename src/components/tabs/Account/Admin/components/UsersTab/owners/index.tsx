import React, { FC, useEffect, useState } from "react";
import { PageFilter } from "../../common/PageFilter";
import { OwnerCard } from "./OwnerCard";
import { useOwnersList } from "../../../../../../../mobx/role/admin/users/owners";
import { observer } from "mobx-react-lite";
import {Loader, Empty, Error} from '../../../../../../shared/Loader/Loader';
import avatar from "../../../../../../../Pics/persons/exampleAvatar.png";
import commonStyles from "../../../AdminRoleStyles.module.scss";
import styles from "../agency/agency.module.scss";

export const OwnersTab: FC = observer(() => {
  const hrefPrefix = "/owners/";
  const store = useOwnersList();
  const [textFilter, setTextFilter] = useState('')

  useEffect(() => {
    store.uploadList();
  }, []);

  const onChange = (e: any) => {
    setTextFilter(e.target.value)
  }

  return (
    <div className={commonStyles.wrapper}>
      <PageFilter value={textFilter} onChange={onChange}/>
      <div className={styles.wrapper}>
        {store.get().error ? <Error/> : store.get().loading ? <Loader/> : store.get().initialData?.length === 0 ? <Empty/> : store.get().getAllData.filter((d: any) => d.name.toLowerCase().includes(textFilter.toLowerCase()))?.map((elem: any, index: number) => (
          <OwnerCard
            key={index}
            avatar={elem.avatar ? elem.avatar : avatar}
            id={elem.id}
            name={elem.name}
            email={elem.email}
            phone={elem.phone}
            hrefPrefix={hrefPrefix}
          />
        )) }
      </div>
    </div>
  );
});
