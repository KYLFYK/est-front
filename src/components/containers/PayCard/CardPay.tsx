import {useRouter} from "next/router";
import css from "../../../../pages/pay/pay.module.scss";
import Typography from "../../shared/Typography/Typography";
import BaseButton from "../../shared/BaseButton/BaseButtons";
import React from "react";
import {useRecordStore} from "../../../mobx/record/record";

export const CardPay = () => {
    const router =useRouter()
    const store = useRecordStore

    const date = new Date()
    const someDate = new Date(date.toISOString().substr(0,10).split('-').join('-'));
    someDate.setDate(someDate.getDate() + 3 ); //number  of days to add, e.x. 15 days
    const dateFormated = someDate.toISOString().substr(0,10);

    return(
        <div className={css.cardFree}>
            <svg width="97" height="100" viewBox="0 0 97 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M54.438 93.7275L36.4336 73.6049L38.8014 71.4863L56.8058 91.6089L54.438 93.7275Z" fill="#CAD1DA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M43.9419 97.0032L25.9375 80.0578L28.1151 77.7441L46.1195 94.6895L43.9419 97.0032Z" fill="#CAD1DA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M45.0485 40.7747L0.0373769 41.3042L0 38.1272L45.0111 37.5977L45.0485 40.7747ZM69.4275 80.8906L48.4827 50.1418L51.1086 48.3531L72.0534 79.1019C74.6249 82.877 72.8741 88.0638 68.5408 89.5082L38.1252 99.6467C35.9662 100.366 33.591 99.9725 31.7798 98.5945L10.0739 82.0791H0.0186884V78.9018H11.1452L33.7037 96.0659C34.679 96.808 35.9579 97.02 37.1205 96.6325L67.5361 86.494C69.8694 85.7162 70.8121 82.9233 69.4275 80.8906Z" fill="#CAD1DA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M61.3419 28.9805L96.4179 41.9316L95.3174 44.9122L61.5529 32.4453L29.0736 49.1626C28.8692 49.2678 28.8554 49.5548 29.0488 49.6792L30.0911 50.3492C32.1983 51.7038 34.6507 52.4241 37.1558 52.4241C39.2867 52.4241 41.3852 51.9029 43.2685 50.9058L50.3084 47.1788L72.1759 79.18L95.4356 72.6066L96.2997 75.6641L70.8415 82.8588L49.2865 51.3149L44.7551 53.7139C42.4138 54.9534 39.8049 55.6013 37.1558 55.6013C34.0414 55.6013 30.9927 54.7059 28.3729 53.0218L27.3307 52.3518C25.0793 50.9045 25.2398 47.5624 27.6196 46.3376L61.3419 28.9805Z" fill="#CAD1DA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M62.8086 90.4264L45.8633 67.1266L48.4328 65.2578L65.3782 88.5577L62.8086 90.4264Z" fill="#CAD1DA"/>
                <path d="M39.8945 2.11817C39.8945 0.948337 40.8429 0 42.0127 0C43.1825 0 44.1309 0.948336 44.1309 2.11817V19.0635C44.1309 20.2333 43.1825 21.1817 42.0127 21.1817C40.8429 21.1817 39.8945 20.2333 39.8945 19.0635V2.11817Z" fill="#90CAF9"/>
                <path d="M20.4575 9.49259C19.8726 8.47949 20.2197 7.18404 21.2328 6.59912C22.2459 6.0142 23.5414 6.36132 24.1263 7.37442L29.9513 17.4636C30.5362 18.4767 30.1891 19.7721 29.176 20.357C28.1629 20.9419 26.8674 20.5948 26.2825 19.5817L20.4575 9.49259Z" fill="#90CAF9"/>
                <path d="M54.0786 16.9859C53.4937 17.999 53.8408 19.2945 54.8539 19.8794C55.867 20.4643 57.1625 20.1172 57.7474 19.1041L63.5724 9.01496C64.1573 8.00186 63.8102 6.70641 62.797 6.12149C61.7839 5.53658 60.4885 5.88369 59.9036 6.8968L54.0786 16.9859Z" fill="#90CAF9"/>
            </svg>
            <Typography className={css.mT_20}>
                Вы оплатили бронирование
                <Typography className={css.mL_5}>
                    {store.nameObject}
                </Typography>
                <Typography className={css.mL_5}>
                    с
                </Typography>
                <Typography className={css.mL_5}>
                    {date.toISOString().substr(0,10).split('-').reverse().join('/')}
                </Typography>
                <Typography  className={css.mL_5}>
                    по
                </Typography>
                <Typography weight={"medium"}  className={css.mL_5}>
                    {dateFormated}
                </Typography>
            </Typography>
            <Typography>
                С Вами свяжутся в течение суток, чтобы уточнить статус бронирования
            </Typography>
            <div style={{display:'flex'}} className={css.mT_20}>
                <BaseButton
                    type={"secondary"}
                    isActive
                    onClick={()=>router.push('/')}
                >
                    На главную
                </BaseButton>
                <BaseButton
                    className={css.mL_10}
                    onClick={()=>router.push('/cabinet')}
                >
                    В личный кабинет
                </BaseButton>
            </div>
            <div style={{display:"flex",flexDirection:"column" ,alignItems:"center",marginTop:'200px'}}>
                <Typography color={"tertiary"}>
                    Если у Вас остались вопросы,
                </Typography>
                <Typography color={"tertiary"}>
                    свяжитесь с нами по номеру телефона
                    <Typography color={"nude"} className={css.mL_5}>
                        777 777 777
                    </Typography>
                </Typography>
            </div>
        </div>
    )
}