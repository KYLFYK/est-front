// тут описываем горизонтальный подтаб "Аккаунт агенства", который является частью таба "Заявки на просмотр"
import Typography from "../../../../../../../../../shared/Typography/Typography";
import BaseButton from "../../../../../../../../../shared/BaseButton/BaseButtons";
import Image from 'next/image'
import imgMoc from './logoFalse.svg'
import {Card} from "../../../../../../../../../shared/Mortgage/Card";
import { FC } from 'react';
import css from './AccountInfo.module.scss'
import { myLoader } from "src/utils/image/image";
import {observer} from "mobx-react-lite";
import {useStoreAgencyCabinet} from "../../../../../../../../../../mobx/role/agency/cabinet/AgencyCabinet";

type PersonalCabinetAccountInfoType = {
    onEdit:()=>void
}
const statusVerificationTitle = (status:string) => {
    switch (status){
        case 'resend' : return 'Отправьте повторно данные'
        case 'waiting' :  return 'Ожидает проверки'
        case 'confirmed' :  return 'Подтверждён'
        case 'notConfirmed' : return 'Пройти верификацию'
        default: return 'Пройти верификацию'
    }
}

const PersonalCabinetAccountInfo: React.FC<PersonalCabinetAccountInfoType> = observer(({onEdit}) => {

    const store = useStoreAgencyCabinet()

    const apiStatus = () => {

    }

    return (
        <div>
            <div className={css.column}>
                <div>
                    <Typography weight={"bold"}>Логотип</Typography>
                    <Card className={css.card}>
                        <Image
                            src={store.initialData.img }
                            loader={(e)=>myLoader(e.src,e.width,e.quality)}
                            width={88} height={88} alt={'photo'}/>
                    </Card>
                </div>
                <div className={css.df}>
                    <BaseButton type={"secondary"} className={css.margin} onClick={onEdit}>
                        <Typography size={"small"} >
                            Редактировать аккаунт
                        </Typography>
                    </BaseButton>
                    <BaseButton type={"secondary"} isActive className={css.margin} onClick={apiStatus}>
                        <Typography size={"small"} color={"secondary"} >
                            {
                                statusVerificationTitle(store.initialData.statusVerification)
                            }
                        </Typography>
                    </BaseButton>
                </div>
            </div>
            <Typography  weight={"bold"} className={css.marginText}>
                Аккаунт
            </Typography>
            <div className={css.dg_w}>
                {
                    store.initialData.info.map(({label,value},index)=>(
                        <DataTypography key={index} title={label} value={value}/>
                    ))
                }
            </div>
            <div className={css.columnAccount}>
                {
                    store.initialData.descriptionAccount.map(({label,value},index)=>(
                        <DataTypography key={index} title={label} value={value}/>
                    ))
                }
            </div>
        </div>
    )
})

export default PersonalCabinetAccountInfo

type DataTypographyType = {
    title:string
    value:string
}

const DataTypography :FC<DataTypographyType> = ({title,value}) => {
    return (
        <div className={css.marginTextBlock}>
            <Typography color={"tertiary"} className={css.marginText}>
                {title}
            </Typography>
            <Typography color={"accent"} className={css.marginText}>
                {value}
            </Typography>
        </div>
    )
}
