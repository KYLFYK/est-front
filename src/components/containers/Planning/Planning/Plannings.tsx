import React from 'react'
import HeadLine from '../../../shared/HeadLine/HeadLine'
import SampleImage from '../assets/planning_sample.png'
import Card from '../Card/Card'
import s from './Plannings.module.scss'

// TODO: Take types from 'model' folder, when global state gets its types
interface Props {
    FilterComponent: JSX.Element,
    planningList: {
        image: string,
        price: number,
        title: string,
        housing: number,
        deadline: string,
        floor: number
    }[]
}
const Planning: React.FC<Props> = ({ FilterComponent, planningList }) => {
    return (
        <HeadLine title="Квартиры и аппартаменты">
            <div className={s.filterWrapper}>
                {FilterComponent}
            </div>
            <div className={s.content}>
                {planningList.map(({ image, price, title, housing, deadline, floor }, idx) =>
                    <Card key={idx} image={SampleImage} price={price} title={title} housing={housing} deadline={deadline} floor={floor} />)}
            </div>
        </HeadLine>
    )
}

export default Planning