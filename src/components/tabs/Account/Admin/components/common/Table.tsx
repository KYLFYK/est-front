import { FC } from "react";
import { BaseDropDown } from "../../../../../shared/BaseDropDown/BaseDropDown";

import styles from "./Table.module.scss";

interface Props {}

interface ITableRow {
  headers: string[];
  rows: {
    text: string;
    color?: string;
    isSelect?: boolean;
  }[][];
}

const TableRows: ITableRow = {
  headers: ["Дата платежа", "Сумма платежа", "Статус", "Дата уведомления"],
  rows: [
    [
      {
        text: "08.09.2021",
        color: "#3D4550",
      },
      {
        text: "1 000 000,00",
        color: "#3D4550",
      },
      {
        text: "waiting",
        isSelect: true,
      },
      {
        text: "24.08.2021",
        color: "#F2994A",
      },
    ],
    [
      {
        text: "10.06.2021",
        color: "#EB5757",
      },
      {
        text: "1 000 000,00",
        color: "#3D4550",
      },
      {
        text: "expired",
        isSelect: true,
      },
      {
        text: "24.05.2021",
        color: "#27AE60",
      },
    ],
    [
      {
        text: "08.03.2021",
        color: "#3D4550",
      },
      {
        text: "1 000 000,00",
        color: "#3D4550",
      },
      {
        text: "paid",
        isSelect: true,
      },
      {
        text: "24.02.2021",
        color: "#27AE60",
      },
    ],
    [
      {
        text: "08.12.2021",
        color: "#3D4550",
      },
      {
        text: "1 000 000,00",
        color: "#3D4550",
      },
      {
        text: "paid",
        isSelect: true,
      },
      {
        text: "24.11.2021",
        color: "#27AE60",
      },
    ],
  ],
};

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

export const Table: FC<Props> = () => {
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
          {TableRows.headers.map((el, index) => (
            <th key={index}>{el}</th>
          ))}
        </tr>
        {TableRows.rows.map((row, i) => (
          <tr key={i}>
            {row.map((el, k) => (
              <td
                key={k}
                style={{
                  color: el.color ? el.color : "",
                }}
              >
                {el.isSelect ? (
                  <BaseDropDown
                    onChange={(obj) => {
                      console.log(obj);
                    }}
                    className={`${styles.select} ${getClassName(el.text)}`}
                    options={Options}
                    placeholder="Выберите способ оплаты"
                    value={el.text}
                  />
                ) : (
                  <span>{el.text}</span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
