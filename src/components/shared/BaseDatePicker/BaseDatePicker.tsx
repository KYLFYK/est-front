import React from "react";
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CalendarIcon from "../../../icons/CalendarIcon/CalendarIcon";
import { BaseInput } from "../BaseInput/Input";
import Typography from "../Typography/Typography";
import ru from "date-fns/locale/ru";
import s from './BaseDatePicker.module.scss'
registerLocale('ru', ru)
interface Props {
    label?: string,
    startDate: Date,
    endDate: Date,
    onChangeStartDate: (date: Date) => void,
    onChangeEndDate: (date: Date) => void
}

const BaseDatePicker: React.FC<Props> = ({ label, startDate, endDate, onChangeEndDate, onChangeStartDate }) => {

    return (
        <div>
            {label && <Typography className={s.label}>{label}</Typography>}
            <div className={s.wrapper}>
                <DatePicker
                    locale="ru"
                    selected={startDate}
                    maxDate={endDate}
                    onChange={(date: Date) => onChangeStartDate(date)}
                    customInput={(
                        <BaseInput className={s.input} />
                    )}
                    dateFormat="dd.MM.yyyy"
                />
                <div className={s.divider} />
                <DatePicker
                    locale="ru"
                    minDate={startDate}
                    selected={endDate}
                    onChange={(date: Date) => onChangeEndDate(date)}
                    customInput={(
                        <BaseInput className={s.input} />
                    )}
                    dateFormat="dd.MM.yyyy"
                />
                <CalendarIcon className={s.icon} width={20} height={25} />
            </div>
        </div>
    )
}

export default BaseDatePicker