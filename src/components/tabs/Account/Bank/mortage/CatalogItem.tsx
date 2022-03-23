import { FC } from "react"
import { observer } from "mobx-react-lite";
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import {useMortGageStore} from '../../../../../mobx/role/bank/mortgage/MortGage'
import s from "./Catalog.module.scss"
import {datetoDayFormat, datetoTimeFormat} from '../../../../../lib/mapping/objectDates'
import {LEADS_REQS_OPTIONS} from './Config';

export const CatalogItem: FC<any> = observer(({data, id}) => {

  const store = useMortGageStore()
  
  return (
    <tr style={{cursor: 'pointer'}} onClick={(e: any) => {
      !e.target.className && store.setDetail(true, id)
    }}>
      <td>
        <span>{data.fio}</span>
      </td>
      <td>
        <span>{data.phone}</span>
      </td>
      <td>
        <span>{data.email}</span>
      </td>
      <td>
        <span>{`${datetoDayFormat(data.createAt)} ${datetoTimeFormat(data.createAt)}`}</span>
      </td>
      {/*<td>
        <span>3-этажный коттедж</span>
      </td>*/}
      <td>
        <span
          style={{
            display: "inline-block",
            width: 150,
          }}
        >
          <BaseDropDown
            onChange={(obj) => {
              store.updateLead(id, LEADS_REQS_OPTIONS.filter((o: any) => o.value === obj)[0].label);
            }}
            className={`${s.select}${
              data.status === "Новая заявка" ? ` ${s.green}` : ""
            }`}
            options={LEADS_REQS_OPTIONS}
            placeholder={data.status}
            value={data.status}
            location={'bank'}
          />
        </span>
      </td>
    </tr>
  );
});
