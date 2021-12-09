import React, { useState } from "react";
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CalendarIcon from "../../../icons/CalendarIcon/CalendarIcon";
import { BaseInput } from "../BaseInput/Input";
import Typography from "../Typography/Typography";
import ru from "date-fns/locale/ru";
import s from './BaseDatePicker.module.scss'
registerLocale('ru', ru)
interface Props {
    label?: string
}

const BaseDatePicker: React.FC<Props> = ({ label }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    console.log(startDate > endDate)

    return (
        <div>
            {label && <Typography className={s.label}>{label}</Typography>}
            <div className={s.wrapper}>
                <DatePicker
                    locale="ru"
                    selected={startDate}
                    maxDate={endDate}
                    onChange={(date: any) => setStartDate(date)}
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
                    onChange={(date: any) => setEndDate(date)}
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