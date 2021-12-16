import React, {FC, useEffect, useState} from 'react';
import Typography from "../../../../../../shared/Typography/Typography";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import DisappearingTitle from "../../../../../../shared/DisappearingTitle/DisappearingTitle";
import PurseTableOperation from "./PurseTables/PurseTableOperation";
import PurseTableExtracts from "./PurseTables/PurseTableExtracts";
import css from './Purse.module.scss'

type PurseType = {
    onClick: () => void
    tariffPlan: string
    payerType: string
    resumePayment: boolean
    balance: string
    operation: Array<{ id: string, date: string, sum: string, ads: string, typeTransaction: string, comment: string }>
    extractsContract: Array<{ id: string, dateFrom: string, dateTo: string, sum: string }>
}

const date = new Date()

const Purse: FC<PurseType> = ({
                                  onClick,
                                  tariffPlan,
                                  payerType,
                                  resumePayment,
                                  balance,
                                  operation,
                                  extractsContract
                              }) => {

    const [extracts, setExtracts] = useState<Array<{ id: string, dateFrom: string, dateTo: string, sum: string }>>(extractsContract)
    const [valueDateStart, setValueDateStart] = useState<Date>(date)
    const [valueDateEnd, setValueDateEnd] = useState<Date>(date)

    useEffect(() => {
        const filterExtracts = extractsContract.map(t => t.dateFrom >= valueDateStart.toISOString()
        && t.dateTo <= valueDateEnd.toISOString() ? t : {
            id: '',
            dateFrom: date.toISOString(),
            dateTo: date.toISOString(),
            sum: ''
        }).filter(t => t.id !== '')
        setExtracts(filterExtracts)
    }, [valueDateStart, valueDateEnd, extractsContract])

    return (
        <div>
            <div className={css.df_jc_ai}>
                <div className={css.df_ai}>
                    <Typography weight={"bold"} className={css.marginR_70}>Ваш баланс</Typography>
                    <Typography size={'big'} weight={"medium"} color={"nude"}>{balance}</Typography>
                </div>
                <BaseButton isActive type={"secondary"} onClick={onClick}>Пополнить</BaseButton>
            </div>
            <hr color={'#F2F2F2'}/>
            <div className={css.two_column}>
                <div>
                    <Typography className={css.margin_5px}>Тарифный план :</Typography>
                    <Typography>Тип плательщика :</Typography>
                    <Typography className={css.margin_5px}>Возобновление платежа :</Typography>
                </div>
                <div>
                    <Typography className={css.margin_5px} color={'nude'}>{payerType}</Typography>
                    <Typography>{tariffPlan}</Typography>
                    <Typography className={css.margin_5px}
                                color={'nude'}>{resumePayment ? 'Включено' : 'Отключено'}</Typography>
                </div>
            </div>

            <hr color={'#F2F2F2'}/>
            <DisappearingTitle title={'Операции'} height={operation.length + 1}>
                <PurseTableOperation operations={operation}/>
            </DisappearingTitle>

            <hr color={'#F2F2F2'}/>
            <DisappearingTitle
                title={'Выписки'}
                height={extracts.length + 1}
                DatePicker={true}
                valueDateStart={valueDateStart}
                valueDateEnd={valueDateEnd}
                onValueDateStart={setValueDateStart}
                onValueDateEnd={setValueDateEnd}
            >
                <PurseTableExtracts extracts={extracts}/>
            </DisappearingTitle>
        </div>
    );
};

export default Purse;