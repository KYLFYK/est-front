import { FC, useState } from "react";
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown";

import styles from "./Catalog.module.scss";

export const CatalogItem: FC = () => {
  const [status, setStatus] = useState<"new" | "expired">("new");

  return (
    <tr>
      <td>
        <span>Васильев Евгений Константинович</span>
      </td>
      <td>
        <span>+7 911 589 56 98</span>
      </td>
      <td>
        <span>zhenya71@yandex.ru</span>
      </td>
      <td>
        <span>27.08.2021 13:00</span>
      </td>
      <td>
        <span>3-этажный коттедж</span>
      </td>
      <td>
        <span
          style={{
            display: "inline-block",
            width: 150,
          }}
        >
          <BaseDropDown
            onChange={(obj) => {
              setStatus(obj as "new" | "expired");
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
            placeholder="Выберите статус"
            value={status}
          />
        </span>
      </td>
    </tr>
  );
};
