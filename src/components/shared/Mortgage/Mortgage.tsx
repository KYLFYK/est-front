import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import s from './Mortgage.module.scss';
import classNames from 'classnames';
import QuestionIcon from './icons/QuestionIcon.svg';
import {InputRange} from './InputRange';
import {Card} from './Card';
import BaseButton from "../BaseButton/BaseButtons";
import {BaseDropDown} from "../BaseDropDown/BaseDropDown";
import {BaseInput} from "../BaseInput/Input";
import {CloseOutlined} from "@mui/icons-material";
import {
    EarlyPaymentButtonsTypes,
    IEarlyPaymentState,
    IPaymentGraph,
    IPeriodPayments,
    PaymentPeriodSelectTypes
} from './ipotek';
import Typography from "../Typography/Typography";
import Image from 'next/image'
import {RadioIconChecked, RadioIconUnChecked} from "./icons/RadioIcon";
import {makeStyles} from "@material-ui/core";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const formatNumbersToCurrency = (value: number, currency: "RUB" ) => {
    return new Intl.NumberFormat('ru-RU').format(value)
}

export const removeStringSpaces = (string: string) => {
    return string.replace(/\s+/g, "")
}

const PAYMENT_PERIOD_OPTIONS = [
    {value: PaymentPeriodSelectTypes.ONCE, label: "Единовременно"},
    {value: PaymentPeriodSelectTypes.MONTHLY, label: "Ежемесячно"}
]

interface Props {
    // choosedHouse: IObjectDetailsEntry
}

export const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#fff",
        width: 200,
        borderRadius: 8,
        border: '0px solid #CAD1DA',
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



export const Mortgage: React.FC<Props> = ({}) => {
    // const price = Number(String(choosedHouse.price || "").replace(/[^0-9]+/g, ""));
    const price = 10000000
    const classes = useStyles()
    // функции для преобразования дат, например при получении с датапикера дату в текстовом формате, перевести её в число, добавить месяц, вернуть обратно
    const dateToDigit = (date: string = currentDate()) => {
        return Number(date.split('-')[0]) * 12 + Number(date.split('-')[1]);
    }
    const digitToDate = (digit?: number) => {
        if (digit) {
            return `${Math.trunc(digit % 12 !== 0
                ? digit / 12
                : digit / 12 - 1)}-${digit % 12 === 0
                ? 12 : digit % 12 < 10
                    ? '0' + digit % 12 : digit % 12}-${new Date().getDate() < 10
                ? '0' + new Date().getDate()
                : new Date().getDate()}`
        }
    }
    const currentDate = () => {
        return `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}`
    }

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

    // коллекция состояний набранных досрочных платежей
    const [earlyRepayment, setEarlyRepayment] = useState<IEarlyPaymentState[]>([])
    // стартовая сумма для новой карточки досрочного платежа, берётся из предыдущего выбора
    const [startSummEarlyRepayment, setStartSummEarlyRepayment] = useState<number>(10000)
    // стартовая дата для новой карточки досрочного платежа, далее по аналогии ЦИАН - берётся из предыдущего выбора + 1мес
    let startDateEarlyRepayment = currentDate()

    // добавление досрочного платежа в коллекцию состояний
    const OnAddEarlyPayment = () => {
        setEarlyRepayment([...earlyRepayment,
            {
                id: String(Date.now()),
                summ: startSummEarlyRepayment,
                date: earlyRepayment.length > 0
                    ? digitToDate(dateToDigit(earlyRepayment.filter((er, i) => earlyRepayment.length - 1 === i)[0].date) + 1)
                    : currentDate(),
                diff: earlyRepayment.length > 0
                    ? dateToDigit(earlyRepayment.filter((er, i) => earlyRepayment.length - 1 === i)[0].date) - dateToDigit(currentDate()) + 2
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

    // стартовые состояния ренджей
    const [cost, setCost] = useState(price);
    const [contrib, setContrib] = useState(0);
    const [term, setTerm] = useState(10);
    const [rate, setRate] = useState(6);

    const maxCost = price * 2;
    const maxContribution = cost - 100000;
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
    let payment = (cost - contrib) * (rate / 1200 + ((rate / 1200) / (Math.pow(1 + rate / 1200, term * 12) - 1)))
    // переменная для сохранения начального значения, для расчёта разницы
    let startPayment = (cost - contrib) * (rate / 1200 + ((rate / 1200) / (Math.pow(1 + rate / 1200, term * 12) - 1)))

    // сведение данных по периодичным платежам
    let termPeriodPayments: IPeriodPayments[] = []
    let payPeriodPayments: IPeriodPayments[] = []
    for (let i = 0; i < term * 12; i++) {
        termPeriodPayments.push({month: i + 1, payment: 0,})
        payPeriodPayments.push({month: i + 1, payment: 0})
    }

    for (let i = 0; i < term * 12; i++) {
        earlyRepayment.filter((er) => er.diff === termPeriodPayments[i].month && er.select === PaymentPeriodSelectTypes.ONCE && er.buttons === EarlyPaymentButtonsTypes.TERM).forEach((er) => {
            termPeriodPayments[i].payment += er.summ;
        });
        earlyRepayment.filter((er) => er.diff === payPeriodPayments[i].month && er.select === PaymentPeriodSelectTypes.ONCE && er.buttons === EarlyPaymentButtonsTypes.PAYMENT).forEach((er) => {
            payPeriodPayments[i].payment += er.summ;
        });
        earlyRepayment.filter((er) => er.diff === termPeriodPayments[i].month && er.select === PaymentPeriodSelectTypes.MONTHLY && er.buttons === EarlyPaymentButtonsTypes.TERM).forEach((er) => {
            for (let j = er.diff; j < termPeriodPayments.length; j++) {
                termPeriodPayments[j].payment += er.summ
            }
        });
        earlyRepayment.filter((er) => er.diff === payPeriodPayments[i].month && er.select === PaymentPeriodSelectTypes.MONTHLY && er.buttons === EarlyPaymentButtonsTypes.PAYMENT).forEach((er) => {
            for (let j = er.diff; j < payPeriodPayments.length; j++) {
                payPeriodPayments[j].payment += er.summ
            }
        });
    }

    // создание графика платежей
    let payments: IPaymentGraph[] = [{month: 0, payment: 0, debt: 0, percent: 0, remainder: cost}];
    let flagRecountPayment: boolean
    for (let i = 1; i <= term * 12; i++) {
        // переменная для накопления суммы досрочных платежей за каждый из месяцев
        let summEarlyPay = 0;
        flagRecountPayment = false;
        termPeriodPayments.forEach((pp) => {
            if (pp.month === i && pp.payment > 0) {
                summEarlyPay += pp.payment
            }
        });
        for (let j = 0; j < payPeriodPayments.length; j++) {
            if (payPeriodPayments[j].month === i && payPeriodPayments[j].payment > 0) {
                flagRecountPayment = true;
                summEarlyPay += payPeriodPayments[j].payment;
            }
        }
        payments.push({
            month: i,
            payment: payments[i - 1].remainder < payment - payments[i - 1].remainder * rate / Number((12 * 100).toFixed(0))
                ? payments[i - 1].remainder + Number((payments[i - 1].remainder * rate / (12 * 100)).toFixed(0))
                : Number(payment.toFixed(0)) - Number(summEarlyPay),                                                        // fix date(payment) - срок - отображение (Ваш ежемесячный прятёж)
            debt: payments[i - 1].remainder < payment - payments[i - 1].remainder * rate / Number((12 * 100).toFixed(0))
                ? payments[i - 1].remainder + Number((payments[i - 1].remainder * rate / (12 * 100)).toFixed(0)) - Number((payments[i - 1].remainder * rate / (12 * 100)).toFixed(0))
                : Number(payment.toFixed(0)) + Number(summEarlyPay) - Number((payments[i - 1].remainder * rate / (12 * 100)).toFixed(0)),
            percent: Number((payments[i - 1].remainder * rate / (12 * 100)).toFixed(0)),
            remainder: payments[i - 1].remainder < payment - payments[i - 1].remainder * rate / Number((12 * 100).toFixed(0))
                ? 0
                : Number(payments[i - 1].remainder) - (Number((payment - payments[i - 1].remainder * rate / (12 * 100)).toFixed(0)) + Number(summEarlyPay)),
        })
        if (flagRecountPayment) {
            payment = payments[i].remainder * (rate / 1200 + ((rate / 1200) / (Math.pow(1 + rate / 1200, term * 12 - i) - 1)))
        }
    }

    // переменная для подсчёта общих платежей при досрочных платежах, сравнивается с переменной без досрочных платежей
    let payAfterEarlyPayments = 0
    let averagePayment = 0
    payments.forEach((p) => {
        payAfterEarlyPayments += p.percent;
        averagePayment += p.payment / (payments.length - 1);
    })

    const renderResult = earlyRepayment.every((er) => er.summ < 1) ? payment : averagePayment
    console.log(payment)
    console.log(averagePayment)
    const onChangePaymentPeriod = (value: string, id: string) => {
        const newRepaymentList = earlyRepayment.map((em) => {
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
        setEarlyRepayment(newRepaymentList)
    }

    const onChangePaymentSumm = (e: SyntheticEvent & { target: HTMLInputElement }) => {
        let newValue = Number(removeStringSpaces(e.target.value))
        if (isNaN(newValue)) return

        setStartSummEarlyRepayment(newValue)
        setEarlyRepayment(earlyRepayment.map((em) => {
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
                            c === true
                                ?
                                <Card key={index}
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
                                :
                                <></>
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
                                            {new Intl.NumberFormat('ru-RU').format(cost)}
                                        </Typography>
                                    </div>
                                    <Typography>₽</Typography>
                                </Card>
                                <div style={sliderStyle}>
                                    <InputRange value={cost} setValue={setCost} max={maxCost} min={100000}/>
                                </div>
                                <Card style={cardStyle}>
                                    <div>
                                        <Typography className={s.size} color={'tertiary'} weight={'light'}>
                                            Первоначальный взнос
                                        </Typography>
                                        <Typography>
                                            {new Intl.NumberFormat('ru-RU').format(contrib)}
                                        </Typography>
                                    </div>
                                    <Typography>₽</Typography>
                                </Card>
                                <div style={sliderStyle}>
                                    <InputRange value={contrib} setValue={setContrib} max={maxContribution} min={0}/>
                                </div>
                                <Card style={cardStyle}>
                                    <div>
                                        <Typography className={s.size} color={'tertiary'} weight={'light'}>
                                            Срок кредита
                                        </Typography>
                                        <Typography>{term}</Typography>
                                    </div>
                                    <Typography>лет</Typography>
                                </Card>
                                <div style={sliderStyle}>
                                    <InputRange value={term} setValue={setTerm} max={maxTerm} min={1}/>
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
                                    <InputRange value={rate} setValue={setRate} max={maxRate} min={1}/>
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
                                                className={s.subresult}>{`${new Intl.NumberFormat('ru-RU').format(cost - contrib)} ₽`}</Typography>
                                        </div>
                                        <div className={s.position}>
                                            <Typography weight={'medium'} className={s.subtitle}>
                                                Проценты
                                                <Image
                                                    id={"1"}
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
                                                earlyRepayment.every((er) => er.summ < 1)
                                                    ? +renderResult.toFixed(0) * term * 12 - (cost - contrib)
                                                    : payAfterEarlyPayments
                                            )} ₽`}
                                            </Typography>
                                        </div>

                                        {!earlyRepayment.every((er) => er.summ < 1) && <div>
                                            {`${new Intl.NumberFormat('ru-RU').format(payAfterEarlyPayments - (+startPayment.toFixed(0) * term * 12 - (cost - contrib)))} ₽`}
                                        </div>}

                                        <div className={s.position}>
                                            <Typography weight={'medium'} className={s.subtitle}>
                                                Проценты + Кредит
                                                <Image
                                                    id={"2"}
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
                                                earlyRepayment.every((er) => er.summ < 1)
                                                    ? +renderResult.toFixed(0) * term * 12
                                                    : payAfterEarlyPayments + cost - contrib
                                            )} ₽`}
                                            </Typography>
                                        </div>

                                        {!earlyRepayment.every((er) => er.summ < 1) && <div>
                                            {`${new Intl.NumberFormat('ru-RU').format(payAfterEarlyPayments - (+startPayment.toFixed(0) * term * 12 - (cost - contrib)))} ₽`}
                                        </div>}

                                        <div className={s.position}>
                                            <Typography weight={'medium'} className={s.subtitle}>
                                                Необходимый доход
                                                <Image
                                                    id={"3"}
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
                        {earlyRepayment.map((r, i) => {
                            return (
                                <div key={i} className={s.cardEarlyRepayment}>
                                    <div style={{width:'100%',margin:'0px 40px'}}>
                                        <hr color={'#CAD1DA'} style={{width:'93%',}}/>
                                    </div>
                                    <div className={s.titleEarlyRepayment}>
                                        <Typography weight={"medium"} className={s.earlyPaymentTitle}>
                                            {`Досрочный платёж ${i + 1}`}
                                        </Typography>
                                        {
                                            earlyRepayment.length-1 === i
                                                && <div
                                                    style={{cursor:'pointer', paddingRight:'60px'}}
                                                    onClick={OnAddEarlyPayment}
                                                    >
                                                        <Typography color={'nude'}>
                                                            + Добавить досрочное погашение
                                                        </Typography>
                                                    </div>
                                        }
                                    </div>

                                    <div key={r.id} id={r.id} className={s.cardContainer}>
                                        <Card className={s.paddingCard}>
                                            <Typography  className={s.paddingTypo} color={'tertiary'} weight={'light'}>
                                                Дата платежа
                                            </Typography>
                                            <div className={s.earlyPaymentChooseBlock}>
                                                <BaseInput
                                                    className={s.baseInputStyle}
                                                    id={r.id}
                                                    type='date'
                                                    value={earlyRepayment.filter((ef) => ef.id === r.id)[0] && earlyRepayment.filter((ef) => ef.id === r.id)[0].date}
                                                    onChange={(e: ChangeEvent & { target: HTMLInputElement }) => {
                                                        setEarlyRepayment(earlyRepayment.map((em) => {
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
                                            />
                                        </Card>

                                        <Card  className={s.paddingCard}>
                                            <Typography className={s.paddingTypo} color={'tertiary'} weight={'light'} >
                                                Что уменьшить ?
                                            </Typography>
                                            <div className={s.earlyPaymentChooseBlock}>

                                                <BaseButton
                                                    className={classNames(s.earlyPaymentChooseButton, r.buttons === EarlyPaymentButtonsTypes.PAYMENT && s.earlyPaymentButtonActive)}
                                                    onClick={() => {
                                                        setEarlyRepayment(earlyRepayment.map((em) => {
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
                                                        setEarlyRepayment(earlyRepayment.map((em) => {
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
                                                value={earlyRepayment.filter((ef) => ef.id === r.id)[0] && formatNumbersToCurrency(earlyRepayment.filter((ef) => ef.id === r.id)[0].summ, "RUB")}
                                            />
                                        </Card>
                                        <div
                                            className={s.DeleteIconPosition}
                                            onClick={() => {
                                            setEarlyRepayment(earlyRepayment.filter((ef) => ef.id !== r.id))}}
                                        >
                                            <DeleteOutlineIcon color={'error'}  />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <div className={s.reqsumm}>
                        <BaseButton type={'primary'} className={s.buttonWidth}>
                            <Typography color={'secondary'}>Подать заявку </Typography>
                        </BaseButton>
                        <div onClick={OnAddEarlyPayment}>
                            <Typography color={'nude'} >Рассчитать досрочное погашение </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
