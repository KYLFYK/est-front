import {FC, useEffect} from "react";
import { AvatarSection } from "../../../../../shared/AvatarSection";
import { ProfileForm } from "./ProfileForm";
import {useStoreDeveloperCabinet} from "../../../../../../mobx/role/developer/cabinet/DeveloperCabinet";
import styles from "./Account.module.scss";
import {observer} from "mobx-react-lite";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";
import Typography from "../../../../../shared/Typography/Typography";

type AccountDeveloperType={
    onEdit:()=>void
}

export const Account: FC<AccountDeveloperType> = observer(({onEdit}) => {
  const store = useStoreDeveloperCabinet()

  return (
    <div className={styles.wrapper}>
        {
            store.initialData.loading
                ?<div style={{width:"100%"}}>
                    <div style={{display:'flex',justifyContent:'space-between',width:"100%"}}>
                        <div>
                            <Typography weight={"bold"} className={styles.marginB_20}>
                                Логотип
                            </Typography>
                            <AvatarSection
                                activeUpload={false}
                                src={store.initialData.account.src}
                                changeable
                            />
                        </div>

                        <div style={{display:"flex"}}>
                            <div style={{height:'40px'}}>
                                <BaseButton className={styles.buttonHeight}  isActive type={"secondary"}>
                                    Пройти идентификацию
                                </BaseButton>
                            </div>
                            <div style={{height:'40px'}}>
                                <BaseButton onClick={onEdit} className={styles.buttonHeight} type={"secondary"}>
                                    Редактировать аккаунт
                                </BaseButton>
                            </div>

                        </div>
                    </div>


                <ProfileForm profileForm={store.initialData.account.profileForm} onEdit={onEdit} />
                </div>
            : <h2>loader </h2>
        }

    </div>
  );
})
