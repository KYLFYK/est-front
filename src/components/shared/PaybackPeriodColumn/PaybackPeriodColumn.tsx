import React, {FC} from 'react';
import Typography from "../Typography/Typography";
import css from "../../tabs/Account/Agent/components/Others/Tables/TableColumn/TableColumn.module.scss";
import {Card} from "../Mortgage/Card";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import Link from 'next/link'
import Image from "next/image";
import QuestionIcon from "../Mortgage/icons/QuestionIcon.svg";
import s from "../PaybackPeriod/Payback.module.scss";

type PaybackPeriodColumnType={
    title:string
    tableColumn:Array<{name:string,'Чистый доход млн. ₽':number,"Срок окупаемости, лет":number,amt:number}>
}

const PaybackPeriodColumn :FC<PaybackPeriodColumnType> = ({title,tableColumn}) => {


    const minY = 0 % 20 < 20 ? 0 - (0 % 20) : 0;
    const maxY = 170 % 20 < 20 ? 170 + 20 - (170 % 20) : 170;
    const ticksY = 1 + (maxY - minY) / 20;

    return (
        <div>
            <div style={{display:'flex'}}>
                <Typography weight={'bold'} className={css.title}>
                    {title}
                </Typography>
                <Image
                    id={"2"}
                    loader={() => QuestionIcon} unoptimized
                    src={QuestionIcon}
                    className={s.image}
                    width={26}
                    height={20}
                    alt='icon'
                />
            </div>

            <Card className={css.card}>
                <div style={{display:'flex',justifyContent:"space-between",padding:'0 40px'}}>
                    <Typography weight={'light'} color={"tertiary"} className={css.textSize} >
                        Чистый доход млн. Р
                    </Typography>
                    <Typography weight={'light'} color={"tertiary"} className={css.textSize} >
                        Срок окупаемости, лет
                    </Typography>
                </div>
                <ResponsiveContainer  height={336}>
                    <BarChart
                        height={280}
                        data={tableColumn}
                        margin={{
                            top: 15,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}
                        barGap={0}
                        barSize={60}
                    >
                        <XAxis
                            tick={{stroke: '#1A4862',fontFamily:"RobotoLight",strokeWidth: 0,fontSize:"12px"}}
                            dataKey="name"/>
                        <YAxis
                            yAxisId="left"
                            tickCount={ticksY}
                            domain={[minY,maxY]}
                            tick={{stroke: '#1A4862',fontFamily:"RobotoLight",strokeWidth: 0,fontSize:"10px"}}/>
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            tickCount={8}
                            tick={{stroke: '#1A4862',fontFamily:"RobotoLight",strokeWidth: 0,fontSize:"10px"}} />
                        {/*<Tooltip/>*/}
                        <Bar
                            yAxisId="left"
                            dataKey='Чистый доход млн. ₽'
                            fill="#1A4862"/>
                        <Bar
                            yAxisId="right"
                            dataKey="Срок окупаемости, лет"
                            fill="#C5A28E"/>
                    </BarChart>
                </ResponsiveContainer>
                <div style={{display:'flex',alignItems:'center',cursor:'pointer',justifyContent:"flex-end",paddingRight:'30px'}}>
                    <Link href={"https://www.kp.ru/russia/krym/nedvizhimost/"}>
                        <Typography color={"accent"}>
                            Ознакомиться с аналитикой
                        </Typography>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default PaybackPeriodColumn;