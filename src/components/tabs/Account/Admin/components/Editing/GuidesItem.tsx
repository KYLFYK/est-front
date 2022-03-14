import React, {FC, useEffect, useState} from 'react';
import css from "./editing.module.scss";
import Typography from "../../../../../shared/Typography/Typography";
import TypeObjectEdit from "./TypeObjectEdit";
import VisionCheckboxType from "./VisionCheboxType";
import {observer} from "mobx-react-lite";
import {AdminEditingStore} from "../../../../../../mobx/role/admin/editing/editing";

type GuideItemType = {
    guides: {
        type_en:string
        type_ru:string
        info:Array<GuideInfoType>
    }
    indexGuides:number
}

export const typeObjectsVision = ['house', 'apartment', 'townhouse', 'complex', 'land']

export type GuideInfoType = {
    id: number
    isMulti: boolean
    subtitle_en: string
    subtitle_ru: string
    type_en: string
    type_ru: string
    value: string
    for: Array<string>
}

export const GuideItem: FC<GuideItemType> = observer(({guides,indexGuides}) => {

    const {update} = AdminEditingStore

    const [edit, setEdit] = useState<null | string>(null)
    const [activeType, setActiveType] = useState<number>(0)
    const [guideInfo, setGuideInfo] = useState<Array<string>>(guides.info[activeType].for)
    const [objectGuides, setObjectGuides] = useState<any>(guides)

    const activeMenu = (e: string | null, index: number, guide: any) => {
        setEdit(e)
        setActiveType(index)
        setGuideInfo(guides.info[index].for)
        if (e === edit) {
            setEdit(null)
        }
    }

    useEffect(() => {
        setGuideInfo(guides.info[activeType].for)
        setObjectGuides(guides)
    }, [])

    const onCheckedType = (title: string, indexType: number) => {
        if (guideInfo !== null) {
            const icon =  JSON.parse(JSON.stringify(guideInfo))
            let deleteMode = false
            for (let x = 0; x < guideInfo.length; x++) {
                if (icon[x] === title) {
                    icon.splice(x, 1)
                    deleteMode = true
                }
            }
            if (!deleteMode) icon.push(title)
            console.log(JSON.parse(JSON.stringify(guideInfo)))
            console.log(icon)
            setGuideInfo(icon)
            update(icon,indexGuides,activeType)
        }
        guides.info[activeType].for
    }

    return (
        <div>
            <div className={css.grid_3}>
                <div>
                    <Typography>
                        Тип
                    </Typography>
                </div>
                <div className={css.checkbox}>
                    <Typography className={css.marginColumn}>
                        Мулити
                    </Typography>
                </div>
                <div>
                    <Typography>
                        Отображение
                    </Typography>
                </div>

            </div>
            <div style={{display: 'flex', margin: "10px 0"}}>
                <div style={{display: 'flex'}}>
                    <div>
                        {
                            objectGuides && objectGuides.info && objectGuides.info.map((guide: any, index: number) => (
                                <TypeObjectEdit
                                    index={index}
                                    activeMenu={edit}
                                    key={index}
                                    guide={guide}
                                    onClick={(e) => activeMenu(e, index, guide)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div style={{marginLeft: '40px'}}>
                    {
                        edit !== null &&
                        <div>
                            {
                                guideInfo && guideInfo.map((vision: any, index: number) => (
                                    <VisionCheckboxType
                                        key={index}
                                        vision={vision}
                                        index={index}
                                        guideInfo={guideInfo}
                                        onCheckedType={e => onCheckedType(e, index)}
                                    />
                                ))
                            }
                            {
                                <div>
                                    {
                                        guideInfo && typeObjectsVision.map((vision, index) => {
                                            const vis = guideInfo.some((guide: any) => guide === vision)
                                            return !vis && <VisionCheckboxType
                                                key={`${index}+"+1312"`}
                                                vision={vision}
                                                index={index}
                                                guideInfo={guideInfo}
                                                onCheckedType={e => onCheckedType(e, index)}
                                            />
                                        })
                                    }
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>

    )
})
