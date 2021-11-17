import { makeStyles } from "@material-ui/core"
import React, { useEffect } from "react"
import { PlanningFilterConfigs } from "."
import BaseButton from "../../shared/ui/BaseButton/BaseButtons"
import { BaseDropDown } from "../../shared/ui/BaseDropDown/BaseDropDown"
import { CompareInput } from "../../shared/ui/CompareInput/CompareInput"
import InputsUnion from "../../shared/ui/InputsUnion/InputsUnion"
import { ToggleButtons } from "../../shared/ui/ToggleButtons/ToggleButtons"
import Typography from "../../shared/ui/Typography/Typography"

interface Props {}

const useStyles = makeStyles(() => ({
    floorInput: {
        width: 60,
        "&:last-of-type": {
            width: 20
        }
    },
    inputs: {
        "&:last-of-type": {
            width: 70
        }
    },
    inputUnion: {
        width: 650
    },
    contentRow: {
        display: 'flex',
        gap: 7,
        flexWrap: 'wrap',
        "&:first-of-type": {
            marginBottom: 30
        }
    },
    dropdown: {
        maxWidth: 120
    },
    sortDropdown: {
        minWidth: 260
    },
    container: {
        display: 'flex',
        gap: 7,
        flexWrap: 'wrap'
    }
}))

// onSubmit and Filter Values will come from global state and observers
// Active values should store in local state

const PlanningFilter: React.FC<Props> = () => {
    const classes = useStyles()
    useEffect(() => {
        // here's action for load some filter values from backend and hold it in global store
    }, [])
    const tempFunc = () => { }
    return (
        <>
            <div className={classes.contentRow}>
                <BaseDropDown
                    className={classes.dropdown}
                    onChange={tempFunc}
                    placeholder={PlanningFilterConfigs.DROPDOWN_PLACEHOLDER}
                    options={PlanningFilterConfigs.DROPDOWN_FILTER_OPTIONS}
                    value={PlanningFilterConfigs.DROPDOWN_FILTER_OPTIONS[0].value as string} />

                <ToggleButtons activeValue={PlanningFilterConfigs.TOGGLE_BUTTONS_OPTIONS[0].value as string} items={PlanningFilterConfigs.TOGGLE_BUTTONS_OPTIONS} onChange={() => { }} />
                <div className={classes.container}>
                    <InputsUnion className={classes.inputUnion}>
                        <CompareInput classNameInput={classes.inputs} placeholderFrom="Цена от" placeholderTo="до" valueFrom={""} valueTo={""} onChangeFrom={tempFunc} onChangeTo={tempFunc} Icon={"₽"} />
                        <CompareInput classNameInput={classes.inputs} placeholderFrom="Площадь от" placeholderTo="до" valueFrom={""} valueTo={""} onChangeFrom={tempFunc} onChangeTo={tempFunc} Icon={"₽"} />
                        <CompareInput classNameInput={classes.floorInput} placeholderFrom="Этаж от" placeholderTo="до" valueFrom={""} valueTo={""} onChangeFrom={tempFunc} onChangeTo={tempFunc} />
                    </InputsUnion>
                    <BaseButton type="primary"> <Typography color="secondary" size="small">Применить</Typography> </BaseButton>
                </div>
            </div>
            <div className={classes.contentRow}>
                <BaseDropDown
                    className={classes.sortDropdown}
                    onChange={tempFunc}
                    placeholder={PlanningFilterConfigs.DROPDOWN_PLACEHOLDER}
                    options={PlanningFilterConfigs.SORT_FILTER_OPTIONS}
                    value={PlanningFilterConfigs.SORT_FILTER_OPTIONS[0].value as string} />
            </div>
        </>
    )
}

export default PlanningFilter