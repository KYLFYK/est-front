import React from 'react';
import ActionPeriod from "../../../PersonalCabinetTab/components/Statistics/Table/ActionPeriod";
import RevenueMonth from "../../../PersonalCabinetTab/components/Statistics/Table/RevenueMonth";
import WorkloadWork from "../../../PersonalCabinetTab/components/Statistics/Table/WorkloadWork";
import Typography from "../../../../../../../shared/Typography/Typography";
import {Card} from "../../../../../../../shared/Mortgage/Card";
import css from "../../../PersonalCabinetTab/components/Statistics/Statistics.module.scss";
import {Chart} from "../../../../../../../shared/DynamicsPrice/Chart";
import TableColumn from "../../../Others/Tables/TableColumn/TableColumn";

const table = [
    {name: 'Январь 2021', price: '0'},
    {name: 'Февраль 2021', price: '15'},
    {name: 'Март 2021', price: '20'},
    {name: 'Апрель 2021', price: '19'},
    {name: 'Май 2021', price: '22'},
    {name: 'Июнь 2021', price: '26'},
    {name: 'Июль 2021', price: '28'},
    {name: 'Августь 2021', price: '31'},
    {name: 'Сентябрь 2021', price: '52'},
]
const tableRevenue = [
    {name: 'Январь 2021', price: '0'},
    {name: 'Февраль 2021', price: '15'},
    {name: 'Март 2021', price: '20'},
    {name: 'Апрель 2021', price: '19'},
    {name: 'Май 2021', price: '32'},
    {name: 'Июнь 2021', price: '26'},
    {name: 'Июль 2021', price: '48'},
    {name: 'Августь 2021', price: '51'},
    {name: 'Сентябрь 2021', price: '60'},
]

const Statistics = () => {
    return (
        <div style={{display:'grid',gridTemplateColumns:"1fr 1fr"}}>
            <div>
                <Typography weight={"bold"}>Поданные объекты (количество) во времени</Typography>
                <Card className={css.cardStyle}>
                    <Chart heightValue={0} language={'ru'} table={table} divider={10} height={244} width={497} />
                </Card>
            </div>
            <ActionPeriod title={'Итоги по объектам за период'}/>
            <RevenueMonth table={tableRevenue} title={'Выручка по месяцам'}/>
            <TableColumn title={"Количество реализованных объектов по типу объекта/сделки"}/>
        </div>
    );
};

export default Statistics;