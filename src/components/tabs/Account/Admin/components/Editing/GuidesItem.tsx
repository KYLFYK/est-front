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
import {EditModalGuide} from './EditingModalGuide';
import IconEdit from "./IconEdit";

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

    const {update, addGuide, removeGuide, fetch, updatePut, updateValueGuidePut} = AdminEditingStore

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

    // const [optionAddDropDown, setOptionAddDropDown]= useState<Array<{label:string,value:string}>>(objectGuides.info.map((t:any)=>({value:t.type_en, label:t.type_ru})))
    const [valueOptionAddDropDown, setValueOptionAddDropDown]= useState<string>("Выберите тип")

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
    }, [guides])

    const array = objectGuides.info.map((t:any)=>({value:t.type_en, label:t.type_ru}))
    const arrayName:any = objectGuides.info.map((t:any)=>t.type_ru)
    // @ts-ignore
    const arrayName1 = [...new Set(arrayName)] // 'asdf','asdf','123'

    const option:any = []

    for(let x = 0 ; x < arrayName1.length ; x++){
        for (let i = 0 ; i < array.length ; i++){
            if( array[i].label===arrayName1[x]) {
                option.push(array[i])
                break
            }
        }
    }

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

    const addTypeGuide = async (type_en: string,  value: string, visionObject: Array<string>) => {
        const newTypeGuide: GuideInfoType = {
            type_en: type_en,
            type_ru: option.length === 1 ? option[0].label :  option.filter((opt:any)=> opt.value !== type_en)[0].label,
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
            setActiveIndexType(0)
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

    const updateValueGuide = async (value: string) => {
        const valueArray = value.split('-')
        const newTypeGuide: GuideInfoType = {
            type_en: objectGuides.info[activeIndexType].type_en,
            type_ru: valueArray[0].trim(),
            value: valueArray[1].trim(),
            for: guideInfoFor,
            subtitle_ru: objectGuides.info[0].subtitle_ru === null ? null : objectGuides.info[0].subtitle_ru,
            subtitle_en: objectGuides.info[0].subtitle_en === null ? null : objectGuides.info[0].subtitle_en,
            isMulti: objectGuides.info[0].isMulti,
        }
        if (newTypeGuide.subtitle_ru === null) {
            // @ts-ignore
            delete newTypeGuide.subtitle_ru
            // @ts-ignore
            delete newTypeGuide.subtitle_en
        }
        await updateValueGuidePut(objectGuides.info[activeIndexType].id, newTypeGuide)
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
        fetch()
    }

    // console.log(123, JSON.parse(JSON.stringify(objectGuides)))

    return (
        <div>
            <div className={css.grid_3}>
                <div className={css.df}>
                    <Typography>
                        Тип
                    </Typography>
                    <IconEdit
                        onEdit={() => setEditType(!editType)}
                        editType={editType}
                    />
                </div>
                <div className={css.checkbox}>
                    <Typography className={css.marginColumn}>
                        Мульти
                    </Typography>
                </div>
                <div className={css.df}>
                    <Typography>
                        Отображение
                    </Typography>
                    <IconEdit
                        onEdit={() => setEditDisplayFor(!editDisplayFor)}
                        editType={editDisplayFor}
                    />
                </div>

            </div>
            <div className={css.df_mTB_10}>
                <div className={css.df}>
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
                                    onDelete={() => {
                                        if(editType)deleteGuideItem(guide.id, `${guide.type_ru} - ${guide.value}`)
                                    }}
                                    onSaveValue={(value) => updateValueGuide(value)}
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

            <div className={css.df}>
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
                        option={option}
                        valueDropDown={valueOptionAddDropDown}
                        onDropDown={e=>setValueOptionAddDropDown(e)}
                        onExit={() => setAddActiveModal(false)}
                        onCreate={(type_en, value, visionObject) => addTypeGuide(type_en, value, visionObject)}
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
                        onBack={() => setModalRemove(!modalRemove)}
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


