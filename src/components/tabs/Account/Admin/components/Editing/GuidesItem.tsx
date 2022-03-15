import React, {FC, useEffect, useState} from 'react';
import css from "./editing.module.scss";
import Typography from "../../../../../shared/Typography/Typography";
import TypeObjectEdit from "./TypeObjectEdit";
import VisionCheckboxType from "./VisionCheboxType";
import {observer} from "mobx-react-lite";
import {AdminEditingStore} from "../../../../../../mobx/role/admin/editing/editing";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";
import {Modal} from "../../../../../shared/Modal/Modal";
import AddGuide from "./AddGuide";

type GuideItemType = {
    guides: {
        type_en: string
        type_ru: string
        info: Array<GuideInfoType>
    }
    indexGuides: number
}

export const typeObjectsVision = ['house', 'apartment', 'townhouse', 'complex', 'land']

export type GuideInfoType = {
    id?: number
    isMulti: boolean
    subtitle_en: string
    subtitle_ru: string
    type_en: string
    type_ru: string
    value: string
    for: Array<string>
}

export const GuideItem: FC<GuideItemType> = observer(({guides, indexGuides}) => {

    const {update,addGuide,removeGuide,fetch,updatePut} = AdminEditingStore

    const [edit, setEdit] = useState<null | string>(null)
    const [activeType, setActiveType] = useState<number>(0)
    const [guideInfo, setGuideInfo] = useState<Array<string>>(guides.info[activeType].for)
    const [objectGuides, setObjectGuides] = useState<any>(guides)

    const [editDisplayFor, setEditDisplayFor] = useState<boolean>(false)
    const [editType, setEditType] = useState<boolean>(false)

    const [removeId, setRemoveId] = useState<number>(0)
    const [removeName, setRemoveName] = useState<string>('')
    const [modalRemove, setModalRemove] = useState<boolean>(false)

    const [addType, setAddType] = useState<boolean>(false)

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
        if (editDisplayFor) {
            if (guideInfo !== null) {
                const iconsFor = JSON.parse(JSON.stringify(guideInfo))
                let deleteMode = false
                for (let x = 0; x < guideInfo.length; x++) {
                    if (iconsFor[x] === title) {
                        iconsFor.splice(x, 1)
                        deleteMode = true
                    }
                }
                if (!deleteMode) iconsFor.push(title)
                setGuideInfo(iconsFor)
                update(iconsFor, indexGuides, activeType)
            }
        }
    }

    const addTypeGuide = async (type_en: string, type_ru: string, value: string, visionObject: Array<string>) => {
        const newTypeGuide : GuideInfoType = {
            type_en: type_en,
            type_ru: type_ru,
            value: value,
            for: visionObject,
            subtitle_ru: objectGuides.info[0].subtitle_ru,
            subtitle_en: objectGuides.info[0].subtitle_en,
            isMulti: objectGuides.info[0].isMulti
        }
        await addGuide(newTypeGuide)
        setTimeout(()=>{
            fetch()
        },100)
        setAddType(!addType)
    }

    const deleteItem =  (id: number, nameType: string) => {
        setRemoveId(id)
        setModalRemove(!modalRemove)
        setRemoveName(nameType)
        console.log(123123)
    }

    const removeIcon = async() => {
        setModalRemove(!modalRemove)
        await removeGuide(removeId)
        fetch()
    }
    const backRemove = () => {
        setModalRemove(!modalRemove)
    }

    const updateGuide = async () => {
        if(editDisplayFor){
            await updatePut(objectGuides.info[activeType].id, indexGuides, activeType)
        }
    }

    // console.log(123, JSON.parse(JSON.stringify(objectGuides)))

    return (
        <div>
            <div className={css.grid_3}>
                <div style={{display: 'flex'}}>
                    <Typography>
                        Тип
                    </Typography>
                    <div className={css.iconEdit} onClick={() => setEditType(!editType)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z"
                                fill={editType ? "#3D4550" : "#cccccc"}/>
                        </svg>
                    </div>
                </div>
                <div className={css.checkbox}>
                    <Typography className={css.marginColumn}>
                        Мулити
                    </Typography>
                </div>
                <div style={{display: 'flex'}}>
                    <Typography>
                        Отображение
                    </Typography>
                    <div className={css.iconEdit} onClick={() => setEditDisplayFor(!editDisplayFor)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z"
                                fill={editDisplayFor ? "#3D4550" : "#cccccc"}/>
                        </svg>
                    </div>
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
                                    disable={editType}
                                    onDelete={() => deleteItem(guide.id, `${guide.type_ru} - ${guide.value}`)}
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
                                        disable={editDisplayFor}
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
                                                disable={editDisplayFor}
                                            />
                                        })
                                    }
                                </div>
                            }
                        </div>
                    }
                </div>

            </div>

            <div style={{display:'flex'}}>
                <BaseButton onClick={() => setAddType(!addType)} type={"secondary"} isActive>
                    <Typography size={"small"} color={"secondary"}>
                        Добавить тип
                    </Typography>
                </BaseButton>
                <div style={{marginLeft:"300px"}}>
                    <BaseButton onClick={updateGuide} type={"secondary"} isActive={editDisplayFor}>
                        <Typography size={"small"} color={editDisplayFor?"secondary":"tertiary"}>
                            Редактировать
                        </Typography>
                    </BaseButton>
                </div>
            </div>
            {
                <Modal
                    setActive={() => setAddType(!addType)}
                    active={addType}
                    className={css.modalAdd}
                >
                    <AddGuide
                        onExit={() => setAddType(false)}
                        onCreate={(type_en, type_ru, value, visionObject) => addTypeGuide(type_en, type_ru, value, visionObject)}
                    />
                </Modal>
            }
            {
                <Modal
                    setActive={() => setModalRemove(!modalRemove)}
                    active={modalRemove}
                    className={css.modalAdd}
                >
                    <div className={css.styleModalRemove}>
                        <Typography>
                            Подтвердите удаление иконки :
                        </Typography>
                        <Typography color={"nude"}>
                            {
                                removeName
                            }
                        </Typography>
                        <div className={css.df_mT_20}>
                            <BaseButton
                                type={'secondary'}
                                isActive
                                className={css.m_RL_10}
                                onClick={removeIcon}
                            >
                                удалить
                            </BaseButton>
                            <BaseButton
                                onClick={backRemove}
                            >
                                отмена
                            </BaseButton>
                        </div>

                    </div>

                </Modal>
            }

        </div>

    )
})
