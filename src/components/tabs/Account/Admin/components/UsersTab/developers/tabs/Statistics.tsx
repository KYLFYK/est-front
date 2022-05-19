import { FC } from "react";
import { InputNumber } from "../../../common/InputNumber";

import styles from "./Statistic.module.scss";
import Scroll from "../../../../../../../shared/Scroll/Scroll";

export const Statistics: FC = () => {
  return (
    <Scroll height={'510'} >
      <div
        style={{
          paddingTop: 20,
        }}
      >
        <section className={styles.section}>
          <span className={styles.formSubTitle}>Арбитражные дела</span>
          <InputNumber label="Судебные дела" labelWidth={228} defaultValue={17} />
          <InputNumber
            label="В качестве истца"
            labelWidth={228}
            defaultValue={5}
          />
          <InputNumber
            label="В качестве ответчика"
            labelWidth={228}
            defaultValue={12}
          />
        </section>
        <section className={styles.section}>
          <span className={styles.formSubTitle}>Исполнительные производства</span>
          <InputNumber
            label="Текущие производства"
            labelWidth={228}
            defaultValue={0}
          />
          <InputNumber
            label="Завершённые производства"
            labelWidth={228}
            defaultValue={53}
          />
        </section>
        <section className={styles.section}>
          <span className={styles.formSubTitle}>Тендеры и госзакупки</span>
          <InputNumber
            label="Количество закупок"
            labelWidth={228}
            defaultValue={111}
          />
        </section>
        <section className={styles.section}>
          <span className={styles.formSubTitle}>Существенные события</span>
          <InputNumber
            label="За всю историю компании"
            labelWidth={228}
            defaultValue={11}
          />
          <InputNumber label="За текущий год" labelWidth={228} defaultValue={0} />
        </section>
        <section className={styles.section}>
          <span className={styles.formSubTitle}>Связи компании</span>
          <InputNumber
            label="Дочерние предприятия"
            labelWidth={228}
            defaultValue={0}
          />
          <InputNumber label="Совладельцы" labelWidth={228} defaultValue={3} />
        </section>
        <section className={styles.section}>
          <div className={styles.row}>
            <section>
              <span className={styles.formSubTitle}>Сдано</span>
              <InputNumber label="Дома" labelWidth={54} defaultValue={183} />
              <InputNumber label="ЖК" labelWidth={54} defaultValue={103} />
            </section>
            <section>
              <span className={styles.formSubTitle}>Строится</span>
              <InputNumber label="Дома" labelWidth={54} defaultValue={5} />
              <InputNumber label="ЖК" labelWidth={54} defaultValue={3} />
            </section>
          </div>
        </section>
      </div>
    </Scroll>
  );
};
