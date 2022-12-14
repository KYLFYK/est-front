import React, {FC, useEffect, useState} from 'react';
import {AdminEditingStore} from "../../../../../../mobx/role/admin/editing/editing";
import {observer} from "mobx-react-lite";
import Typography from "../../../../../shared/Typography/Typography";
import css from './editing.module.scss'
import {GuideItem} from "./GuidesItem";
import {statusActiveApi} from "../../../../../shared/Loader/Loader";

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
            return 'Участки'
        default:
            return title
    }
}

const Editing = observer(() => {

    const {fetch, initialState,loaded,statusLoader} = AdminEditingStore

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div style={{padding:"0 20px"}} className={css.list}>
            {
                !loaded ? initialState?.map((t: any, index: number) => (
                    <GuidesHeader
                        key={index}
                        indexGuides={index}
                        guidesHeader={t}
                    />

                ))
                    : statusActiveApi(statusLoader)
            }
        </div>
    );
})

export default Editing;

type GuidesHeaderType = {
    guidesHeader: any
    indexGuides: number
}

const GuidesHeader: FC<GuidesHeaderType> = observer(({guidesHeader, indexGuides}) => {

    const [menu, setMenu] = useState<boolean>(false)

    return (
        <div >
            <div style={{display: 'flex'}}>
                <div onClick={() => setMenu(!menu)}>
                    <Typography weight={"medium"} className={css.guideHearer}>
                        {
                            guidesHeader.type_ru
                        }
                    </Typography>
                </div>
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