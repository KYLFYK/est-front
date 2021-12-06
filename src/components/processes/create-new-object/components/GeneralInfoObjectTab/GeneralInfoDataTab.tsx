import classNames from "classnames"
import React from "react"
import { isUndefined } from "../../../../../utils/general"
import { IOption } from "../../../../../utils/interfaces/general"
import { ObjectTypes } from "../../../../../utils/interfaces/objects"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import { BaseInput } from "../../../../shared/BaseInput/Input"
import CounterButtons from "../../../../shared/CounterButtons/CounterButtons"
import Typography from "../../../../shared/Typography/Typography"
import { getInitialStateGeneralInfoTab, TGeneralInfoState } from "../../lib"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import { GENERAL_INFO_TAB_STATUS_OPTIONS, GENERAL_INFO_TAB_TOGGLE_OPTIONS } from "./config"
import s from './GeneralInfoObjectTab.module.scss'

interface Props extends ICreateObjectControls {
    objectType: ObjectTypes
}

const GeneralInfoDataTab: React.FC<Props> = ({ onNextTab, onPrevTab, objectType }) => {
    const [values, setValues] = React.useState<TGeneralInfoState>()

    React.useEffect(() => {
        const initState = getInitialStateGeneralInfoTab(objectType)
        setValues(initState)
    }, [objectType])


    const onChangeFloors = (value: number) => {
        if ('floors' in values!) {
            let newFloorsList: IOption<{ description: string, height?: string }>[] = []
            const newFloor: IOption<{ description: string, height?: string }> = {
                value: value, label: { description: "", height: objectType === ObjectTypes.HOUSE ? "" : undefined }
            }
            if (value > values.floors.items.length)
                newFloorsList = [...values.floors.items, newFloor]
            else
                newFloorsList = values.floors.items.filter((item, idx) => idx !== values.floors.items.length - 1)
            values && setValues({ ...values, floors: { count: value, items: newFloorsList } })
        }
    }

    const onChangeFloorDesc = (description: string, value: string | number) => {
        if ('floors' in values!) {
            const newFloorsData = values.floors.items.map((item) => {
                if (item.value === value)
                    return ({ ...item, label: { ...item.label, description } })
                return { ...item }
            })
            setValues({ ...values, floors: { ...values.floors, items: newFloorsData } })
        }
    }

    const onChangeFloorHeight = (height: string, value: string | number) => {
        if ('floors' in values!) {
            const newFloorsData = values.floors.items.map((item) => {
                if (item.value === value)
                    return ({ ...item, label: { ...item.label, height } })
                return { ...item }
            })
            setValues({ ...values, floors: { ...values.floors, items: newFloorsData } })
        }
    }

    const onAddRoom = () => {
        if ('customRooms' in values!) {
            const newCustomRoomsList = [...values.customRooms, { value: values.rooms + 1, label: "" }]
            setValues({ ...values, customRooms: newCustomRoomsList, rooms: values.rooms + 1 })
        }
    }

    const onChangeRooms = (value: number) => {
        if ("customRooms" in values!) {
            const newCustomRooms = value > values.customRooms.length ?
                [...values.customRooms, { value: values.rooms + 1, label: "" }] :
                values.customRooms.filter((customRoom, idx) => values.customRooms.length - 1 !== idx)

            setValues({ ...values, customRooms: newCustomRooms, rooms: value })
        }
        else
            setValues({ ...values!, rooms: value })

    }

    const onChangeIsolatedInputs = (value: number) => {
        setValues({ ...values!, isolatedInputs: value })
    }
    if (!values) return null
    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title="Размеры объекта">
                {("generalSquare" in values) && <BaseInput
                    type="text"
                    label="Общая площадь"
                    className={s.inputSm}
                    icon={<Typography className={s.iconColor}>м²</Typography>}
                />}

                {("houseSquare" in values) && <BaseInput
                    type="text"
                    label="Площадь дома"
                    className={s.inputSm}
                    icon={<Typography className={s.iconColor}>м²</Typography>}
                />}
                {("livingSquare" in values) && <BaseInput
                    type="text"
                    label="Жилая площадь"
                    className={s.inputSm}
                    icon={<Typography className={s.iconColor}>м²</Typography>}
                />}
                {("land" in values) && <BaseInput
                    type="text"
                    label="Участок"
                    className={classNames(s.inputSm, s.largeIconSpace)}
                    classNameWrapper={s.extraSpace}
                    icon={<Typography className={s.iconColor}>соток</Typography>}
                />}
                {("landGeneralSquare" in values) && <BaseInput
                    type="number"
                    label="Общая площадь"
                    className={classNames(s.inputSm, s.largeIconSpace)}
                    classNameWrapper={s.extraSpace}
                    icon={<Typography className={s.iconColor}>соток</Typography>}
                />}
                {("ceilingHeight" in values) && <BaseInput
                    type="number"
                    label="Высота потолков"
                    className={s.inputSm}
                    icon={<Typography className={s.iconColor}>м</Typography>}
                />}
                {("rooms" in values) && <CounterButtons className={s.extraSpace} label="Комнат в доме" initValue={values.rooms} onChange={onChangeRooms} />}
                {("isolatedInputs" in values) && <CounterButtons label="Изолированных входов" initValue={values.isolatedInputs} onChange={onChangeIsolatedInputs} />}
            </InputsGroup>
            <div className={s.divider} />

            {objectType !== ObjectTypes.LAND ? (
                <InputsGroup title="Внутренние размеры объекта">
                    {("bathroom" in values) && <BaseInput
                        type="text"
                        label="Ванная комната"
                        className={s.inputSm}
                        icon={<Typography className={s.iconColor}>м²</Typography>}
                    />}
                    {("kitchen" in values) && <BaseInput
                        type="text"
                        label="Кухня"
                        className={s.inputSm}
                        classNameWrapper={s.extraSpace}
                        icon={<Typography className={s.iconColor}>м²</Typography>}
                    />}

                    {("customRooms" in values) &&
                        <>
                            {values.customRooms.map((room) => (
                                <BaseInput
                                    key={room.value}
                                    type="number"
                                    label="Комната"
                                    className={s.inputSm}
                                    icon={<Typography className={s.iconColor}>м²</Typography>}
                                />
                            ))}
                            <Typography onClick={onAddRoom} className={classNames(s.iconColor, s.newRoomLabel)}>+ Добавить комнату</Typography>
                        </>}

                    {("garage" in values) && (
                        <>
                            <BaseDropDown
                                options={GENERAL_INFO_TAB_TOGGLE_OPTIONS}
                                onChange={() => { }}
                                placeholder="Гараж" label="Гараж"
                                className={s.inputSm}

                            />

                            <BaseInput
                                type="text"
                                label="Вместимость"
                                className={s.inputSm}
                                icon={<Typography className={s.iconColor}>м/м</Typography>}
                            />

                            <BaseInput
                                type="text"
                                label="Площадь гаража"
                                className={s.inputSm}
                                classNameWrapper={s.extraSpace}
                                icon={<Typography className={s.iconColor}>м²</Typography>}
                            />
                        </>)}

                    {("pool" in values) && (
                        <>
                            <BaseDropDown
                                options={GENERAL_INFO_TAB_TOGGLE_OPTIONS}
                                onChange={() => { }}
                                placeholder="Бассейн" label="Бассейн"
                                className={s.inputSm}

                            />
                            <BaseInput
                                type="text"
                                label="Площадь бассейна"
                                className={s.inputSm}
                                icon={<Typography className={s.iconColor}>м²</Typography>}
                            />
                        </>)}

                </InputsGroup>) : (
                <>
                    <InputsGroup title="Коттеджный посёлок">
                        <BaseInput
                            type="text"
                            label="Название коттеджного посёлка"
                            className={s.inputMd}
                        />
                    </InputsGroup>
                    <div className={s.divider} />
                    <InputsGroup title="Статус участка">
                        <BaseDropDown
                            options={GENERAL_INFO_TAB_STATUS_OPTIONS}
                            onChange={() => { }}
                            placeholder="Статус" label="Статус"
                            className={s.dropdownStatus}

                        />
                    </InputsGroup>
                </>
            )}

            <div className={s.divider} />
            {('interiorDescription' in values) && (
                <InputsGroup title="Описание интерьера">
                    <BaseInput
                        type="text"
                        label="Описание комнат"
                        classNameWrapper={s.fullWidth}
                    />
                </InputsGroup>
            )}
            {"floors" in values && (
                <InputsGroup title="Описание интерьера по этажам">
                    <div className={s.extraSpace}>
                        <CounterButtons initValue={values.floors.count} onChange={onChangeFloors} label="Этажей в доме" />
                    </div>
                    <div className={s.floorInputs}>
                        {values.floors.items.map((item, idx) => (
                            <div key={idx} className={s.floorInputsGroup}>
                                <BaseInput onChange={(e) => onChangeFloorDesc(e.target.value, item.value)} classNameWrapper={s.floorInput} value={item.label.description} type="text" label={`${item.value} этаж`} />
                                {!isUndefined(item.label.height) &&
                                    <BaseInput
                                        onChange={(event) => onChangeFloorHeight(event.target.value, item.value)}
                                        value={item.label.height}
                                        type="number"
                                        label="Высота потолка"
                                        classNameWrapper={s.floorHeightInput}
                                        icon={<Typography className={s.iconColor}>м²</Typography>}
                                    />
                                }
                            </div>
                        ))}

                    </div>
                </InputsGroup>
            )}
        </ButtonPanel>
    )
}

export default GeneralInfoDataTab