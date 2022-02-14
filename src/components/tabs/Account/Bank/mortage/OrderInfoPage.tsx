import { FC, useState } from "react";
import Link from "next/link";
import { BackIcon } from "../../../../../icons/BackIcon";
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown";

import commonStyles from "../../Admin/components/UsersTab/agency/agency.module.scss";
import styles from "./OrderInfo.module.scss";

export const OrderInfoPage: FC = () => {
  const [status, setStatus] = useState<"new" | "expired">("new");

  return (
    <div className={commonStyles.pageWrapper}>
      <div className={commonStyles.header}>
        <Link href={"/mortgage-orders"}>
          <a className={commonStyles.link}>
            <BackIcon width={24} height={24} color={"#3D4550"} />
            <span>Информация о заявке</span>
          </a>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <span className={styles.title}>Данные о заявке</span>
          <div className={styles.sectionList}>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Дата заявки</span>
              <span className={styles.value}>27/08/2021</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Время заявки</span>
              <span className={styles.value}>13:00</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Статус заявки</span>
              <span className={styles.value}>
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
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <span className={styles.title}>Контактные данные</span>
          <div className={styles.sectionList}>
            <div className={`${styles.sectionElem} ${styles.large}`}>
              <span className={styles.key}>ФИО</span>
              <span className={styles.value}>
                Васильев Евгений Константинович
              </span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Телефон</span>
              <span className={styles.value}>+7 (495) 232-90-00</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>E-mail</span>
              <span className={styles.value}>zhenya71@yandex.ru</span>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <span className={styles.title}>Об объекте</span>
          <div className={styles.sectionList}>
            <div className={`${styles.sectionElem} ${styles.large}`}>
              <span className={styles.key}>Название объекта</span>
              <span className={styles.value}>
                1-комнатная квартира в ЖК «Ленинский»
              </span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Стоимость</span>
              <span className={styles.value}>150 000 000 ₽</span>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <span className={styles.title}>Исходные данные</span>
          <div className={styles.sectionList}>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Стоимость недвижимости</span>
              <span className={styles.value}>150 000 000 ₽</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Первоначальная взнос</span>
              <span className={styles.value}>1 000 000 ₽</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Срок кредита</span>
              <span className={styles.value}>20 лет</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Процентная ставка</span>
              <span className={styles.value}>7,3 %</span>
            </div>
          </div>
          <span className={styles.title}>Досрочный платёж 1</span>
          <div className={styles.sectionList}>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Дата платежа</span>
              <span className={styles.value}>16.08.21</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Периодичность платежей</span>
              <span className={styles.value}>Единовременно</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Уменьшить</span>
              <span className={styles.value}>Срок</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Сумма</span>
              <span className={styles.value}>10 000 ₽</span>
            </div>
          </div>
          <span className={styles.title}>Итоговый расчёт</span>
          <div className={styles.sectionList}>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Ежемесячный платёж</span>
              <span className={styles.value}>285 474 ₽</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Кредит</span>
              <span className={styles.value}>98 999 999 ₽</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Проценты</span>
              <span className={styles.value}>89 513 816 ₽</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Проценты + кредит</span>
              <span className={styles.value}>188 513 805 ₽</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Необходимый доход</span>
              <span className={styles.value}>1 309 124 ₽</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
