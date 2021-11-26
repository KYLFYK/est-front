import React, {useRef, useState} from 'react';
import { Card } from '../Mortgage/Card';
import s from './Payback.module.scss'
import {InputRange} from "../Mortgage/InputRange";
import QuestionIcon from "../Mortgage/QuestionIcon.svg";
import Image from "next/image";
import Typography from "../Typography/Typography";

const PaybackPeriod = () => {

    const price = 100000000
    const card = useRef<HTMLDivElement | null>(null)

    const [cardX, setCardX] = useState(0);

    const [cost, setCost] = useState<number>(price);
    const [rent, setRent] = useState<number>(price / 240);
    const [expenses, setExpenses] = useState<number>(price / 100);

    // const [months, setMonths] = useState<number>(12);
    const months = 12

    const maxCost = price * 2;
    const maxRent = price / 120;
    const maxExpenses = price / 10;
    const maxMonths = 12;

    const yearPayback = cost / (rent * months - expenses);
    const rentPayments = rent * months * yearPayback
    const pureIncome = rentPayments - expenses * (cost / (rent * months - expenses))

    let yearString = '';
    if (Math.floor(+yearPayback.toFixed(1)) % 10 === 1) {
        yearString = 'Год';
    }
    if (Math.floor(+yearPayback.toFixed(1)) % 10 === 2 || Math.floor(+yearPayback.toFixed(1)) % 10 === 3 || Math.floor(+yearPayback.toFixed(1)) % 10 === 4) {
        yearString = 'Года';
    }
    if (Math.floor(+yearPayback.toFixed(1)) % 10 > 4 || Math.floor(+yearPayback.toFixed(1)) % 10 === 0) {
        yearString = 'Лет';
    }
    if (Math.floor(+yearPayback.toFixed(1)) % 100 > 10 && Math.floor(+yearPayback.toFixed(1)) % 100 < 21) {
        yearString = 'Лет';
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

    const [cardhover, setCardhover] = useState<boolean[]>([false, false, false]);
    const [cardCoords, setCardcoords] = useState<[number,number]>([0, 0])
    const onMouseCardhoverHandler = (e: any) => {
        if (window.innerWidth - e.nativeEvent.layerX < 320) {
            setCardX(-320 + (window.innerWidth - e.nativeEvent.layerX));
        } else {
            setCardX(0);
        }
        setCardhover(cardhover.map((h, index) => Number(e.target.id) === index));
        setCardcoords([e.nativeEvent.layerX, e.nativeEvent.layerY]);
    }
    const onMouseCardoutHandler = () => {
        setCardhover([false, false, false]);
    }

    const currency = "₽"

    return (
        <div>
            <div ref={card} className={s.cardContainer}>
                <Typography weight={'bold'}>Сроки окупаемости</Typography>
                <Card className={s.card}>
                    <div className={s.cards}>
                        <Card style={cardStyle}>
                            <div>
                                <Typography  className={s.low_size} weight={'light'} color={'tertiary'}>
                                    Стоимость недвижимости
                                </Typography>
                                <Typography >
                                    {new Intl.NumberFormat('ru-RU').format(cost)}
                                </Typography>
                            </div>
                            <Typography>{currency}</Typography>
                        </Card>
                        <div style={sliderStyle}>
                            <InputRange value={cost} setValue={setCost} max={maxCost} min={0} />
                        </div>
                        <Card style={cardStyle}>
                            <div>
                                <Typography className={s.low_size} weight={'light'} color={'tertiary'}>
                                    Стоимость аренды, в месяц
                                </Typography>
                                <Typography>
                                    {new Intl.NumberFormat('ru-RU').format(+rent.toFixed(0))}
                                </Typography>
                            </div>
                            <Typography>{currency}</Typography>
                        </Card>
                        <div style={sliderStyle}>
                            <InputRange value={rent} setValue={setRent} max={maxRent} min={0} />
                        </div>
                        <Card style={cardStyle}>
                            <div>
                                <Typography className={s.low_size} weight={'light'} color={'tertiary'}>
                                    Расходы на содержание в год
                                </Typography>
                                <Typography>
                                    {new Intl.NumberFormat('ru-RU').format(+expenses.toFixed(0))}
                                </Typography>
                            </div>
                            <Typography>{currency}</Typography>
                        </Card>
                        <div style={sliderStyle}>
                            <InputRange value={expenses} setValue={setExpenses} max={maxExpenses} min={0} />
                        </div>
                        {/*<Card style={cardStyle}>*/}
                        {/*    <div>*/}
                        {/*        <Typography className={s.low_size} weight={'light'} color={'tertiary'}>*/}
                        {/*            Аренда месяцев в году (сезон)*/}
                        {/*        </Typography>*/}
                        {/*        <Typography>{months}</Typography>*/}
                        {/*    </div>*/}
                        {/*    <Typography>мес.</Typography>*/}
                        {/*</Card>*/}
                        {/*<div style={sliderStyle}>*/}
                        {/*    <InputRange value={months} setValue={setMonths} max={maxMonths} min={0} />*/}
                        {/*</div>*/}
                        <div className={s.calculations}>
                            <div className={s.position}>
                                <Typography weight={"medium"} >Срок окупаемости дома при заданных параметрах</Typography>
                                <Typography color={'nude'} weight={'bold'} size={'subheaderBig'} className={s.resultterm}>
                                    {/*<div  style={{ fontSize: yearPayback >= 100 ? '22px' : (months === 0 || expenses >= rent * months) ? '16px' : '' }}>*/}
                                    <div  style={{ fontSize: yearPayback >= 100 ? '22px' : ( expenses >= rent * months) ? '16px' : '' }}>
                                        {/*{months !== 0 && expenses < rent * months*/}
                                        {expenses < rent * months
                                            ? `${yearPayback.toFixed(1)} ${yearString}`
                                            : <div>Не окупается</div>}
                                    </div>
                                </Typography>
                            </div>
                            <div className={s.position} style={{ marginTop: '26px' }}>
                                <Typography weight={'light'} className={s.titlerent}>
                                    Арендные платежи
                                    <Image
                                        id={"0"}
                                        src={QuestionIcon}
                                        onMouseEnter={onMouseCardhoverHandler}
                                        onMouseLeave={onMouseCardoutHandler}
                                        className={s.image}
                                        width={26}
                                        height={20}
                                        alt='icon'
                                        title={'hello'}
                                    />
                                </Typography>
                                <Typography className={s.rent}>
                                    {/*{months !== 0 && expenses < rent * months*/}
                                    { expenses < rent * months
                                        ? `${new Intl.NumberFormat('ru-RU').format(+rentPayments.toFixed(0))} ${currency}`
                                        : `${(rent * months).toFixed(0)} ${currency} / год`}
                                </Typography>
                            </div>
                            <div className={s.position} style={{ marginTop: '12px' }}>
                                <Typography weight={'light'} className={s.titlerent}>
                                    Чистый доход
                                    <Image
                                        id={"1"}
                                        src={QuestionIcon}
                                        onMouseEnter={onMouseCardhoverHandler}
                                        onMouseLeave={onMouseCardoutHandler}
                                        className={s.image}
                                        width={26}
                                        height={20}
                                        alt='icon'
                                        title={'hello'}
                                    />
                                </Typography>
                                <Typography className={s.rent}>
                                    {/*{months !== 0 && expenses < rent * months*/}
                                    {expenses < rent * months
                                        ? `${new Intl.NumberFormat('ru-RU').format(pureIncome)} ${currency}`
                                        : <div>нет</div>}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default PaybackPeriod;