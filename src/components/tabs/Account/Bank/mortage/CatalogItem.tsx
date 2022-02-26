import { FC, useState } from "react"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import {useMortGageStore} from '../../../../../mobx/role/bank/mortgage/MortGage'
import styles from "./Catalog.module.scss"
import {datetoDayFormat, datetoTimeFormat} from '../../../../../lib/mapping/objectDates'

export const CatalogItem: FC<any> = ({data, setStatus, id}) => {
  //const [status, setStatus] = useState<"new" | "expired">("new");
  const store = useMortGageStore()

  return (
    <tr onClick={() => store.setDetail(true, id)}>
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
        <span>{`${datetoDayFormat(data.dateOfPayment)} ${datetoTimeFormat(data.dateOfPayment)}`}</span>
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
              store.updateLead(id, obj);
            }}
            className={`${styles.select}${
              status === "new" ? ` ${styles.green}` : ""
            }`}
            options={[
              {
                label: "Новая заявка",
                value: "new",
              },
              {
                label: "Завершено",
                value: "expired",
              },
            ]}
            placeholder={data.status}
            value={data.status}
          />
        </span>
      </td>
    </tr>
  );
};
