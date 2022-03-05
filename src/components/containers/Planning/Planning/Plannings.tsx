import React, {useState} from 'react'
import Link from 'next/link'
import HeadLine from '../../../shared/HeadLine/HeadLine'
import SampleImage from '../assets/planning_sample.png'
import Card from '../Card/Card'
import s from './Plannings.module.scss'
import {datetoQuarterFormat} from '../../../../lib/mapping/objectDates'
import PlanningFilter from "../../../../../src/components/containers/PlanningFilter/PlanningFilter"

// TODO: Take types from 'model' folder, when global state gets its types

interface IObjectPlanningItem {
    file: {id: number, url: string}[],
    price: number,
    name: string,
    buildingNumber: number,
    deadline: string,
    floor: number,
    id: number,
}

interface Props {
    FilterComponent: JSX.Element,
    planningList?: IObjectPlanningItem[]
}

const Planning: React.FC<Props> = ({ FilterComponent, planningList }) => {

    const [sort, setSort] = useState('default')

    let list: any = []
    if(sort === 'default'){
        list = planningList?.sort((a: any, b: any) => a.id > b.id ? 1 : -1)
    } else if(sort === 'bigger'){
        list = planningList?.sort((a: any, b: any) => a.price > b.price ? 1 : -1)
    } else if(sort === 'smaller'){
        list = planningList?.sort((a: any, b: any) => a.price < b.price ? 1 : -1)
    }

    return (
        <div className={s.container}>
            <HeadLine title="Квартиры и аппартаменты">
                <div className={s.filterWrapper}>
                    <PlanningFilter sort={sort} setSort={setSort}/>
                </div>
                <div className={s.content}>
                    {planningList && planningList.map(({ file, price, name, buildingNumber, deadline, floor, id }, idx) =>
                        <Link href={`/apartment/${id}`}>
                            <a className={s.link}>
                                <Card 
                                    key={idx} 
                                    image={file ? file[0].url : ''} 
                                    price={price} 
                                    title={name} 
                                    housing={buildingNumber} 
                                    deadline={datetoQuarterFormat(deadline)} 
                                    floor={floor} 
                                />
                            </a>
                        </Link>
                    )}
                </div>
            </HeadLine>
        </div>
    )
}

export default Planning