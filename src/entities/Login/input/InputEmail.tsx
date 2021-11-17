import {useState} from "react";
import css from './input.module.scss'
type InputPropsType ={
    placeholder:string
}

export const InputEmail: React.FC<InputPropsType> = ({placeholder}) => {

    // const value  = useSelector<AppStateType , string>(state => state.....)

    const [value, setValue] = useState<string>('') // temporarily

    const searchValue = (e: string) => {
        setValue(e)
        // dispatch (... (e))
        // console.log(e)
    }

    return (
        <>
            <input
                type="text"
                value={value}
                className={css.inputEmail}
                placeholder={placeholder}
                onChange={(e) => searchValue(e.currentTarget.value)}
            />
        </>
    );
};