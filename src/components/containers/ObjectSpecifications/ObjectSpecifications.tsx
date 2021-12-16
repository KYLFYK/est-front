import React from "react"
import { searchIconByValue } from "../../../utils/general/icons"
import { IOption } from "../../../utils/interfaces/general"
import { Advantage } from "../../shared/Advantage/Advantage"
import HeadLine from "../../shared/HeadLine/HeadLine"
import Typography from "../../shared/Typography/Typography"
import s from './ObjectSpecifications.module.scss'

export interface ISpecificationItem {
    title: string,
    text?: string,
}

export interface ISpecificationsList {
    subtitle: string,
    specificationsItems: IOption<ISpecificationItem>[]
}

interface Props {
    specificationsLists: ISpecificationsList[],
    title: string
}

const ObjectSpecifications: React.FC<any> = ({ specificationsLists, title }) => {
    return (
        <div className={s.container}>
            <HeadLine title={title}>
                {specificationsLists.map((specList:any, idx:number) => {
                    return <div key={idx}>
                        <Typography weight="bold" className={s.subTitle}>{specList.subtitle}</Typography>
                        <div className={s.specsList}>
                            {specList.specificationsItems.map((spec:any,index:number) =>
                                <Advantage variant="secondary" text={spec.label.text} title={spec.label.title} key={index}>
                                    {searchIconByValue(spec.value as string)}
                                </Advantage>
                            )}
                        </div>
                    </div>
                })}
            </HeadLine>
        </div>
    )
}

export default ObjectSpecifications