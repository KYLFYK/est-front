// тут описываем горизонтальный подтаб "Статистика", который является частью таба "Заявки на просмотр"
import WorkloadWork from "./Table/WorkloadWork";
import RevenueMonth from "./Table/RevenueMonth";
import ActionPeriod from "./Table/ActionPeriod";
import ClosedApplicationsMonth from "./Table/ClosedApplicationsMonth";
import css from './Statistics.module.scss'
import Typography from "../../../../../../../shared/Typography/Typography";
import {BaseDropDown} from "../../../../../../../shared/BaseDropDown/BaseDropDown";
import {useState} from "react";
import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
        dropDown: {
            backgroundColor: "#fff",
            width: 200,
            border: '0px solid #CAD1DA',
            color: '#C5A28E',
            fontFamily: "RobotoMedium"
        }
    }
))

const tableClosingByMonth = [
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
const tableRevenue = [
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

interface Props {

}

const listAgents = [
    {value: '1', label: 'Виталий Панкратов'},
    {value: '2', label: 'Василий Сидоров'},
    {value: '3', label: 'Дарья Веселовская'},
    {value: '4', label: 'Петр Добронравов'},
    {value: '5', label: 'Эдуард Спасенский'},
]
const agentsActivity = {
    month: 'Сентябрь 2021',
    active: '6',
    notActive: '12',
    allRevenue: '30 млн.',
    year: '2021,',
    yearActive:'6',
    yearNotActive:'12',
    allYearRevenue:'71 млн.'
}
const tableActiveDay=[
    {name: '0:00', price: '0'},
    {name: '2:00', price: '15'},
    {name: '4:00', price: '20'},
    {name: '6:00', price: '39'},
    {name: '8:00', price: '42'},
    {name: '10:00', price: '36'},
    {name: '12:00', price: '28'},
    {name: '14:00', price: '11'},
    {name: '16:00', price: '12'},
    {name: '18:00', price: '22'},
    {name: '20:00', price: '32'},
    {name: '22:00', price: '12'},
    {name: '24:00', price: '2'},
]

const PersonalCabinetStatistics: React.FC<Props> = () => {

    const classes = useStyles()
    const [agent, setAgent] = useState<string>(listAgents[0].label)

    return (
        <div>
            <div style={{display: 'flex', alignItems: "center"}}>
                <Typography>Агент :</Typography>
                <BaseDropDown
                    value={agent}
                    options={listAgents}
                    placeholder={agent}
                    onChange={(e) => setAgent(e)}
                    className={classes.dropDown}
                />
            </div>

            <div className={css.columnGrid}>
                <ClosedApplicationsMonth table={tableClosingByMonth} title={"Закрытые заявки по месяцам"}/>
                <ActionPeriod agentActivity={agentsActivity} title={"Активность агентов за период"}/>
                <RevenueMonth table={tableRevenue} title={"Выручка по месяцам"}/>
                <WorkloadWork  table={tableActiveDay} title={"Загруженность в течении дня"}/>
            </div>
        </div>

    )
}

export default PersonalCabinetStatistics