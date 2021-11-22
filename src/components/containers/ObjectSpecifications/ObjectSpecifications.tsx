import React from "react"
import InfrastructureAnalysis from "../../../icons/Advantages/InfrastructureAnalysis"
import FavoriteIcon from "../../../icons/Favorite/Favorite"
import { HouseIcon } from "../../../icons/Specifications/House"
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

const ObjectSpecifications: React.FC<Props> = ({ specificationsLists, title }) => {
    return (
        <HeadLine title={title}>
            {specificationsLists.map((specList, idx) => {
                return <div key={idx}>
                    <Typography weight="bold" className={s.subTitle}>{specList.subtitle}</Typography>
                    <div className={s.specsList}>
                        {specList.specificationsItems.map((spec) =>
                            <Advantage variant="secondary" text={spec.label.text} title={spec.label.title} key={spec.value}>
                                {searchIconByValue(spec.value as string)}
                            </Advantage>
                        )}
                    </div>
                </div>
            })}
        </HeadLine>
    )
}

export default ObjectSpecifications