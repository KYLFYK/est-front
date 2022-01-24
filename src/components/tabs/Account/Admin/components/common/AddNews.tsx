import { FC } from "react";

import styles from "./AddNews.module.scss";

export const AddNews: FC = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Новая статья</span>
      <div className={styles.fields}>
        <input
          type="text"
          placeholder={"https://..."}
          className={styles.field}
        />
        <input type="text" placeholder={"Заголовок"} className={styles.field} />
        <button className={styles.button}>Добавить</button>
      </div>
    </div>
  );
};
