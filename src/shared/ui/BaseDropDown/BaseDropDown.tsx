import { MenuItem, Select } from "@material-ui/core"
import classNames from "classnames"
import React from "react"
import { SmallArrowIcon } from "../../icons/SmallArrow/SmallArrow"
import { IOption } from "../../lib/interfaces/general"
import { useStyles } from './styles'

interface Props {
    options: IOption[],
    value?: string,
    placeholder: string,
    className?: string,
    onChange: (value: string) => void,
}

export const BaseDropDown: React.FC<Props> = ({ options, value, placeholder, className, onChange }) => {
    const classes = useStyles()
    const handleOnChange = (event: React.ChangeEvent<{ name?: string | unknown, value: unknown }>) => {
        onChange(event.target.value as string)
    }
    const optionsMapMemo = React.useMemo(
        () => {
            const map = new Map<any, string>();
            for (const option of options)
                map.set(option.value, option.label);
            return map;
        }, [options]
    );
    const renderValue = (value: any) => {
        const _value = optionsMapMemo.get(value);
        return _value ? _value : placeholder;
    };
    return (
        <Select
            IconComponent={({ className }) => <SmallArrowIcon className={classNames(className, classes.icon)} />}
            className={classNames(classes.root, className)}
            renderValue={renderValue}
            displayEmpty={true}
            value={value === undefined || value === null ? "" : value}
            onChange={handleOnChange}
        >
            {options.map(({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>)}
        </Select>
    )
}