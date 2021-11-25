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
            width={900}
            height={400}
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
        </div>
    )
}
  
export default Chart