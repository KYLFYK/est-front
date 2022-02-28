import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import {useMortGageStore} from '../../../../../mobx/role/bank/mortgage/MortGage'
import { IconDown } from "../../Developer/components/Notifications";
import { CatalogItem } from "./CatalogItem";
import { Loader } from "src/components/shared/Loader/Loader";
import styles from "./Catalog.module.scss";

export const Catalog: FC = observer(() => {
  const store = useMortGageStore()

  useEffect(() => {
    store.fetchAllLeads()
  }, [])

  return (
    <div className={styles.wrapper}>
      <table>
        <tr>
          <th>
            <span>ФИО</span>
          </th>
          <th>
            <span>Телефон</span>
          </th>
          <th>
            <span>E-mail</span>
          </th>
          <th>
            <div
              className={styles.flex}
              style={{
                cursor: "pointer",
              }}
            >
              <span>Дата заявки</span>
              <IconDown />
            </div>
          </th>
          {/*<th>
            <div
              className={styles.flex}
              style={{
                cursor: "pointer",
              }}
            >
              <span>Объект</span>
              <IconDown />
            </div>
            </th>*/}
          <th>
            <div
              className={styles.flex}
              style={{
                cursor: "pointer",
              }}
            >
              <span>Статус</span>
              <IconDown />
            </div>
          </th>
        </tr>
        {store.initialData.loading 
          ? <Loader/>
          : store.initialData.getAllData.map((d) => <CatalogItem data={d} id={d.id}/>)
        }
      </table>
    </div>
  );
});
