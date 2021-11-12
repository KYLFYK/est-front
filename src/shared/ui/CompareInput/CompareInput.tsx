import classNames from 'classnames'
import s from './CompareInput.module.scss'

interface Props {
    Icon?: string | JSX.Element,
    classNameWrapper?: string,
    classNameInput?: string,
    onChangeFrom: (value: string) => void,
    onChangeTo: (value: string) => void,
    valueFrom?: string,
    valueTo?: string,
    placeholderFrom?: string,
    placeholderTo?: string
}


export const CompareInput: React.FC<Props> = ({ classNameWrapper, classNameInput, Icon, valueFrom = '', valueTo = '', placeholderFrom, placeholderTo, onChangeFrom, onChangeTo }) => {
    return (
        <div className={classNames(s.wrapper, classNameWrapper)}>
            <input type="number" className={classNames(s.input, classNameInput)} placeholder={placeholderFrom} value={valueFrom} onChange={(event => onChangeFrom(event.target.value))} />
            <div className={s.divider} />
            <input type="number" className={classNames(s.input,classNameInput)} placeholder={placeholderTo} value={valueTo} onChange={(event => onChangeTo(event.target.value))} style={{
                marginRight: Icon ? 30 : 0
            }}/>
            <span className={s.icon}>{Icon}</span>
        </div>
    )
}