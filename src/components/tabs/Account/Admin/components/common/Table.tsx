import { FC } from "react";
import { BaseDropDown } from "../../../../../shared/BaseDropDown/BaseDropDown";

import styles from "./Table.module.scss";
import { IPaymentHistory } from "../../../../../../mobx/role/admin/profiles/agency";
import moment from "moment";

interface Props {
  paymentHistory: IPaymentHistory[];
}

const TableHeader: string[] = [
  "Дата платежа",
  "Сумма платежа",
  "Статус",
  "Дата уведомления",
];

const Options = [
  {
    label: "Оплачено",
    value: "paid",
  },
  {
    label: "Ожидается",
    value: "waiting",
  },
  {
    label: "Просрочено",
    value: "expired",
  },
];

export const Table: FC<Props> = ({ paymentHistory }) => {
  const getClassName = (text: string) => {
    switch (text) {
      case "paid":
        return styles.paid;
      case "expired":
        return styles.expired;
      case "waiting":
        return styles.waiting;
      default:
        return styles.paid;
    }
  };

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          {TableHeader.map((el, index) => (
            <th key={index}>{el}</th>
          ))}
        </tr>
        {paymentHistory.map((pay, index) => (
          <tr key={index}>
            <td
              style={{
                color: "3D4550",
              }}
            >
              <span>{moment(pay.date).format("DD.MM.YYYY")}</span>
            </td>
            <td
              style={{
                color: "3D4550",
              }}
            >
              <span>{pay.sum}</span>
            </td>
            <td
              style={{
                color: "3D4550",
              }}
            >
              <BaseDropDown
                onChange={(obj) => {

                }}
                className={`${styles.select} ${getClassName(pay.status)}`}
                options={Options}
                placeholder="Выберите способ оплаты"
                value={pay.status}
              />
            </td>
            <td
              style={{
                color: "3D4550",
              }}
            >
              <span>{moment(pay.notificationDate).format("DD.MM.YYYY")}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
