import { FC, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import {useMortGageStore} from '../../../../../mobx/role/bank/mortgage/MortGage'
import { IconDown } from "../../Developer/components/Notifications";
import { CatalogItem } from "./CatalogItem";
import { Loader } from "src/components/shared/Loader/Loader";
import styles from "./Catalog.module.scss";

export const Catalog: FC = observer(() => {
  const store = useMortGageStore()

  const [dateSort, setDateSort] = useState(false)
  const [statusSort, setStatusSort] = useState(false)

  useEffect(() => {
    store.fetchAllLeads()
  }, [])

  let sortedData: any = []
  if(dateSort){
      sortedData = [...store.get()?.getAllData.sort((a: any, b: any) => a.createAt > b.createAt ? 1 : -1)]
  } 
  if(statusSort){
      sortedData = [...store.get()?.getAllData.sort((a: any, b: any) => a.status > b.status ? 1 : -1)]
  } 
  if(!dateSort && !statusSort){
      sortedData = [...store.get()?.getAllData]
  }

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
              onClick={() => {
                setDateSort(true)
                setStatusSort(false)
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <span>Дата заявки</span>
              <div style={{transform: dateSort ? 'rotate(180deg)' : ''}}><IconDown /></div>
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
              onClick={() => {
                setDateSort(false)
                setStatusSort(true)
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <span>Статус</span>
              <div style={{transform: statusSort ? 'rotate(180deg)' : ''}}><IconDown /></div>
            </div>
          </th>
        </tr>
        {store.initialData.loading 
          ? <Loader/>
          : sortedData.map((d: any) => <CatalogItem data={d} id={d.id}/>)
        }
      </table>
    </div>
  );
});
