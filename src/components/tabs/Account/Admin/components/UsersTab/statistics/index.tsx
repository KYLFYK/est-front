import { FC, useEffect, useRef, useState } from "react";
import DynamicsPriceTable from "../../../../../../shared/DynamicsPrice/DynamicsPriceTable";
import { Card } from "../../../../../../shared/Mortgage/Card";
import { observer } from "mobx-react-lite";
import { UsersStatisticsStore } from "../../../../../../../mobx/role/admin/users/statistics";
import moment from "moment";

import commonStyles from "../../../AdminRoleStyles.module.scss";
import styles from "../../../../Developer/components/MyObjects/MyObjects.module.scss";

export const StatisticsTab: FC = observer(() => {
  const { loaded, errorOnLoad, uploadData, data } = UsersStatisticsStore;
  const chartWrapperRef = useRef<HTMLDivElement | null>(null);

  const [chartWidth, setChartWidth] = useState<number>(0);

  useEffect(() => {
    if (!loaded && !errorOnLoad) {
      uploadData();
    }
  }, [loaded, errorOnLoad, uploadData]);

  useEffect(() => {
    const listener = () => {
      if (chartWrapperRef && chartWrapperRef.current) {
        setChartWidth(chartWrapperRef.current.clientWidth - 40);
      }
    };

    listener();

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [chartWrapperRef, loaded]);

  return data !== null ? (
    <div
      className={commonStyles.wrapper}
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className={styles.statItem} ref={chartWrapperRef}>
        <DynamicsPriceTable
          hideQuestion
          width={chartWidth}
          chartSubTitle={"Прибыль млн. ₽"}
          title={"Выручка по месяцам"}
          table={data.revenueChart.map((el) => ({
            price: el.price,
            name: moment(el.month).format("MMMM"),
          }))}
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
              <span className={styles.title}>
                {" "}
                {moment(data.revenueByObjects.month).format("MMMM YYYY")}
              </span>
            </div>
            <div className={styles.elemList}>
              <div className={styles.elem}>
                <span className={styles.name}>Агентства</span>
                <span className={styles.value}>
                  {data.revenueByObjects.objectsByMonth.agencies} млн ₽
                </span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Застройщики</span>
                <span className={styles.value}>
                  {data.revenueByObjects.objectsByMonth.developers} млн ₽
                </span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Собственники</span>
                <span className={styles.value}>
                  {data.revenueByObjects.objectsByMonth.owners} млн ₽
                </span>
              </div>
            </div>
            <div className={styles.criteria}>
              <span className={styles.subTitle}>За год:</span>
              <span className={styles.title}>
                {" "}
                {moment(data.revenueByObjects.year).format("YYYY")}
              </span>
            </div>
            <div className={styles.elemList}>
              <div className={styles.elem}>
                <span className={styles.name}>Агентства</span>
                <span className={styles.value}>
                  {data.revenueByObjects.objectsByYear.agencies} млн ₽
                </span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Застройщики</span>
                <span className={styles.value}>
                  {data.revenueByObjects.objectsByYear.developers} млн ₽
                </span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Собственники</span>
                <span className={styles.value}>
                  {data.revenueByObjects.objectsByYear.owners} млн ₽
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  ) : (
    <>Loading</>
  );
});
