import css from './Registration.module.scss'
import {InputAlways} from "../input/InputAlways";
import {InputPassword} from "../input/InputPassword";
import {InputOptional} from "../input/InputOptional";

export const InputContainerRegistration = () => {
    return (
        <div className={css.lForm}>
            <div className={css.form}>
                <InputAlways title={'Логин *'}/>
                <InputAlways title={'Email *'}/>
                <InputPassword />
                <InputOptional title={'Имя'} />
                <InputOptional title={'Телефон'} />
            </div>
        </div>
    );
};