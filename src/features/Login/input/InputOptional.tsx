import css from './input.module.scss'
type InputTPropsType ={
    title:string
}

export const InputOptional :React.FC<InputTPropsType> = ({title}) => {
    return (
        <div className={css.form__div}>
            <input type="text" className={css.form__input} placeholder=" " />
            <label htmlFor="" className={css.form__label}>{title}</label>
        </div>
    );
};