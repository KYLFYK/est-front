import React from 'react'
import HeadLine from '../../../shared/HeadLine/HeadLine'
import SampleImage from '../assets/planning_sample.png'
import Card from '../Card/Card'
import s from './Plannings.module.scss'
import {datetoQuarterFormat} from '../../../../lib/mapping/objectDates'

// TODO: Take types from 'model' folder, when global state gets its types

interface IObjectPlanningItem {
    file: {id: number, url: string}[],
    price: number,
    title: string,
    housing: number,
    deadline: string,
    floor: number
}

interface Props {
    FilterComponent: JSX.Element,
    planningList?: IObjectPlanningItem[]
}

const Planning: React.FC<Props> = ({ FilterComponent, planningList }) => {

    return (
        <div className={s.container}>
            <HeadLine title="Квартиры и аппартаменты">
                <div className={s.filterWrapper}>
                    {FilterComponent}
                </div>
                <div className={s.content}>
                    {planningList && planningList.map(({ file, price, title, housing, deadline, floor }, idx) =>
                        <Card key={idx} image={file ? file[0].url : ''} price={price} title={title} housing={housing} deadline={datetoQuarterFormat(deadline)} floor={floor} />)}
                </div>
            </HeadLine>
        </div>
    )
}

export default Planning