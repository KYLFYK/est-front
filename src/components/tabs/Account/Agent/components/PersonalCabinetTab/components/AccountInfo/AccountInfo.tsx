// тут описываем горизонтальный подтаб "Аккаунт агенства", который является частью таба "Заявки на просмотр"
import css from './AccountInfo.module.scss'
import Typography from "../../../../../../../shared/Typography/Typography";
import BaseButton from "../../../../../../../shared/BaseButton/BaseButtons";
import Image from 'next/image'
import imgMoc from './logoFalse.svg'
import {Card} from "../../../../../../../shared/Mortgage/Card";
import { FC } from 'react';

type PersonalCabinetAccountInfoType = {
    img?:string
    statusVerification : 'confirmed' | 'waiting' | 'notConfirmed' | 'resend'
    info:Array<{label:string,value:string}>
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

const PersonalCabinetAccountInfo: React.FC<PersonalCabinetAccountInfoType> = ({img,statusVerification,info,onEdit}) => {
    const apiStatus = () => {
        console.log('apiStatus')
    }
    return (
        <div>
            <div className={css.column}>
                <div>
                    <Typography weight={"bold"}>Логитип</Typography>
                    <Card className={css.card}>
                        <Image src={img ? img : imgMoc } width={88} height={88}/>
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
                                statusVerificationTitle(statusVerification)
                            }
                        </Typography>
                    </BaseButton>
                </div>
            </div>
            <Typography  weight={"bold"} className={css.marginText}>
                Аккаунт
            </Typography>
            <div className={css.df_w}>
                {
                    info.map(({label,value},index)=>(
                        <DataTypography key={index} title={label} value={value}/>
                    ))
                }
            </div>
        </div>
    )
}

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
