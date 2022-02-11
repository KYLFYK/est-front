import React, { FC, useEffect, useRef, useState } from "react";
import { AdsStatisticsStore } from "../../../../../mobx/role/admin/ads/statistics";
import DynamicsPriceTable from "../../../../shared/DynamicsPrice/DynamicsPriceTable";
import moment from "moment";
import { Card } from "../../../../shared/Mortgage/Card";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

import statStyles from "../../Admin/components/AdsTabs/statistic/Statistic.module.scss";
import styles from "../../Developer/components/MyObjects/MyObjects.module.scss";
import css from "../../../../shared/DynamicsPrice/Chart.module.scss";

export const Statistics: FC = () => {
  const height = 260;

  const { loaded, errorOnLoad, uploadList, list } = AdsStatisticsStore;

  const chartWrapperRef = useRef<HTMLDivElement | null>(null);
  const [chartWidth, setChartWidth] = useState<number>(0);

  useEffect(() => {
    if (!loaded && !errorOnLoad) {
      uploadList();
    }
  }, [loaded, errorOnLoad, uploadList]);

  useEffect(() => {
    const listener = () => {
      if (chartWrapperRef && chartWrapperRef.current) {
        setChartWidth(chartWrapperRef.current.clientWidth - 50);
      }
    };

    listener();

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [chartWrapperRef, list, loaded]);

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
        x={chartWidth > 500 ? x - 30 : x - 10}
        y={chartWidth > 500 ? y : y - 10}
        width="100"
        height="50"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {chartWidth > 500 ? (
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

  return list !== null ? (
    <div className={statStyles.wrapper}>
      <div className={statStyles.row}>
        <div className={styles.statItem} ref={chartWrapperRef}>
          <DynamicsPriceTable
            currency={false}
            hideQuestion
            divider={Math.round(
              Math.max.apply(
                null,
                list.countByPeriod.map((el) => el.count)
              ) * 0.3
            )}
            title={"Новые заявки во времени"}
            overflowX={"auto"}
            table={list.countByPeriod.map((el) => ({
              name: moment(el.month).format("MMMM YYYY"),
              price: el.count.toString(),
            }))}
            width={chartWidth}
          />
        </div>
        <div className={styles.statItem}>
          <span className={styles.title}>Итого по заявкам за период</span>
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
                <span className={styles.title}>
                  {" "}
                  {moment(list.currentMonthStats.month).format("MMMM YYYY")}
                </span>
              </div>
              <div className={styles.elemList}>
                <div className={styles.elem}>
                  <span className={styles.name}>Новых заявок</span>
                  <span className={styles.value}>
                    {list.currentMonthStats.agents}
                  </span>
                </div>
                <div className={styles.elem}>
                  <span className={styles.name}>Заявок в работе</span>
                  <span className={`${styles.value} ${statStyles.accent}`}>
                    {list.currentMonthStats.agents}
                  </span>
                </div>
                <div className={styles.elem}>
                  <span className={styles.name}>Завершённых заявок</span>
                  <span className={`${styles.value} ${statStyles.gray}`}>
                    {list.currentMonthStats.owners}
                  </span>
                </div>
              </div>
              <div className={styles.criteria}>
                <span className={styles.subTitle}>За год:</span>
                <span className={styles.title}>
                  {" "}
                  {moment(list.currentYearStats.year).format("YYYY")}
                </span>
              </div>
              <div className={styles.elemList}>
                <div className={styles.elem}>
                  <span className={styles.name}>Новых заявок</span>
                  <span className={styles.value}>
                    {list.currentYearStats.agents}
                  </span>
                </div>
                <div className={styles.elem}>
                  <span className={styles.name}>Заявок в работе</span>
                  <span className={`${styles.value} ${statStyles.accent}`}>
                    {list.currentYearStats.developers}
                  </span>
                </div>
                <div className={styles.elem}>
                  <span className={styles.name}>Завершённых заявок</span>
                  <span className={`${styles.value} ${statStyles.gray}`}>
                    {list.currentYearStats.owners}
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
            table={list.revenuePerMonth.map((el) => ({
              name: moment(el.month).format("MMMM YYYY"),
              price: el.revenue.toString(),
            }))}
            width={chartWidth}
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
                value: list.soldObjectsStats.houses.sale,
                value2: list.soldObjectsStats.houses.purchase,
              },
              {
                name: "1к квартиры",
                value: list.soldObjectsStats.flats_1.sale,
                value2: list.soldObjectsStats.flats_1.purchase,
              },
              {
                name: "Таунхаусы",
                value: list.soldObjectsStats.townhouses.sale,
                value2: list.soldObjectsStats.townhouses.purchase,
              },
            ]}
            height={height}
            width={chartWidth}
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
  ) : (
    <>Loading</>
  );
};
