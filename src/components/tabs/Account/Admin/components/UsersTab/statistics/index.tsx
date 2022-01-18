import { FC } from "react";
import DynamicsPriceTable from "../../../../../../shared/DynamicsPrice/DynamicsPriceTable";
import { Card } from "../../../../../../shared/Mortgage/Card";

import commonStyles from "../../../AdminRoleStyles.module.scss";
import styles from "../../../../Developer/components/MyObjects/MyObjects.module.scss";

const Data = {
  byMonth: [
    {
      name: "Январь 2018",
      price: "50000",
    },
    {
      name: "Июль 2018",
      price: "55000",
    },
    {
      name: "Январь 2019",
      price: "56000",
    },
    {
      name: "Июль 2019",
      price: "61000",
    },
    {
      name: "Январь 2020",
      price: "62000",
    },
    {
      name: "Июль 2020",
      price: "67000",
    },
    {
      name: "Январь 2021",
      price: "68000",
    },
    {
      name: "Июль 2021",
      price: "71000",
    },
  ],
};

export const StatisticsTab: FC = () => {
  return (
    <div
      className={commonStyles.wrapper}
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className={styles.statItem}>
        <DynamicsPriceTable
          hideQuestion
          chartSubTitle={"Прибыль млн. ₽"}
          title={"Выручка по месяцам"}
          overflowX={"auto"}
          table={Data.byMonth}
        />
      </div>
      <div
        className={styles.statItem}
        style={{
          width: "fit-content",
          maxWidth: "calc(50% - 10px)",
        }}
      >
        <span className={styles.title}>Выручка за период по объектам</span>
        <Card
          style={{
            backgroundColor: "#F2F2F2",
            border: "solid 1px #F2F2F2",
            margin: "20px 0 0 0",
            padding: "0px",
          }}
        >
          <div className={styles.statObjectCard}>
            <div className={styles.criteria}>
              <span className={styles.subTitle}>За месяц:</span>
              <span className={styles.title}> Сентябрь 2021</span>
            </div>
            <div className={styles.elemList}>
              <div className={styles.elem}>
                <span className={styles.name}>Агентства</span>
                <span className={styles.value}>25 млн ₽</span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Застройщики</span>
                <span className={styles.value}>5,2 млн ₽</span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Собственники</span>
                <span className={styles.value}>30 млн ₽</span>
              </div>
            </div>
            <div className={styles.criteria}>
              <span className={styles.subTitle}>За год:</span>
              <span className={styles.title}> 2021</span>
            </div>
            <div className={styles.elemList}>
              <div className={styles.elem}>
                <span className={styles.name}>Агентства</span>
                <span className={styles.value}>25 млн ₽</span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Застройщики</span>
                <span className={styles.value}>5,2 млн ₽</span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Собственники</span>
                <span className={styles.value}>30 млн ₽</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
