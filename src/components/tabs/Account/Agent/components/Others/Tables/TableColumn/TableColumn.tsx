import React, { FC } from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {Card} from "../../../../../../../shared/Mortgage/Card";
import css from './TableColumn.module.scss'
import Typography from "../../../../../../../shared/Typography/Typography";

const data = [
    {
        name: 'Дома',
        продажа: 15,
        аренда: 22,
        amt: 2400,
    },
    {
        name: '1к квартиры',
        продажа: 35,
        аренда: 38,
        amt: 2210,
    },
    {
        name: 'Таунхаусы',
        продажа: 10,
        аренда: 14,
        amt: 2290,
    },
];

type TableColumnType ={
    title:string
}

const TableColumn :FC<TableColumnType> = ({title}) => {
    return (
        <div>
            <Typography weight={'bold'} className={css.title}>
                {title}
            </Typography>
            <Card className={css.card}>
                {/*<ResponsiveContainer width="100%" height="100%">*/}
                <ResponsiveContainer width={497} height={228}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        {/*<CartesianGrid strokeDasharray="3 3" />*/}
                        <XAxis tick={{stroke: '#1A4862',fontFamily:"RobotoLight",strokeWidth: 0,fontSize:"12px"}} dataKey="name"/>
                        <YAxis tick={{stroke: '#1A4862',fontFamily:"RobotoLight",strokeWidth: 0,fontSize:"12px"}}/>
                        <Tooltip/>
                        {/*<Legend />*/}
                        <Bar dataKey="аренда" fill="#C5A28E"/>
                        <Bar dataKey="продажа" fill="#1A4862"/>
                    </BarChart>
                </ResponsiveContainer>
                <div style={{display:'flex',paddingLeft:"50px",alignItems:'center'}}>
                    <svg style={{margin:'0px 5px 0 30px'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" fill="#C5A28E"/>
                    </svg>
                    <Typography color={"nude"}>
                        Продажа
                    </Typography>
                    <svg style={{margin:'0px 5px 0 30px'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" fill="#1A4862"/>
                    </svg>
                    <Typography color={"accent"}>
                        Аренда
                    </Typography>
                </div>

            </Card>
        </div>

    );
}

export default TableColumn

