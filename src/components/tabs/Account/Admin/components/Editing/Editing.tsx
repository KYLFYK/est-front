import React, {FC, useEffect, useState} from 'react';
import {AdminEditingStore} from "../../../../../../mobx/role/admin/editing/editing";
import {observer} from "mobx-react-lite";
import Typography from "../../../../../shared/Typography/Typography";
import css from './editing.module.scss'

import {GuideItem} from "./GuidesItem";

export const translate = (title: string) => {
    switch (title) {
        case 'house':
            return 'Дома'
        case 'apartment':
            return 'Апартаменты'
        case 'townhouse':
            return 'Таунхаусы'
        case 'complex':
            return 'ЖК'
        case 'land':
            return 'Участоки'
        default:
            return title
    }
}

const Editing = observer(() => {

    const {fetch, initialState} = AdminEditingStore

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            {
                initialState?.map((t: any, index:number) => (
                    <GuidesHeader
                        key={index}
                        indexGuides={index}
                        guidesHeader={t}
                    />

                ))
            }
        </div>
    );
})

export default Editing;

type GuidesHeaderType = {
    guidesHeader: any
    indexGuides:number
}

const GuidesHeader: FC<GuidesHeaderType> = observer(({guidesHeader,indexGuides}) => {

    const [menu, setMenu] = useState<boolean>(false)


    return (
        <div>
            <div onClick={() => setMenu(!menu)}>
                <Typography weight={"medium"} className={css.guideHearer}>
                    {
                        guidesHeader.type_ru
                    }
                </Typography>
            </div>
            {
                menu &&
                <GuideItem
                    guides={guidesHeader}
                    indexGuides={indexGuides}
                />
            }
        </div>
    )
})