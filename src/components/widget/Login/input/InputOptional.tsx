import css from './input.module.scss'
type InputTPropsType ={
    title:string
    value:string
    onChange:(e:string)=>void
}

export const InputOptional :React.FC<InputTPropsType> = ({title,value,onChange}) => {
    return (
        <div className={css.form__div}>
            <input
                type="text"
                className={css.form__input}
                value={value}
                onChange={e=>onChange(e.currentTarget.value)}
            />
            <label htmlFor="" className={css.form__label}>{title}</label>
        </div>
    );
};