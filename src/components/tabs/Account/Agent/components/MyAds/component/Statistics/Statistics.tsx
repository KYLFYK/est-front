import React from 'react';
import ActionPeriod from "../../../Others/Tables/Table/ActionPeriod";
import RevenueMonth from "../../../Others/Tables/Table/RevenueMonth";
import WorkloadWork from "../../../Others/Tables/Table/WorkloadWork";
import Typography from "../../../../../../../shared/Typography/Typography";
import {Card} from "../../../../../../../shared/Mortgage/Card";
import css from "../../../PersonalCabinetTab/components/Statistics/Statistics.module.scss";
import {Chart} from "../../../../../../../shared/DynamicsPrice/Chart";
import TableColumn from "../../../Others/Tables/TableColumn/TableColumn";

const objectsSold = [
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
const revenueMonth = [
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

const applicationResults = {
    month: 'Сентябрь 2021',
    monthActive: '6',
    monthNotActive: '12',
    monthAll: '23',
    year: '2021',
    yearActive:'6',
    yearNotActive:'12',
    allYear:'23'
}

const numberApplications = [
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

const Statistics = () => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: "1fr 1fr"}}>
            <div>
                <Typography weight={"bold"}>Поданные объекты (количество) во времени</Typography>
                <Card className={css.cardStyle}>
                    <Chart heightValue={0} language={'ru'} table={objectsSold} divider={10} height={244} width={497}/>
                </Card>
            </div>
            <ActionPeriod
                left={'Новых заявок'}
                center={'Заявок в работе'}
                right={'Завершенных заявок'}
                title={'Итоги по объектам за период'}
                agentActivity={applicationResults}
            />
            <RevenueMonth table={revenueMonth} title={'Выручка по месяцам'}/>
            <TableColumn tableColumn={numberApplications} title={"Количество реализованных объектов по типу объекта/сделки"}/>
        </div>
    );
};

export default Statistics;