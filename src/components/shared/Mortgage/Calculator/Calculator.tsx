import React, {ChangeEvent, SyntheticEvent, useState, Dispatch, SetStateAction} from 'react';
import { observer } from "mobx-react-lite"
import {useMortGageStore} from '../../../../mobx/role/bank/mortgage/MortGage'
import s from './Calculator.module.scss';
import classNames from 'classnames';
import QuestionIcon from '../icons/QuestionIcon.svg';
import {InputRange} from './InputRange';
import {Card} from '../Card';
import BaseButton from "../../BaseButton/BaseButtons";
import {BaseDropDown} from "../../BaseDropDown/BaseDropDown";
import {BaseInput} from "../../BaseInput/Input";
import {
    EarlyPaymentButtonsTypes,
    IEarlyPaymentState,
    IPaymentGraph,
    IPeriodPayments,
    PaymentPeriodSelectTypes
} from './ipotek';
import Typography from "../../Typography/Typography";
import Image from 'next/image'
import {RadioIconChecked, RadioIconUnChecked} from "../icons/RadioIcon";
import {makeStyles} from "@material-ui/core";
import { CrossIcon } from '../../../../icons/CrossIcon/CrossIcon'
import { dateToDigit, digitToDate, currentDate } from '../../../../lib/mortgage/date';
import {paymentSchedule} from './helpers';
import {formatNumbersToCurrency} from '../../../../lib/syntax/syntax';

export const removeStringSpaces = (string: string) => {
    return string.replace(/\s+/g, "")
}

const PAYMENT_PERIOD_OPTIONS = [
    {value: PaymentPeriodSelectTypes.ONCE, label: "Единовременно"},
    {value: PaymentPeriodSelectTypes.MONTHLY, label: "Ежемесячно"}
]

interface Props {
    setModal: Dispatch<SetStateAction<boolean>>
}

export const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#fff",
        width: '100%',
        borderRadius: 8,
        border: '0px solid #FFFFFF !important',
        "&::before": {
            display: 'none'
        },
        "&.MuiInput-underline::after": {
            display: 'none'
        },
        "& > .MuiSelect-root": {
            padding: '4px 4px 11px 4px !important',
            "&:focus": {
                backgroundColor: 'inherit'
            }
        }
    },
}))

export const Calculator: React.FC<Props> = observer(({setModal}) => {

    // const price = Number(String(choosedHouse.price || "").replace(/[^0-9]+/g, ""));
    const store = useMortGageStore()
    const classes = useStyles()

    /*отклонение координат всплывашки с подсказкой, относительно координаты курсора,
    cardX - динамический, чтобы всплывашка находилась дальше от края экрана(не растягивала экран на мобильниках)*/
    const [cardX, setCardX] = useState(0);

    /*const [hover, setHover] = useState(false)
    const [clicked, setClicked] = useState(false)

    const onClickHandler = () => {
        setClicked(true);
    }
    const onMouseHoverHandler = () => {
        setHover(true);
    }
    const onMouseOutHandler = () => {
        setClicked(false);
        setHover(false);
    }*/

    const setEarlyPayment = (value: any) => {
        store.setEarlyPayment(value)
    }

    // коллекция состояний набранных досрочных платежей
    // стартовая сумма для новой карточки досрочного платежа, берётся из предыдущего выбора
    const [startSummEarlyRepayment, setStartSummEarlyRepayment] = useState<number>(10000)
    // стартовая дата для новой карточки досрочного платежа, далее по аналогии ЦИАН - берётся из предыдущего выбора + 1мес
    let startDateEarlyRepayment = currentDate()

    // добавление досрочного платежа в коллекцию состояний
    const OnAddEarlyPayment = () => {
        setEarlyPayment([...store.getEarlyPayments(),
            {
                id: String(Date.now()),
                summ: startSummEarlyRepayment,
                date: store.getEarlyPayments().length > 0
                    ? digitToDate(dateToDigit(store.getEarlyPayments().filter((er: any, i: number) => store.getEarlyPayments().length - 1 === i)[0].date) + 1)
                    : currentDate(),
                diff: store.getEarlyPayments().length > 0
                    ? dateToDigit(store.getEarlyPayments().filter((er: any, i: number) => store.getEarlyPayments().length - 1 === i)[0].date) - dateToDigit(currentDate()) + 2
                    : dateToDigit(startDateEarlyRepayment) - dateToDigit(currentDate()) + 1,
                select: PaymentPeriodSelectTypes.ONCE,
                buttons: EarlyPaymentButtonsTypes.TERM,
            }
        ])
    }

    // всплывашки при наведении на иконки (?)
    let [cardhover, setCardhover] = useState([false, false, false, false]);
    const [cardCoords, setCardcoords] = useState([0, 0])
    const onMouseCardhoverHandler = (e: any) => {
        if (window.innerWidth - e.nativeEvent.layerX < 320) {
            setCardX(-320 + (window.innerWidth - e.nativeEvent.layerX));
        } else {
            setCardX(0);
        }
        setCardhover(cardhover.map((h, index) => {
            return Number(e.target.id) === index
        }));
        setCardcoords([e.nativeEvent.layerX, e.nativeEvent.layerY]);
    }

    const onMouseCardoutHandler = () => {
        setCardhover([false, false, false, false]);
    }

    const cardStyle = {
        backgroundColor: '#FFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 0px -34px 0px',
        padding: '8px 20px 6px 20px',
    }

    const sliderStyle: any = {
        position: 'relative',
        top: '20px',
    }

    const setStatePrice = (value: any) => {
        store.setStatePrice(value)
    }
    const setInitialPayment = (value: any) => {
        store.setInitialPayment(value)
    }
    const setCreditTerm = (value: any) => {
        store.setCreditTerm(value)
    }
    const setPercentageRate = (value: any) => {
        store.setPercentageRate(value)
    } 

    // стартовые состояния ренджей
    const term = store.initialData.createPayload.creditTerm
    const rate = store.initialData.createPayload.percentageRate

    const maxCost = 20000000;
    const maxContribution = store.initialData.createPayload.statePrice - 100000;
    const maxTerm = 25;
    const maxRate = 25;

    // перечень текста в различных всплывашках ,,,, ???????
    const descriptions = ['Кредит',
        `Проценты %`,
        'Проценты + кредит',
        'Необходимый доход'
    ]

    // временно закоментирую, на ЦИАН используется другая формула
    //const payment = ((cost - contrib) * Math.pow(Math.pow(1 + rate / 100, 1 / 12), 12 * term) * (Math.pow(1 + rate / 100, 1 / 12) - 1)) / (Math.pow(Math.pow(1 + rate / 100, 1 / 12), 12 * term) - 1);

    // формула, которая используется на ЦИАН
    let payment = (store.initialData.createPayload.statePrice - store.initialData.createPayload.initialPayment) * (rate / 1200 + ((rate / 1200) / (Math.pow(1 + rate / 1200, term * 12) - 1)))
    // переменная для сохранения начального значения, для расчёта разницы
    let startPayment = (store.initialData.createPayload.statePrice - store.initialData.createPayload.initialPayment) * (rate / 1200 + ((rate / 1200) / (Math.pow(1 + rate / 1200, term * 12) - 1)))
    
    // сведение данных по периодичным платежам
    let termPeriodPayments: IPeriodPayments[] = []
    let payPeriodPayments: IPeriodPayments[] = []
    for (let i = 0; i < store.initialData.createPayload.creditTerm * 12; i++) {
        termPeriodPayments.push({month: i + 1, payment: 0,})
        payPeriodPayments.push({month: i + 1, payment: 0})
    }

    for (let i = 0; i < store.initialData.createPayload.creditTerm * 12; i++) {
        store.getEarlyPayments().filter((er: any) => er.diff === termPeriodPayments[i].month && er.select === PaymentPeriodSelectTypes.ONCE && er.buttons === EarlyPaymentButtonsTypes.TERM).forEach((er: any) => {
            termPeriodPayments[i].payment += er.summ;
        });
        store.getEarlyPayments().filter((er: any) => er.diff === payPeriodPayments[i].month && er.select === PaymentPeriodSelectTypes.ONCE && er.buttons === EarlyPaymentButtonsTypes.PAYMENT).forEach((er: any) => {
            payPeriodPayments[i].payment += er.summ;
        });
        store.getEarlyPayments().filter((er: any) => er.diff === termPeriodPayments[i].month && er.select === PaymentPeriodSelectTypes.MONTHLY && er.buttons === EarlyPaymentButtonsTypes.TERM).forEach((er: any) => {
            for (let j = er.diff; j < termPeriodPayments.length; j++) {
                termPeriodPayments[j].payment += er.summ
            }
        });
        store.getEarlyPayments().filter((er: any) => er.diff === payPeriodPayments[i].month && er.select === PaymentPeriodSelectTypes.MONTHLY && er.buttons === EarlyPaymentButtonsTypes.PAYMENT).forEach((er: any) => {
            for (let j = er.diff; j < payPeriodPayments.length; j++) {
                payPeriodPayments[j].payment += er.summ
            }
        });
    }

    // создание графика платежей
    let payments: IPaymentGraph[] = [{month: 0, payment: 0, debt: 0, percent: 0, remainder: store.initialData.createPayload.statePrice}];
    paymentSchedule(
        payments,
        term, 
        termPeriodPayments,
        payPeriodPayments,
        payment, 
        rate
    )

    // переменная для подсчёта общих платежей при досрочных платежах, сравнивается с переменной без досрочных платежей
    let payAfterEarlyPayments = 0
    let averagePayment = 0
    payments.forEach((p) => {
        payAfterEarlyPayments += p.percent;
        averagePayment += p.payment / (payments.length - 1);
    })

    const renderResult = store.getEarlyPayments().every((er: any) => er.summ < 1) ? payment : averagePayment

    const onChangePaymentPeriod = (value: string, id: string) => {
        const newRepaymentList = store.getEarlyPayments().map((em: any) => {
            if (em.id === id) {
                return {
                    id: em.id,
                    summ: em.summ,
                    date: em.date,
                    diff: em.diff,
                    select: value as PaymentPeriodSelectTypes,
                    buttons: em.buttons,
                }
            }
            return em
        })
        store.setEarlyPayment(newRepaymentList)
    }

    const onChangePaymentSumm = (e: SyntheticEvent & { target: HTMLInputElement }) => {
        let newValue = Number(removeStringSpaces(e.target.value))
        if (isNaN(newValue)) return

        setStartSummEarlyRepayment(newValue)
        store.setEarlyPayment(store.getEarlyPayments().map((em: any) => {
            if (em.id === e.target.id) {
                return {
                    id: em.id,
                    summ: newValue > 9999999999 ? em.summ : newValue,
                    date: em.date,
                    diff: em.diff,
                    select: em.select,
                    buttons: em.buttons,
                }
            }
            return em
        }))
    }

    return (
        <div className={s.wrap}>
            <Typography weight={"bold"} className={s.typoHeader}>
                Ипотечный калькулятор
            </Typography>
            <div className={s.block_container}>
                <div className={s.container}>
                    {cardhover.map((c, index) => {
                        return (
                            c
                            && <Card key={index}
                                      style={{
                                          backgroundColor: '#FFFFFF',
                                          position: 'absolute',
                                          top: `${cardCoords[1] + 20}px`,
                                          left: `${cardCoords[0] + cardX}px`,
                                          maxWidth: '280px',
                                          padding: '10px',
                                          border: '1px solid #F2F2F2',
                                          borderRadius: '6px',
                                          boxShadow: '0px 0px 16px rgba(26, 72, 98, 0.15)'
                                      }}
                                >
                                    <Typography>
                                        {descriptions[index]}
                                    </Typography>
                                </Card>
                        )
                    })}
                    <Card>
                        <div className={s.card}>
                            <div className={s.cards}>
                                <Card style={cardStyle}>
                                    <div>
                                        <Typography className={s.size} color={'tertiary'} weight={'light'}>
                                            Стоимость недвижимости
                                        </Typography>
                                        <Typography>
                                            {new Intl.NumberFormat('ru-RU').format(store.initialData.createPayload.statePrice)}
                                        </Typography>
                                    </div>
                                    <Typography>₽</Typography>
                                </Card>
                                <div style={sliderStyle}>
                                    <InputRange value={store.initialData.createPayload.statePrice} setValue={setStatePrice} max={maxCost} min={100000}/>
                                </div>
                                <Card style={cardStyle}>
                                    <div>
                                        <Typography className={s.size} color={'tertiary'} weight={'light'}>
                                            Первоначальный взнос
                                        </Typography>
                                        <Typography>
                                            {new Intl.NumberFormat('ru-RU').format(store.initialData.createPayload.initialPayment)}
                                        </Typography>
                                    </div>
                                    <Typography>₽</Typography>
                                </Card>
                                <div style={sliderStyle}>
                                    <InputRange value={store.initialData.createPayload.initialPayment} setValue={setInitialPayment} max={maxContribution} min={0}/>
                                </div>
                                <Card style={cardStyle}>
                                    <div>
                                        <Typography className={s.size} color={'tertiary'} weight={'light'}>
                                            Срок кредита
                                        </Typography>
                                        <Typography>{store.initialData.createPayload.creditTerm}</Typography>
                                    </div>
                                    <Typography>лет</Typography>
                                </Card>
                                <div style={sliderStyle}>
                                    <InputRange value={store.initialData.createPayload.creditTerm} setValue={setCreditTerm} max={maxTerm} min={1}/>
                                </div>
                                <Card style={cardStyle}>
                                    <div>
                                        <Typography className={s.size} color={'tertiary'} weight={'light'}>
                                            Процентная ставка
                                        </Typography>
                                        <Typography>{rate}</Typography>
                                    </div>
                                    <Typography>%</Typography>
                                </Card>
                                <div style={sliderStyle}>
                                    <InputRange value={rate} setValue={setPercentageRate} max={maxRate} min={1}/>
                                </div>
                            </div>
                            <div>
                                <div className={s.summ}>
                                    <Typography weight={'medium'}>
                                        Ваш ежемесячный платёж
                                    </Typography>
                                    <Typography className={s.result}>
                                        {`${new Intl.NumberFormat('ru-RU').format(+renderResult.toFixed(0))} ₽`}
                                    </Typography>
                                    <div className={s.calculations}>
                                        <div className={s.position}>
                                            <Typography weight={'medium'} className={s.subtitle}>
                                                Кредит
                                                <Image
                                                    id={"0"}
                                                    loader={() => QuestionIcon} unoptimized
                                                    src={QuestionIcon}
                                                    onMouseEnter={onMouseCardhoverHandler}
                                                    onMouseLeave={onMouseCardoutHandler}
                                                    className={s.image}
                                                    width={26}
                                                    height={20}
                                                    alt='icon'
                                                />
                                            </Typography>
                                            <Typography
                                                className={s.subresult}>{`${new Intl.NumberFormat('ru-RU').format(store.initialData.createPayload.statePrice - store.initialData.createPayload.initialPayment)} ₽`}</Typography>
                                        </div>
                                        <div className={s.position}>
                                            <Typography weight={'medium'} className={s.subtitle}>
                                                Проценты
                                                <Image
                                                    id={"1"}
                                                    loader={() => QuestionIcon} unoptimized
                                                    src={QuestionIcon}
                                                    onMouseEnter={onMouseCardhoverHandler}
                                                    onMouseLeave={onMouseCardoutHandler}
                                                    className={s.image}
                                                    width={26}
                                                    height={20}
                                                    alt='icon'
                                                />
                                            </Typography>
                                            <Typography className={s.subresult}>{`${new Intl.NumberFormat('ru-RU').format(
                                                store.getEarlyPayments().every((er: any) => er.summ < 1)
                                                    ? +renderResult.toFixed(0) * store.initialData.createPayload.creditTerm * 12 - (store.initialData.createPayload.statePrice - store.initialData.createPayload.initialPayment)
                                                    : payAfterEarlyPayments
                                            )} ₽`}
                                            </Typography>
                                        </div>

                                        {!store.getEarlyPayments().every((er: any) => er.summ < 1) && <div>
                                            {`${new Intl.NumberFormat('ru-RU').format(payAfterEarlyPayments - (+startPayment.toFixed(0) * store.initialData.createPayload.creditTerm * 12 - (store.initialData.createPayload.statePrice - store.initialData.createPayload.initialPayment)))} ₽`}
                                        </div>}

                                        <div className={s.position}>
                                            <Typography weight={'medium'} className={s.subtitle}>
                                                Проценты + Кредит
                                                <Image
                                                    id={"2"}
                                                    loader={() => QuestionIcon} unoptimized
                                                    src={QuestionIcon}
                                                    onMouseEnter={onMouseCardhoverHandler}
                                                    onMouseLeave={onMouseCardoutHandler}
                                                    className={s.image}
                                                    width={26}
                                                    height={20}
                                                    alt='icon'
                                                />
                                            </Typography>
                                            <Typography className={s.subresult}>{`${new Intl.NumberFormat('ru-RU').format(
                                                store.getEarlyPayments().every((er: any) => er.summ < 1)
                                                    ? +renderResult.toFixed(0) * store.initialData.createPayload.creditTerm * 12
                                                    : payAfterEarlyPayments + store.initialData.createPayload.statePrice - store.initialData.createPayload.initialPayment
                                            )} ₽`}
                                            </Typography>
                                        </div>

                                        {!store.getEarlyPayments().every((er: any) => er.summ < 1) && <div>
                                            {`${new Intl.NumberFormat('ru-RU').format(payAfterEarlyPayments - (+startPayment.toFixed(0) * store.initialData.createPayload.creditTerm * 12 - (store.initialData.createPayload.statePrice - store.initialData.createPayload.initialPayment)))} ₽`}
                                        </div>}

                                        <div className={s.position}>
                                            <Typography weight={'medium'} className={s.subtitle}>
                                                Необходимый доход
                                                <Image
                                                    id={"3"}
                                                    loader={() => QuestionIcon} unoptimized
                                                    src={QuestionIcon}
                                                    onMouseEnter={onMouseCardhoverHandler}
                                                    onMouseLeave={onMouseCardoutHandler}
                                                    className={s.image}
                                                    width={26}
                                                    height={20}
                                                    alt='icon'
                                                />
                                            </Typography>
                                            <Typography
                                                className={s.subresult}>{`${new Intl.NumberFormat('ru-RU').format(+(startPayment + 12702).toFixed(0))} ₽`}</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <div className={s.request}>
                        {store.getEarlyPayments().map((r: any, i: number) => {
                            return (
                                <div key={i} className={s.cardEarlyRepayment}>
                                    <div style={{width:'100%'}}>
                                        <hr color={'#CAD1DA'} />
                                    </div>
                                    <div className={s.titleEarlyRepayment}>
                                        <Typography weight={"medium"}>
                                            {`Досрочный платёж ${i + 1}`}
                                        </Typography>
                                        <div className={s.subTitleEarlyRepayment}>
                                            <div
                                                className={s.DeleteIconPosition}
                                                onClick={() => {
                                                    store.setEarlyPayment(store.getEarlyPayments().filter((ef: any) => ef.id !== r.id))}}
                                            >
                                                <CrossIcon/> <Typography color={'altGray'}>Удалить</Typography>
                                            </div>
                                            {
                                                store.getEarlyPayments().length-1 === i
                                                    && <div
                                                        className={s.addEarlyPayment}
                                                        onClick={OnAddEarlyPayment}
                                                        >
                                                            <Typography color={'nude'}>
                                                                + Добавить досрочное погашение
                                                            </Typography>
                                                        </div>
                                            }
                                        </div>
                                    </div>

                                    <div key={r.id} id={r.id} className={s.cardContainer}>
                                        <Card className={s.paddingCard}>
                                            <Typography  className={s.paddingTypo} color={'tertiary'} weight={'light'}>
                                                Дата платежа
                                            </Typography>
                                            <div className={s.earlyPaymentChooseBlock}>
                                                <BaseInput
                                                    className={`${s.baseInputStyle} ${s.textIndent}`}
                                                    id={r.id}
                                                    type='date'
                                                    value={store.getEarlyPayments().filter((ef: any) => ef.id === r.id)[0] && store.getEarlyPayments().filter((ef: any) => ef.id === r.id)[0].date}
                                                    onChange={(e: ChangeEvent & { target: HTMLInputElement }) => {
                                                        store.setEarlyPayment(store.getEarlyPayments().map((em: any) => {
                                                            if (em.id === e.target.id) {
                                                                return {
                                                                    id: em.id,
                                                                    summ: em.summ,
                                                                    date: e.target.value,
                                                                    diff: dateToDigit(e.target.value) - dateToDigit(currentDate()) + 1,
                                                                    select: em.select,
                                                                    buttons: em.buttons,
                                                                }
                                                            }
                                                            return em
                                                        }))
                                                    }}
                                                />
                                            </div>
                                        </Card>


                                        <Card className={s.paddingCard} >
                                            <Typography className={s.paddingTypo} color={'tertiary'} weight={'light'}>
                                                Периодичность платежа
                                            </Typography>
                                            <BaseDropDown options={PAYMENT_PERIOD_OPTIONS}
                                                          value={r.select}
                                                          onChange={(value: any) => onChangePaymentPeriod(value, r.id)}
                                                          placeholder="Выберите периодичность платежа"
                                                          className={classes.root}
                                                          location={'bank'}
                                            />
                                        </Card>

                                        <Card  className={s.paddingCard}>
                                            <Typography className={s.paddingTypo} color={'tertiary'} weight={'light'} >
                                                Что уменьшить ?
                                            </Typography>
                                            <div className={s.earlyPaymentChooseBlock} style={{padding: '10px 0px 10px 0'}}>

                                                <BaseButton
                                                    className={classNames(s.earlyPaymentChooseButton, r.buttons === EarlyPaymentButtonsTypes.PAYMENT && s.earlyPaymentButtonActive)}
                                                    onClick={() => {
                                                        store.setEarlyPayment(store.getEarlyPayments().map((em: any) => {
                                                            if (em.id === r.id) {
                                                                return {
                                                                    id: em.id,
                                                                    summ: em.summ,
                                                                    date: em.date,
                                                                    diff: em.diff,
                                                                    select: em.select,
                                                                    buttons: EarlyPaymentButtonsTypes.PAYMENT,
                                                                }
                                                            }
                                                            return em
                                                        }))
                                                    }}
                                                >
                                                    {
                                                        r.buttons === EarlyPaymentButtonsTypes.PAYMENT
                                                            ? <RadioIconChecked/>
                                                            : <RadioIconUnChecked/>
                                                    }
                                                    <Typography>Платеж</Typography>
                                                </BaseButton>


                                                <BaseButton
                                                    className={classNames(s.earlyPaymentChooseButton, r.buttons === EarlyPaymentButtonsTypes.TERM && s.earlyPaymentButtonActive)}
                                                    onClick={() => {
                                                        store.setEarlyPayment(store.getEarlyPayments().map((em: any) => {
                                                            if (em.id === r.id) {
                                                                return {
                                                                    id: em.id,
                                                                    summ: em.summ,
                                                                    date: em.date,
                                                                    diff: em.diff,
                                                                    select: em.select,
                                                                    buttons: EarlyPaymentButtonsTypes.TERM,
                                                                }
                                                            }
                                                            return em
                                                        }))
                                                    }}
                                                >
                                                    {
                                                        r.buttons === EarlyPaymentButtonsTypes.PAYMENT
                                                           ? <RadioIconUnChecked/>
                                                           : <RadioIconChecked/>
                                                    }
                                                    <Typography color={'accent'}>Срок</Typography>
                                                </BaseButton>
                                            </div>


                                        </Card>
                                        <Card className={s.paddingCard}>
                                            <Typography className={s.paddingTypo} color={'tertiary'} weight={'light'}>
                                                Сумма
                                            </Typography>
                                            <BaseInput
                                                className={s.baseInput}
                                                id={r.id}
                                                type="text"
                                                onChange={onChangePaymentSumm}
                                                icon={"₽"}
                                                iconClassName={s.icon}
                                                value={store.getEarlyPayments().filter((ef: any) => ef.id === r.id)[0] && formatNumbersToCurrency(store.getEarlyPayments().filter((ef: any) => ef.id === r.id)[0].summ)}
                                            />
                                        </Card>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <div className={s.reqsumm}>
                        <BaseButton onClick={() => setModal(true)}  type={'primary'} className={s.buttonWidth}>
                            <Typography color={'secondary'}>Подать заявку </Typography>
                        </BaseButton>
                        <div onClick={OnAddEarlyPayment} className={s.addEarlyPayment}>
                            <Typography color={'nude'} >{'Рассчитать досрочное погашение'}</Typography>
                        </div>
                        <div onClick={OnAddEarlyPayment} className={s.addEarlyPaymentMobile}>
                            <Typography color={'nude'} >{store.get().createPayload.earlyPayment.length ? '+ Добавить досрочное погашение' : 'Рассчитать досрочное погашение'} </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
