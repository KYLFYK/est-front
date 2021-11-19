import { makeStyles } from "@material-ui/core"
import React, { useEffect } from "react"
import BaseButton from "../../shared/BaseButton/BaseButtons"
import { BaseDropDown } from "../../shared/BaseDropDown/BaseDropDown"
import { CompareInput } from "../../shared/CompareInput/CompareInput"
import InputsUnion from "../../shared/InputsUnion/InputsUnion"
import { ToggleButtons } from "../../shared/ToggleButtons/ToggleButtons"
import Typography from "../../shared/Typography/Typography"
import { DROPDOWN_FILTER_OPTIONS, DROPDOWN_PLACEHOLDER, SORT_FILTER_OPTIONS, TOGGLE_BUTTONS_OPTIONS } from "./config"


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
                    placeholder={DROPDOWN_PLACEHOLDER}
                    options={DROPDOWN_FILTER_OPTIONS}
                    value={DROPDOWN_FILTER_OPTIONS[0].value as string} />

                <ToggleButtons activeValue={TOGGLE_BUTTONS_OPTIONS[0].value as string} items={TOGGLE_BUTTONS_OPTIONS} onChange={() => { }} />
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
                    placeholder={DROPDOWN_PLACEHOLDER}
                    options={SORT_FILTER_OPTIONS}
                    value={SORT_FILTER_OPTIONS[0].value as string} />
            </div>
        </>
    )
}

export default PlanningFilter