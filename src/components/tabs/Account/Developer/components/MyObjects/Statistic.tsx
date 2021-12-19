import { FC, useState } from "react";
import DynamicsPriceTable from "../../../../../shared/DynamicsPrice/DynamicsPriceTable";
import { Card } from "../../../../../shared/Mortgage/Card";
import { BaseDropDown } from "../../../../../shared/BaseDropDown/BaseDropDown";
import { BarChartElem } from "./BarChartElem";

import styles from "./MyObjects.module.scss";

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
  options: {
    dates: [
      {
        label: "Сентябрь 2021",
        value: "Сентябрь 2021",
      },
      {
        label: "Октябрь 2021",
        value: "Октябрь 2021",
      },
      {
        label: "Ноябрь 2021",
        value: "Ноябрь 2021",
      },
      {
        label: "Декабрь 2021",
        value: "Декабрь 2021",
      },
      {
        label: "Январь 2022",
        value: "Январь 2022",
      },
    ],
    objects: [
      {
        label: "ЖК Ленинский",
        value: "ЖК Ленинский",
      },
      {
        label: "ЖК Ленинский 1",
        value: "ЖК Ленинский 1",
      },
      {
        label: "ЖК Ленинский 2",
        value: "ЖК Ленинский 2",
      },
      {
        label: "ЖК Ленинский 3",
        value: "ЖК Ленинский 3",
      },
    ],
  },
};

export const Statistic: FC = () => {
  const [selectedMonth, setSelectedMonth] = useState("Сентябрь 2021");
  const [selectedObj, setSelectedObj] = useState("ЖК Ленинский");

  return (
    <div className={styles.statWrapper}>
      <div className={styles.statItem}>
        <DynamicsPriceTable
          hideQuestion
          chartSubTitle={"Прибыль млн. ₽"}
          title={"Выручка по месяцам"}
          overflowX={"auto"}
          table={Data.byMonth}
        />
      </div>
      <div className={styles.statItem}>
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
                <span className={styles.name}>ЖК</span>
                <span className={styles.value}>25 млн ₽</span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Дома</span>
                <span className={styles.value}>5,2 млн ₽</span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Общая выручка</span>
                <span className={styles.value}>30 млн ₽</span>
              </div>
            </div>
            <div className={styles.criteria}>
              <span className={styles.subTitle}>За год:</span>
              <span className={styles.title}> 2021</span>
            </div>
            <div className={styles.elemList}>
              <div className={styles.elem}>
                <span className={styles.name}>ЖК</span>
                <span className={styles.value}>25 млн ₽</span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Дома</span>
                <span className={styles.value}>5,2 млн ₽</span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Общая выручка</span>
                <span className={styles.value}>30 млн ₽</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statHeader}>
          <div className={styles.mainSelect}>
            <span className={styles.text}>Количество бронирований:</span>
            <BaseDropDown
              onChange={(month) => {
                setSelectedMonth(month);
              }}
              className={styles.select}
              options={Data.options.dates}
              placeholder="Выберите период"
              value={selectedMonth}
            />
          </div>
          <div className={styles.secSelect}>
            <span className={styles.text}>Объект:</span>
            <BaseDropDown
              onChange={(obj) => {
                setSelectedObj(obj);
              }}
              className={styles.select}
              options={Data.options.objects}
              placeholder="Выберите ЖК"
              value={selectedObj}
            />
          </div>
        </div>
        <Card
          style={{
            backgroundColor: "#FFF",
            border: "solid 1px #F2F2F2",
            margin: "20px 0 0 0",
            padding: "0px",
          }}
        >
          <BarChartElem
            height={180}
            width={600}
            tooltipText={"Кол-во бронирований"}
            overflowX={"auto"}
            chartData={[
              {
                name: "Студии",
                value: 55,
              },
              {
                name: "1к квартиры",
                value: 35,
              },
              {
                name: "2к квартиры",
                value: 26,
              },
              {
                name: "3к квартиры",
                value: 18,
              },
            ]}
          />
        </Card>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statHeader}>
          <div className={styles.mainSelect}>
            <span className={styles.text}>Количество покупок:</span>
            <BaseDropDown
              onChange={(month) => {
                setSelectedMonth(month);
              }}
              className={styles.select}
              options={Data.options.dates}
              placeholder="Выберите период"
              value={selectedMonth}
            />
          </div>
          <div className={styles.secSelect}>
            <span className={styles.text}>Объект:</span>
            <BaseDropDown
              onChange={(obj) => {
                setSelectedObj(obj);
              }}
              className={styles.select}
              options={Data.options.objects}
              placeholder="Выберите ЖК"
              value={selectedObj}
            />
          </div>
        </div>
        <Card
          style={{
            backgroundColor: "#FFF",
            border: "solid 1px #F2F2F2",
            margin: "20px 0 0 0",
            padding: "0px",
          }}
        >
          <BarChartElem
            height={180}
            width={600}
            tooltipText={"Кол-во покупок"}
            overflowX={"auto"}
            chartData={[
              {
                name: "Студии",
                value: 55,
              },
              {
                name: "1к квартиры",
                value: 35,
              },
              {
                name: "2к квартиры",
                value: 26,
              },
              {
                name: "3к квартиры",
                value: 18,
              },
            ]}
          />
        </Card>
      </div>
    </div>
  );
};
