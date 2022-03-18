import { FC, useEffect } from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import {useBankCabinetStore} from '../../../../../mobx/role/bank/cabinet/BankCabinet'
import styles from "./Settings.module.scss";
import {accFromToken} from '../../../../../lib/localStorage/localStorage'

export const Settings: FC = observer(() => {
  const store = useBankCabinetStore()
  console.log(store.get())

  useEffect(() => {
    store.fetch()
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <section className={styles.section}>
          <span className={styles.title}>Телефоны</span>
          <div className={styles.list}>
            <div className={styles.elem}>
              <span className={styles.name}>Телефон 1</span>
              <span className={styles.value}>+7 (365) 2-550-500</span>
            </div>
            <div className={styles.elem}>
              <span className={styles.name}>Телефон 2</span>
              <span className={styles.value}>+7 (365) 2-550-500</span>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <span className={styles.title}>Данные регистрации</span>
          <div className={styles.list}>
            <div className={styles.elem}>
              <span className={styles.name}>Логин</span>
              <span className={styles.value}>RNCB</span>
            </div>
            <div className={styles.elem}>
              <span className={styles.name}>Пароль</span>
              <span className={styles.value}>Обновлён 2 месяца назад</span>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <span className={styles.title}>Уведомления</span>
          <div className={styles.list}>
            <div className={styles.elem}>
              <span className={styles.name}>Телефон</span>
              <span className={styles.value}>+7 (495) 232-90-00</span>
            </div>
            <div className={styles.elem}>
              <span className={styles.name}>E-mail</span>
              <span className={styles.value}>rncb@rncb.ru</span>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.buttons}>
        <Link href={"/cabinet/edit"}>
          <a className={styles.button}>Редактировать настройки</a>
        </Link>
      </div>
    </div>
  );
});
