import React, {FC, useEffect, useState} from "react";
import Typography from "../../../../../../shared/Typography/Typography";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import {BaseInput} from "../../../../../../shared/BaseInput/Input";
import css from "./PersonalAccountOwner.module.scss";
import UploadImage from "./UploadImage";
import {useStoreOwnerCabinet} from "../../../../../../../mobx/role/owner/cabinet/OwnerCabinet";
import {observer} from "mobx-react-lite";
import importImage from "../../../../Agent/components/PersonalCabinetTab/AccountEditAgent/ImportImage.svg";
import {AvatarSection} from "../../../../../../shared/AvatarSection";

type PersonalAccountType = {
    onEdit:()=>void
}

const PersonalAccountOwner: FC<PersonalAccountType> = observer(({onEdit}) => {
    const store = useStoreOwnerCabinet();

    useEffect(() => {
        store.fetch().then();
    }, [store]);

    // const [valueNewPassword, setValueNewPassword] = useState<string>("");

    return (
        <div className={css.padding}>
            <div className={css.headerTitle}>
                <Typography weight={"bold"}>
                    {store.initialData.name}
                </Typography>
                <div className={css.buttonColumn}>
                    <BaseButton
                        type={"secondary"}
                        className={css.mR_15}
                        onClick={onEdit}
                    >
                        <Typography size={"small"}>
                            Редактировать аккаунт
                        </Typography>
                    </BaseButton>
                    <BaseButton
                        type={"secondary"}
                        isActive
                        className={css.styleButtonAgent}
                    >
                        Стать агентом
                    </BaseButton>
                </div>
            </div>

            <div className={css.column}>
                <div>
                    <AvatarSection
                        src={
                            store.initialData.image && store.initialData.image
                                ? store.initialData.image
                                : importImage
                        }
                        changeable
                        activeUpload={false}
                        size={200}
                    />
                    <Typography weight={"bold"} className={css.headerAccount}>
                        Аккаунт
                    </Typography>
                    <div>
                        <Typography className={css.typographyMargin}>Имя</Typography>
                        <BaseInput
                            value={store.initialData.name}
                            className={css.inputStyle}
                            disabled
                        />
                    </div>
                    <div>
                        <Typography className={css.typographyMargin}>
                            Дата рождения
                        </Typography>
                        <BaseInput
                            value={store.initialData.dateBirth}
                            className={css.inputStyle}
                            disabled
                        />
                    </div>
                    <div className={css.df}>
                        <div style={{marginRight:'20px'}}>
                            <Typography className={css.typographyMargin}>
                                Телефон
                            </Typography>
                            <BaseInput
                                value={store.initialData.phone}
                                className={css.inputStyle}
                                disabled
                            />
                        </div>
                        <div>
                            <Typography className={css.typographyMargin}>
                                E-mail
                            </Typography>
                            <BaseInput
                                value={store.initialData.email}
                                className={css.inputStyle}
                                disabled
                            />
                        </div>
                    </div>
                </div>

                {/*<div>*/}
                {/*    <Typography weight={"bold"}>Личный данные</Typography>*/}
                {/*    <div className={css.df}>*/}
                {/*        <Typography className={css.typographyWidth}>Имя</Typography>*/}
                {/*        <BaseInput*/}
                {/*            value={store.initialData.firstName}*/}
                {/*            className={css.inputWidth}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className={css.df}>*/}
                {/*        <Typography className={css.typographyWidth}>Фамилия</Typography>*/}
                {/*        <BaseInput*/}
                {/*            value={store.initialData.secondName}*/}
                {/*            className={css.inputWidth}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className={css.df}>*/}
                {/*        <Typography className={css.typographyWidth}>*/}
                {/*            Дата рождения*/}
                {/*        </Typography>*/}
                {/*        <BaseInput*/}
                {/*            value={store.initialData.dateBirth}*/}
                {/*            className={css.inputWidth}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <Typography weight={"bold"} className={css.marginTop30}>*/}
                {/*        Контактные данные*/}
                {/*    </Typography>*/}
                {/*    <div className={css.df}>*/}
                {/*        <Typography className={css.typographyWidth}>*/}
                {/*            Номер телефона*/}
                {/*        </Typography>*/}
                {/*        <BaseInput*/}
                {/*            value={store.initialData.phone}*/}
                {/*            className={css.inputWidth}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className={css.df}>*/}
                {/*        <Typography className={css.typographyWidth}>Email</Typography>*/}
                {/*        <BaseInput*/}
                {/*            value={store.initialData.email}*/}
                {/*            className={css.inputWidth}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <Typography weight={"bold"} className={css.marginTop30}>*/}
                {/*        Сменить пароль*/}
                {/*    </Typography>*/}
                {/*    <div className={css.df}>*/}
                {/*        <Typography className={css.typographyWidth}>*/}
                {/*            Старый пароль*/}
                {/*        </Typography>*/}
                {/*        <BaseInput*/}
                {/*            value={store.initialData.password}*/}
                {/*            className={css.inputWidth}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className={css.df}>*/}
                {/*        <Typography className={css.typographyWidth}>*/}
                {/*            Новый пароль*/}
                {/*        </Typography>*/}
                {/*        <BaseInput*/}
                {/*            value={valueNewPassword}*/}
                {/*            onChange={(e) => setValueNewPassword(e.currentTarget.value)}*/}
                {/*            className={css.inputWidth}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
});

export default PersonalAccountOwner;
