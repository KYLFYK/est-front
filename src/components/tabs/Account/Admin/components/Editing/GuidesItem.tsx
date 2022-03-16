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

    const {update, addGuide, removeGuide, fetch, updatePut,updateValueGuidePut} = AdminEditingStore

    const [countEditFor, setCountEditFor] = useState<number>(0) // счетчик для оповещения изменения ( в случае перехода на другой Тип (1 колонка))
    const [modalCountEditFor, setModalCountEditFor] = useState<boolean>(false) // modal для оповещения в случае перехода без сохранения
    const [editOld, setEditOld] = useState<null | string>(null) // сообщение о старом типе ( в модалке )

    const [activeNameType, setActiveNameType] = useState<null | string>(null) //активный "Тип" (1 колонка)
    const [activeIndexType, setActiveIndexType] = useState<number>(0) //активный "Тип" (1 колонка) - index
    const [guideInfoFor, setGuideInfoFor] = useState<Array<string>>(guides.info[activeIndexType].for) // Колонка "Отображение" -массив (Апартаменты,ЖК,Дома ...)
    const [objectGuides, setObjectGuides] = useState<any>(guides) // 1 Объект( Заголовок: Мебель,Общие,Стро... экспертиза)

    const [editDisplayFor, setEditDisplayFor] = useState<boolean>(false) // Активизация Редактирования Колонки "Отображение"
    const [editType, setEditType] = useState<boolean>(false)// Активизация Редактирования Колонки "Тип"

    const [removeId, setRemoveId] = useState<number>(0) // id guide ( для удаления )
    const [removeName, setRemoveName] = useState<string>('') // Name (Холодильник,Кондиционер ) для модалка удаления
    const [modalRemove, setModalRemove] = useState<boolean>(false) // Активизация модалки Удаления

    const [addActiveModal, setAddActiveModal] = useState<boolean>(false) // Активизация модалки Создания

    const activeMenu = (e: string | null, index: number, guide: any) => {
        if (countEditFor === 0) {
            setActiveNameType(e)
            setActiveIndexType(index)
            setGuideInfoFor(guides.info[index].for)
            if (e === activeNameType) {
                setActiveNameType(null)
            }
        } else {
            setModalCountEditFor(true)
            setEditOld(activeNameType)
            setActiveNameType(e)
        }
    }

    useEffect(() => {
        setGuideInfoFor(guides.info[activeIndexType].for)
        setObjectGuides(guides)
    }, [])

    const onCheckedType = (title: string, indexType: number) => {
        let modalCountEdit = countEditFor
        if (editDisplayFor) {
            if (guideInfoFor !== null) {
                const iconsFor = [...guideInfoFor]
                let deleteMode = false
                for (let x = 0; x < guideInfoFor.length; x++) {
                    if (iconsFor[x] === title) {
                        iconsFor.splice(x, 1)
                        deleteMode = true
                    }
                }
                modalCountEdit = countEditFor - 1
                setCountEditFor(modalCountEdit)
                if (!deleteMode) {
                    iconsFor.push(title)
                    modalCountEdit = countEditFor + 1
                    setCountEditFor(modalCountEdit)
                }
                setGuideInfoFor(iconsFor)
                update(iconsFor, indexGuides, activeIndexType)
            }
        }
    }

    const addTypeGuide = async (type_en: string, type_ru: string, value: string, visionObject: Array<string>) => {
        const newTypeGuide: GuideInfoType = {
            type_en: type_en,
            type_ru: type_ru,
            value: value,
            for: visionObject,
            subtitle_ru: objectGuides.info[0].subtitle_ru,
            subtitle_en: objectGuides.info[0].subtitle_en,
            isMulti: objectGuides.info[0].isMulti
        }
        await addGuide(newTypeGuide)
        setTimeout(() => {
            fetch()
        }, 100)
        setAddActiveModal(!addActiveModal)
    }

    const deleteGuideItem = (id: number, nameType: string) => {
        setRemoveId(id)
        setModalRemove(!modalRemove)
        setRemoveName(nameType)
    }

    const removeIcon = async () => {
        setModalRemove(!modalRemove)
        await removeGuide(removeId, indexGuides, activeIndexType)
        fetch()
    }

    const updateGuide = async () => {
        if (editDisplayFor) {
            setCountEditFor(0)
            await updatePut(objectGuides.info[activeIndexType].id, indexGuides, activeIndexType)
        }
    }

    const updateValueGuide = async (value:string) =>{
        const valueArray = value.split('-')
        const newTypeGuide: GuideInfoType = {
            type_en: objectGuides.info[activeIndexType].type_en,
            type_ru: valueArray[0].trim(),
            value: valueArray[1].trim(),
            for: guideInfoFor,
            subtitle_ru: objectGuides.info[0].subtitle_ru,
            subtitle_en: objectGuides.info[0].subtitle_en,
            isMulti: objectGuides.info[0].isMulti,
        }
        console.log(newTypeGuide)
        await updateValueGuidePut(objectGuides.info[activeIndexType].id , newTypeGuide)
        fetch()
    }


    const editModalBackFor = async () => {
        setCountEditFor(0)
        setModalCountEditFor(false)
        await fetch()
    }

    const editModalFor = async () => {
        setCountEditFor(0)
        setModalCountEditFor(false)
        await updatePut(objectGuides.info[activeIndexType].id, indexGuides, activeIndexType)
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
                                    activeMenu={activeNameType}
                                    key={index}
                                    guide={guide}
                                    onClick={(e) => activeMenu(e, index, guide)}
                                    disable={editType}
                                    onDelete={() => deleteGuideItem(guide.id, `${guide.type_ru} - ${guide.value}`)}
                                    onSaveValue={(value)=>updateValueGuide(value)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div style={{marginLeft: '40px'}}>
                    {
                        activeNameType !== null &&
                        <div>
                            {
                                guideInfoFor && guideInfoFor.map((vision: any, index: number) => (
                                    <VisionCheckboxType
                                        key={index}
                                        vision={vision}
                                        index={index}
                                        guideInfo={guideInfoFor}
                                        onCheckedType={e => onCheckedType(e, index)}
                                        disable={editDisplayFor}
                                    />
                                ))
                            }
                            {
                                <div>
                                    {
                                        guideInfoFor && typeObjectsVision.map((vision, index) => {
                                            const vis = guideInfoFor.some((guide: any) => guide === vision)
                                            return !vis && <VisionCheckboxType
                                                key={`${index}+"+1312"`}
                                                vision={vision}
                                                index={index}
                                                guideInfo={guideInfoFor}
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

            <div style={{display: 'flex'}}>
                <BaseButton onClick={() => setAddActiveModal(!addActiveModal)} type={"secondary"} isActive>
                    <Typography size={"small"} color={"secondary"}>
                        Добавить тип
                    </Typography>
                </BaseButton>
                <div style={{marginLeft: "300px"}}>
                    <BaseButton onClick={updateGuide} type={"secondary"} isActive={editDisplayFor}>
                        <Typography size={"small"} color={editDisplayFor ? "secondary" : "tertiary"}>
                            Сохранить
                        </Typography>
                    </BaseButton>
                </div>
            </div>
            {
                <Modal
                    setActive={() => setAddActiveModal(!addActiveModal)}
                    active={addActiveModal}
                    className={css.modalAdd}
                >
                    <AddGuide
                        onExit={() => setAddActiveModal(false)}
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
                    <EditModalGuide
                        text={'Подтвердите удаление иконки :'}
                        editText={removeName}
                        onRemove={removeIcon}
                        onBack={()=>setModalRemove(!modalRemove)}
                        textRemove={'удалить'}
                    />
                </Modal>
            }
            {
                <Modal
                    setActive={() => setModalCountEditFor(!modalCountEditFor)}
                    active={modalCountEditFor}
                    className={css.modalAdd}
                >
                    <EditModalGuide
                        text={'Сохранить изменения ?'}
                        editText={editOld ? editOld : ""}
                        onRemove={editModalFor}
                        onBack={editModalBackFor}
                        textRemove={'изменить'}
                    />
                </Modal>
            }

        </div>

    )
})

type EditModalGuideType = {
    text: string
    editText: string
    onRemove: () => void
    onBack: () => void
    textRemove: string
}

const EditModalGuide: FC<EditModalGuideType> = ({text, editText, onRemove, onBack, textRemove}) => {
    return (
        <div className={css.styleModalRemove}>
            <Typography>
                {text}
            </Typography>
            <Typography color={"nude"}>
                {
                    editText
                }
            </Typography>
            <div className={css.df_mT_20}>
                <BaseButton
                    type={'secondary'}
                    isActive
                    className={css.m_RL_10}
                    onClick={onRemove}
                >
                    {textRemove}
                </BaseButton>
                <BaseButton
                    onClick={onBack}
                >
                    отмена
                </BaseButton>
            </div>

        </div>
    )
}
