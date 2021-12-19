// тут описываем горизонтальный подтаб "Агенты", который является частью таба "Заявки на просмотр"
import {BaseInput} from "../../../../../../../shared/BaseInput/Input";
import BaseButton from "../../../../../../../shared/BaseButton/BaseButtons";
import Typography from "../../../../../../../shared/Typography/Typography";
import {ActualObject} from "./AgentsTable";
import css from './Agents.module.scss'

type PersonalCabinetAgentsType = {
    agents:Array<{
    name:string,
    status:number,
    experience:string,
    phone:string,
    email:string
    rating:number,
    url:string,
    id:number}>
}

const PersonalCabinetAgents: React.FC<PersonalCabinetAgentsType> = ({agents}) => {
    return (
        <div>
            <div className={css.df}>
                <BaseInput type={"search"} className={css.input} />
                <BaseButton type={"secondary"} isActive>
                    <Typography color={"secondary"}>
                        Добавить агента
                    </Typography>
                </BaseButton>
            </div>
            <ActualObject agents={agents}/>
        </div>
    )
}

export default PersonalCabinetAgents