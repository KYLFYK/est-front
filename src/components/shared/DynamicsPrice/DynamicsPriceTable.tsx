import React, { FC, useState } from "react";
import css from "./DynamicsPrice.module.scss";
import { Card } from "../Mortgage/Card";
import { Chart } from "./Chart";
import QuestionIcon from "./QuestionIcon.svg";
import Typography from "../Typography/Typography";
import Image from "next/image";

interface Props {
  table: Array<{ name: string; price: string }>;
  hideQuestion?: boolean;
  chartSubTitle?: string;
  title?: string;
  overflowX?: "auto";
}

const DynamicsPriceTable: FC<Props> = ({
  table,
  hideQuestion,
  chartSubTitle,
  title,
  overflowX,
}) => {
  const [cardX, setCardX] = useState(0);
  const [cardhover, setCardhover] = useState<boolean[]>([false, false, false]);
  const [cardCoords, setCardcoords] = useState<[number, number]>([0, 0]);
  const [cardHeight, setCardHeight] = useState(0);

  const onMouseCardhoverHandler = (e: any) => {
    if (window.innerWidth - e.nativeEvent.layerX < 320) {
      setCardX(-320 + (window.innerWidth - e.nativeEvent.layerX));
    } else {
      setCardX(0);
    }
    setCardhover(cardhover.map((h, index) => Number(e.target.id) === index));
    setCardcoords([e.nativeEvent.layerX, e.nativeEvent.layerY]);
  };
  const onMouseCardoutHandler = () => {
    setCardhover([false, false, false]);
  };

  return (
    <div className={css.graphics}>
      <div className={css.chart}>
        <Typography className={css.subtitle} weight={"bold"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {title ? title : "Динамика изменения стоимости за м² в этом районе"}
            {hideQuestion ? (
              ""
            ) : (
              <Image
                id={"2"}
                loader={() => QuestionIcon}
                unoptimized
                src={QuestionIcon}
                height={20}
                width={20}
                onMouseEnter={onMouseCardhoverHandler}
                onMouseLeave={onMouseCardoutHandler}
                alt="icon"
              />
            )}
          </div>
        </Typography>
        <Card
          style={{
            backgroundColor: "#FFF",
            border: "solid 1px #F2F2F2",
            margin: "20px 0 0 0",
            padding: "0px",
          }}
        >
          <Chart
            heightValue={cardHeight}
            language={"ru"}
            subtitle={chartSubTitle}
            table={table}
            divider={5000}
            currency={true}
            overflowX={overflowX}
          />
        </Card>
      </div>
    </div>
  );
};

export default DynamicsPriceTable;
