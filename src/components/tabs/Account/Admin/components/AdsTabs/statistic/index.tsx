import React, { FC } from "react";
import DynamicsPriceTable from "../../../../../../shared/DynamicsPrice/DynamicsPriceTable";
import { Card } from "../../../../../../shared/Mortgage/Card";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

import statStyles from "./Statistic.module.scss";
import styles from "../../../../Developer/components/MyObjects/MyObjects.module.scss";
import css from "../../../../../../shared/DynamicsPrice/Chart.module.scss";

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

export const Statistic: FC = () => {
  const width = 600;
  const height = 260;

  const customTickX = ({
    x,
    y,
    payload,
  }: {
    x: number;
    y: number;
    payload: any;
  }) => {
    const payloadText = [
      payload.value.split(" ", 1).toString(),
      payload.value.split(" ").slice(1).join(" "),
    ];

    return (
      <svg
        x={width > 500 ? x - 30 : x - 10}
        y={width > 500 ? y : y - 10}
        width="100"
        height="50"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {width > 500 ? (
          <text
            style={{
              textAlign: "center",
            }}
            x={0}
            y={15}
            fill="#1A4862"
          >
            {payload.value}
          </text>
        ) : (
          <text
            style={{
              textAlign: "center",
            }}
            x={15}
            y={15}
            fill="#1A4862"
          >
            <tspan x="0" dy=".6em">
              {payloadText[0]}
            </tspan>
            <tspan x="0" dy="1.2em">
              {payloadText[1]}
            </tspan>
          </text>
        )}
      </svg>
    );
  };

  return (
    <div className={statStyles.wrapper}>
      <div className={statStyles.row}>
        <div className={styles.statItem}>
          <DynamicsPriceTable
            hideQuestion
            title={"Проданные объекты (количество) во времени"}
            overflowX={"auto"}
            table={Data.byMonth}
          />
        </div>
        <div className={styles.statItem}>
          <span className={styles.title}>
            Итоги продаж по объектам за период
          </span>
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
                  <span className={styles.value}>10</span>
                </div>
                <div className={styles.elem}>
                  <span className={styles.name}>Застройщики</span>
                  <span className={`${styles.value} ${statStyles.green}`}>
                    12
                  </span>
                </div>
                <div className={styles.elem}>
                  <span className={styles.name}>Собственники</span>
                  <span className={`${styles.value} ${statStyles.gray}`}>
                    6
                  </span>
                </div>
              </div>
              <div className={styles.criteria}>
                <span className={styles.subTitle}>За год:</span>
                <span className={styles.title}> 2021</span>
              </div>
              <div className={styles.elemList}>
                <div className={styles.elem}>
                  <span className={styles.name}>Агентства</span>
                  <span className={styles.value}>33</span>
                </div>
                <div className={styles.elem}>
                  <span className={styles.name}>Застройщики</span>
                  <span className={`${styles.value} ${statStyles.green}`}>
                    35
                  </span>
                </div>
                <div className={styles.elem}>
                  <span className={styles.name}>Собственники</span>
                  <span className={`${styles.value} ${statStyles.gray}`}>
                    54
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className={statStyles.row}>
        <div className={styles.statItem}>
          <DynamicsPriceTable
            hideQuestion
            title={"Выручка по месяцам"}
            overflowX={"auto"}
            table={Data.byMonth}
          />
        </div>
        <div className={styles.statItem}>
          <span className={styles.title}>
            Количество реализованных объектов по типу объекта/сделки
          </span>
          <BarChart
            className={css.chart}
            data={[
              {
                name: "Дома",
                value: 55,
                value2: 49,
              },
              {
                name: "1к квартиры",
                value: 35,
                value2: 31,
              },
              {
                name: "Таунхаусы",
                value: 26,
                value2: 23,
              },
            ]}
            height={height}
            width={width}
            style={{
              paddingTop: 20,
              overflowX: "auto",
              overflowY: "hidden",
            }}
          >
            <XAxis
              interval={0}
              dataKey="name"
              padding={{ left: 30, right: 30 }}
              tick={customTickX}
            />
            <YAxis interval={0} dataKey="value" />
            <CartesianGrid stroke="#f2f2f2" strokeDasharray="1 0" />
            <Tooltip />
            <Bar dataKey="value" name={"Продаж"} fill="#C5A28E" />
            <Bar dataKey="value2" name={"Покупок"} fill="#1A4862" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};
