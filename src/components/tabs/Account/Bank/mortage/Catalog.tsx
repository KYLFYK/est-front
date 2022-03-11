import { FC, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import {useMortGageStore} from '../../../../../mobx/role/bank/mortgage/MortGage'
import { IconDown } from "../../Developer/components/Notifications";
import { CatalogItem } from "./CatalogItem";
import { Loader } from "src/components/shared/Loader/Loader";
import styles from "./Catalog.module.scss";

export const Catalog: FC = observer(() => {
  const store = useMortGageStore()

  const [dateSort, setDateSort] = useState('default')
  const [statusSort, setStatusSort] = useState('default')

  useEffect(() => {
    store.fetchAllLeads()
  }, [])

  let sortedData: any = []
  if(dateSort === 'high'){
      sortedData = [...store.get()?.getAllData.sort((a: any, b: any) => a.createAt > b.createAt ? 1 : -1)]
  } 
  if(dateSort === 'low'){
    sortedData = [...store.get()?.getAllData.sort((a: any, b: any) => a.createAt < b.createAt ? 1 : -1)]
  } 
  if(statusSort === 'high'){
      sortedData = [...store.get()?.getAllData.sort((a: any, b: any) => a.status > b.status ? 1 : -1)]
  } 
  if(statusSort === 'low'){
    sortedData = [...store.get()?.getAllData.sort((a: any, b: any) => a.status < b.status ? 1 : -1)]
  } 
  if(dateSort === 'default' && statusSort === 'default'){
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
                setDateSort(dateSort === 'default' || dateSort === 'low' ? 'high' : 'low')
                setStatusSort('default')
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <span>Дата заявки</span>
              <div style={{transform: dateSort === 'high' ? 'rotate(180deg)' : ''}}><IconDown /></div>
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
                setDateSort('default')
                setStatusSort(statusSort === 'default' || statusSort === 'low' ? 'high' : 'low')
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <span>Статус</span>
              <div style={{transform: statusSort === 'high' ? 'rotate(180deg)' : ''}}><IconDown /></div>
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
