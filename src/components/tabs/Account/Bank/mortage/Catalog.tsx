import { FC } from "react";
import { IconDown } from "../../Developer/components/Notifications";
import { CatalogItem } from "./CatalogItem";

import styles from "./Catalog.module.scss";

export const Catalog: FC = () => {
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
          <th>
            <div
              className={styles.flex}
              style={{
                cursor: "pointer",
              }}
            >
              <span>Объект</span>
              <IconDown />
            </div>
          </th>
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
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
      </table>
    </div>
  );
};
