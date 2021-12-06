// тут описываем горизонтальный подтаб "Статистика", который является частью таба "Заявки на просмотр"

import ActionPeriod from "../../Others/Tables/Table/ActionPeriod";

interface Props {

}
const agentsActivity = {
    month: 'Сентябрь 2021',
    monthActive: '6',
    monthNotActive: '12',
    monthAll: '23',
    year: '2021',
    yearActive:'6',
    yearNotActive:'12',
    allYear:'23'
}
const ApplicationsViewStatistics: React.FC<Props> = () => {
    return (
        <div>
            <ActionPeriod
                left={'Продано'}
                center={'Активные объявления'}
                right={'Архив'}
                title={'Итоги по объектам за период'}
                agentActivity={agentsActivity}
            />
        </div>
    )
}

export default ApplicationsViewStatistics