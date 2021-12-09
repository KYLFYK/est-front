// тут описываем горизонтальный подтаб "Статистика", который является частью таба "Заявки на просмотр"
import React from "react";
import ActionPeriod from "../../Others/Tables/Table/ActionPeriod";
import ClosedApplicationsMonth from "../../Others/Tables/Table/ClosedApplicationsMonth";
import RevenueMonth from "../../Others/Tables/Table/RevenueMonth";
import TableColumn from "../../Others/Tables/TableColumn/TableColumn";
import css from './Statistics.module.scss'

interface Props {
}

const newApplicationsByTime = [
    {name: 'Январь 2021', price: '0'},
    {name: 'Февраль 2021', price: '15'},
    {name: 'Март 2021', price: '20'},
    {name: 'Апрель 2021', price: '19'},
    {name: 'Май 2021', price: '22'},
    {name: 'Июнь 2021', price: '26'},
    {name: 'Июль 2021', price: '28'},
    {name: 'Август 2021', price: '31'},
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
    {name: 'Август 2021', price: '51'},
    {name: 'Сентябрь 2021', price: '60'},
]
const resultsPeriod = {
    month: 'Сентябрь 2021',
    monthActive: '6',
    monthNotActive: '12',
    monthAll: '23',
    year: '2021',
    yearActive:'6',
    yearNotActive:'12',
    allYear:'23'
}

const numberTransactions = [
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
const ApplicationsViewStatistics: React.FC<Props> = () => {
    return (
        <div className={css.grid} >
            <ClosedApplicationsMonth table={newApplicationsByTime} title={"Новые заявки во времени"}/>
            <ActionPeriod
                left={'Продано'}
                center={'Активные объявления'}
                right={'Архив'}
                title={'Итоги по заявкам за период'}
                agentActivity={resultsPeriod}
            />
            <RevenueMonth table={revenueMonth} title={"Выручка по месяцам"}/>
            <TableColumn tableColumn={numberTransactions} title={"Количество заявок по типу объекта/сделки"}/>
        </div>
    )
}

export default ApplicationsViewStatistics