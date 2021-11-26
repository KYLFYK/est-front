import React from 'react';
import s from './styles.module.scss';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Label} from 'recharts';
import Typography from "../../shared/Typography/Typography";

interface Props {
    // heightValue: number
}

export const Chart: React.FC<Props> = ({}) => {

    const data = [
        { index: 0, Петербург: 0 },
        { index: 15, Петербург: 170 },
        { index: 0, Крым: 0 },
        { index: 8, Крым: 180 },
        { index: 0, Москва: 0 },
        { index: 15, Москва: 120 },
      ];

    return (
        <div className={s.container}>
            <Typography color={'tertiary'} className={s.textSize}>Прибыль млн.₽</Typography>
          <LineChart
            width={870}
            height={300}
            data={data}
            className={s.rechartsCartesianAxisTickLine}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <Legend />
            <XAxis dataKey="index" type="number" tick={{fill:'#1A4862' ,fontSize:'10px'}}  tickCount={16} domain={[0, 15]}/>
            <YAxis unit="" type="number"  tick={{fill:'#1A4862' ,fontSize:'10px'}} tickCount={10} />
            <Line dataKey="Крым" stroke="#1A4862" dot={false} activeDot={false} legendType="none" strokeWidth={2}  />
            <Line dataKey="Петербург" stroke="#7F96A3" dot={false} activeDot={false} legendType="none" strokeWidth={2}/>
            <Line dataKey="Москва" stroke="#AFAFAF" dot={false} activeDot={false} legendType="none" strokeWidth={2} />
          </LineChart>
            <Typography color={'tertiary'} className={s.positionText}>Лет</Typography>
            <div className={s.lineAnalytics}>
                <div className={s.lineAnalyticsBorder}>
                    <div className={s.lineAnalyticsItemsPadding}>
                        <IconHouseAccent/>
                        <Typography color={"accent"} weight={"light"} className={s.textPadding}>
                            Крым
                        </Typography>
                    </div>
                    <div className={s.lineAnalyticsItemsPadding}>
                        <IconHouseTertiary/>
                        <Typography color={"accent"} weight={"light"} className={s.textPadding}>
                            Москва
                        </Typography>
                    </div>
                    <div className={s.lineAnalyticsItemsPadding}>
                        <IconHouseAccentLight/>
                        <Typography color={"accent"} weight={"light"} className={s.textPadding}>
                            Санкт-Петербург
                        </Typography>
                    </div>
                </div>
                <div>
                    <Typography color={"accent"}>Ознакомиться с аналитикой</Typography>
                </div>
            </div>
        </div>
    )
}
  
export default Chart


const IconHouseAccent = () => {
    return (
        <>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.14215L17 10.6421V18.4521H15V12.4521H9V18.4521H7V10.6421L12 6.14215V6.14215ZM12 3.45215L2 12.4521H5V20.4521H11V14.4521H13V20.4521H19V12.4521H22L12 3.45215Z" fill="#1A4862"/>
            </svg>
        </>
    );
};
const IconHouseTertiary = () => {
    return (
        <>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.14215L17 10.6421V18.4521H15V12.4521H9V18.4521H7V10.6421L12 6.14215ZM12 3.45215L2 12.4521H5V20.4521H11V14.4521H13V20.4521H19V12.4521H22L12 3.45215Z" fill="#AFAFAF"/>
            </svg>
        </>
    );
};
const IconHouseAccentLight = () => {
    return (
        <>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.14215L17 10.6421V18.4521H15V12.4521H9V18.4521H7V10.6421L12 6.14215ZM12 3.45215L2 12.4521H5V20.4521H11V14.4521H13V20.4521H19V12.4521H22L12 3.45215Z" fill="#7F96A3"/>
            </svg>
        </>
    );
};

