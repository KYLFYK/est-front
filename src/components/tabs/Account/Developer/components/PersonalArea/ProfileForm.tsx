import {FC, useState} from "react";
import {BaseInput} from "../../../../../shared/BaseInput/Input";

import styles from "./Account.module.scss";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";
import {BaseTextarea} from "../../../../../shared/BaseTextarea/BaseTextarea";
import {observer} from "mobx-react-lite";

interface FormValues {
    name: string;
    type: string;
    address: string;
    phone: string;
    email: string;
    site: string;
    description: string;
}

type ProfileFormType = {
    profileForm: {
        name: string
        type: string;
        address: string;
        phone: string;
        email: string;
        site: string;
        description: string;
    };
}

export const ProfileForm: FC<ProfileFormType> = observer( ({profileForm}) => {
    const [formValues, setFormValues] = useState<FormValues>({
        name: profileForm.name,
        type: profileForm.type,
        address: profileForm.address,
        phone: profileForm.phone,
        email: profileForm.email,
        site: profileForm.site,
        description:profileForm.description});

    const handleFieldChange = (name: string, value: string) => {
        setFormValues({...formValues, [name]: value});
    };

    return (
        <div className={styles.profile}>
            <form>
                <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Название компании"
                    type="text"
                    name={"name"}
                    value={formValues.name}
                    onChange={(e) => {
                        handleFieldChange("name", e.currentTarget.value);
                    }}
                />
                <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Тип застройщика"
                    type="text"
                    name={"type"}
                    value={formValues.type}
                    onChange={(e) => {
                        handleFieldChange("type", e.currentTarget.value);
                    }}
                />
                <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Адрес"
                    type="text"
                    name={"address"}
                    value={formValues.address}
                    onChange={(e) => {
                        handleFieldChange("address", e.currentTarget.value);
                    }}
                />
                <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Телефон"
                    type="tel"
                    name={"phone"}
                    value={formValues.phone}
                    onChange={(e) => {
                        handleFieldChange("phone", e.currentTarget.value);
                    }}
                />
                <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Email"
                    type="text"
                    name={"email"}
                    value={formValues.email}
                    onChange={(e) => {
                        handleFieldChange("email", e.currentTarget.value);
                    }}
                />
                <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Сайт"
                    type="text"
                    name={"cite"}
                    value={formValues.site}
                    onChange={(e) => {
                        handleFieldChange("cite", e.currentTarget.value);
                    }}
                />

                {/*<BaseInput*/}
                {/*  classNameWrapper={styles.inputWrapper}*/}
                {/*  className={styles.input}*/}
                {/*  errorLabel=""*/}
                {/*  label="Описание"*/}
                {/*  type="text"*/}
                {/*  name={"description"}*/}
                {/*  value={formValues.description}*/}
                {/*  onChange={(e) => {*/}
                {/*    handleFieldChange("description", e.currentTarget.value);*/}
                {/*  }}*/}
                {/*/>*/}
                <BaseTextarea
                    classNameWrapper={styles.baseTextarea}
                    className={styles.baseTextarea}
                    style={{paddingLeft: '10px'}}
                    label={"Описание"}
                    value={formValues.description}
                    onChange={(e) => {
                        handleFieldChange("description", e.currentTarget.value);
                    }}

                />
            </form>
            <div>
                <BaseButton isActive type={"secondary"}>
                    Пройти идентификацию
                </BaseButton>
            </div>
        </div>
    );
})
