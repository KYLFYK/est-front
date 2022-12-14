import React, {useState, useEffect, FC} from 'react';
import {Button, TextField} from "@mui/material";
import {IconWhatsapp} from "../../../icons/Agent/IconWhatsapp";
import {IconTelegram} from "../../../icons/Agent/IconTelegram";
import {IconMail} from "../../../icons/Agent/IconMail";
import {IconPhone} from "../../../icons/Agent/IconPhone";
import s from './Record.module.scss';
import Typography from "../../shared/Typography/Typography";
import {BaseInput} from "../../shared/BaseInput/Input";
import {RecordApi} from "../../../api/record/record";
import {useRouter} from "next/router";
import {makeStyles} from "@material-ui/core";
import classNames from "classnames";
import {Modal} from "../../shared/Modal/Modal";
import {RecordPriceLine} from "./RecordPriceLine";
import css from './Record.module.scss'
import {useRecordStore} from "../../../mobx/record/record";
import {observer} from "mobx-react-lite";

type AgentRecordType = {
    Record: {
        img: string
        fullName: string
        heldPost: string
        workExperience: string
        inWork: string
        completed: string
        connection: Array<{ title: string, value: string, url: string }>
    }
    title?: string
    nameObject: string
}

export const useStyles = makeStyles({
    root: {
        height: '40px !important',
        borderRadius: '6px',
        width: '120px',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
            borderRadius: '6px',
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "& .MuiOutlinedInput-input": {
            color: "black"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "black"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "black"
        },
        "& .MuiInputLabel-outlined": {
            color: "black"
        },
        "&:hover .MuiInputLabel-outlined": {
            color: "black"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "black"
        },
        "& > .MuiInputBase-root": {
            height: '40px',
        }
    }
})

const condition = [
    {date: '3 ??????', price: '??????????????????'},
    {date: '14 ????????', price: '150 000 ???'},
    {date: '30 ????????', price: '250 000 ???'},
]

export const Record: FC<AgentRecordType> = observer(({Record, title, nameObject}) => {

    const store = useRecordStore

    const router = useRouter()

    const classes = useStyles()

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>( '')
    const [phone, setPhone] = useState<string>('')
    const [timeStart, setTimeStart] = useState('08:00')
    const [timeEnd, setTimeEnd] = useState('18:00')



    const [nameDirty, setNameDirty] = useState(false)
    const [mailDirty, setMailDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)

    const [nameError, setNameError] = useState('???? ?????????????? ??????')
    const [mailError, setMailError] = useState('???? ???????????????? e-mail')
    const [phoneError, setPhoneError] = useState('???? ???????????? ??????????????')

    const [formValid, setFormValid] = useState(false)

    const [recordActive, setRecordActive] = useState<boolean>(false)

    useEffect(()=>{
        setName(localStorage.getItem('nameUserEstatum') !== null ? localStorage.getItem('nameUserEstatum')!.toString() : '')
        setEmail(localStorage.getItem('emailEstatum') !== null ? localStorage.getItem('emailEstatum')!.toString() : '')
        setPhone(localStorage.getItem('phoneEstatum') !== null ? localStorage.getItem('phoneEstatum')!.toString() : '')
        store.updateMeFromLogin({
            name:localStorage.getItem('nameUserEstatum') !== null ? localStorage.getItem('nameUserEstatum')!.toString() : '',
            email:localStorage.getItem('emailEstatum') !== null ? localStorage.getItem('emailEstatum')!.toString() : '',
            phone:localStorage.getItem('phoneEstatum') !== null ? localStorage.getItem('phoneEstatum')!.toString() : ''
        })
    },[store.name])


    const redirectPay = async (days: string, price: string) => {
        await store.updateRecordType(days === '3 ??????' ? 'freePay' : 'pay', price, days)

        if(days ==='3 ??????'){
            const routerApi = router.asPath.split('/')
            const res = await RecordApi.RecordPost(routerApi[1], routerApi[2],{
                name:store.name,
                email:store.email,
                phone:store.phone,
                status:'?????????? ????????????',
                comfortableTimeFrom:timeStart,
                comfortableTimeTo:timeEnd,
                orderType: "buy",
                agentName: "string", // ????
            })
            if(!res){
                setRecordActive(false)
                return
            }
        }
        setTimeout(()=>{
            router.push('/pay')
        },50)
    }

    const activeRegistration = () => {

        // const infoLogin = {
        //     name,
        //     email,
        //     phone,
        //     status: '?????????? ????????????',
        //     comfortableTimeFrom: timeStart,
        //     comfortableTimeTo: timeEnd,
        //     orderType: 'buy',
        //     agentName: 'string',
        //     nameObject
        // }
        //
        // store.updateRecordData(infoLogin)
        setRecordActive(!recordActive)
        // if (localStorage.getItem('roleEstatum')) {
        //     setRecordActive(!recordActive)
        // } else {
        //     router.push(`/${router.asPath.split('/')[1]}/${router.query.id}?text=login`)
        // }
    }

    useEffect(() => {
        if(name && email && phone){
            setNameError('')
            setPhoneError('')
            setMailError('')
            setFormValid(true)
        }else{
            if (nameError || mailError || phoneError) {
                setFormValid(false)
            }
        }
    }, [nameError, mailError, phoneError,name,email,phone])

    useEffect(() => {
        store.updateNameObject(
            nameObject,
            router.query.id !== undefined ? router.query.id.toString() : '0',
            router.asPath.split('/')[1]
        )
    }, [])

    // useEffect(() => {
    //     if (nameDirty && nameError)setNameDirty(true)
    //     if (mailDirty && mailError)setMailDirty(true)
    //     if (phoneDirty && phoneError)setPhoneDirty(true)
    // }, [nameDirty, mailDirty, phoneDirty])

    const [hover, setHover] = useState(false)
    const [clicked, setClicked] = useState(false)

    const onClickHandler = () => {
        // setClicked(true);
        const routerApi = router.asPath.split('/')
        store.updateDataUser(
            name,
            email,
            phone,
            timeStart,
            timeEnd,
            '?????????? ????????????',
            "buy",
            "string"
        )
        activeRegistration()
    }

    const onMouseHoverHandler = () => {
        setHover(true);
    }
    const onMouseOutHandler = () => {
        setClicked(false);
        setHover(false);
    }

    const onNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        if (!e.target.value) {
            setNameError('???? ?????????????? ??????')
        } else {
            setNameError('')
        }
    }

    const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setMailError('???????????????????????? e-mail')
        } else {
            setMailError('')
        }
    }

    const onPhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value.replace(/[^\d-]/g, ''))
        if (!e.target.value) {
            setPhoneError('???? ???????????? ??????????????')
        } else {
            setPhoneError('')
        }
    }

    const onBlurHandler = (e: string) => {
        switch (e) {
            case 'name':
                // if (!setName) setNameError('???? ?????????????? ??????')
                if (!name) {
                    setNameError('???? ?????????????? ??????')
                    setNameDirty(true)
                }
                break
            case 'mail':
                // if (!setEmail) setMailError('???? ???????????????? e-mail')
                if (!email) {
                    setMailError('???? ???????????????? e-mail')
                    setMailDirty(true)
                }
                break
            case 'phone':
                // if (!setPhone) setPhoneError('???? ???????????? ??????????????')
                if (!phone) {
                    setPhoneError('???? ???????????? ??????????????')
                    setPhoneDirty(true)
                }
                break
            default:
                break
        }
    }

    const searchIcon = (title: string) => {
        switch (title) {
            case "telegram":
                return <IconTelegram/>
            case "phone":
                return <IconPhone/>
            case "email":
                return <IconMail/>
            case "whatsApp":
                return <IconWhatsapp/>
            default:
                return <IconPhone/>
        }
    }

    return (
        <div className={s.container}>
            <ContentContainer>
                <div className={s.title}>
                    <Typography className={s.title} size={'headerLow'} color='secondary'> ????????????
                        ???????????????????? {title ? title : "????????????"}?</Typography>
                </div>
                <div className={s.subTitle}>
                    <Typography color='secondary' weight={"bold"}> ???????????????????? ???? ????????????????. ???? ???????????????????? ?????? ??????
                        ?????????????????? ???????? ??
                        ?????????????? ??????????????</Typography>
                </div>
                <div className={s.blockInputButton}>
                    <div className={s.blockInputs}>
                        <div className={s.input}>
                            <div className={s.inputTitle}>
                                <Typography size={'small'} color='tertiary'>
                                    ??????
                                </Typography>
                            </div>
                            <BaseInput
                                name='name'
                                placeholder={'???????? ????????????????'}
                                onBlur={() => onBlurHandler('name')}
                                value={name}
                                onChange={(e) => onNameHandler(e)}
                                className={s.paddingInput}
                            />
                            {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
                        </div>
                        <div className={s.input}>
                            <div className={s.inputTitle}>
                                <Typography size={'small'} color='tertiary'>
                                    E-mail
                                </Typography>
                            </div>
                            <BaseInput
                                name='mail'
                                placeholder={'ivan@mail.com'}
                                onBlur={() => onBlurHandler('mail')}
                                value={email}
                                onChange={(e) => onEmailHandler(e)}
                                className={s.paddingInput}
                            />
                            {(mailDirty && mailError) && <div style={{color: 'red'}}>{mailError}</div>}
                        </div>
                        <div className={s.input}>
                            <div className={s.inputTitle}>
                                <Typography size={'small'} color='tertiary'>
                                    ??????????????
                                </Typography>
                            </div>
                            <BaseInput
                                name='phone'
                                placeholder={'??????????????'}
                                onBlur={() => onBlurHandler('phone')}
                                type={'string'}
                                value={phone}
                                onChange={(e) => onPhoneHandler(e)}
                                className={s.paddingInput}
                            />
                            {(phoneDirty && phoneError) && <div style={{color: 'red'}}>{phoneError}</div>}
                        </div>
                        <div className={s.input}>
                            <div className={s.inputTitle}>
                                <Typography size={'small'} color='tertiary'>
                                    ?????????????? ??????????
                                </Typography>
                            </div>
                            <div style={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>
                                <TextField
                                    id="time"
                                    type="time"
                                    variant="outlined"
                                    defaultValue="08:00"
                                    value={timeStart}
                                    onChange={e => setTimeStart(e.currentTarget.value)}
                                    className={classes.root}
                                    inputProps={{
                                        step: 60, // 1 min
                                    }}
                                />
                                <span style={{color: 'black', marginTop: '8px', display: 'inline-block'}}>
                                    -
                                </span>
                                <TextField
                                    id="time"
                                    type="time"
                                    variant="outlined"
                                    defaultValue="18:00"
                                    value={timeEnd}
                                    onChange={e => setTimeEnd(e.currentTarget.value)}
                                    className={classes.root}
                                    inputProps={{
                                        step: 60, // 1 min
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {/*<div className={s.sendButton} onClick={activeRegistration}>*/}
                    <div className={s.sendButton}>
                        <Button
                            disabled={!formValid}
                            onMouseEnter={onMouseHoverHandler}
                            onMouseLeave={onMouseOutHandler}
                            onMouseDown={onClickHandler}
                            className={classNames(s.buttonsColor, (clicked && s.buttonClicked) || (hover && s.buttonHovered) || s.buttons)}
                            style={{width: '100%', cursor: !formValid ? 'not-allowed' : ''}}
                        >
                            <div><Typography color='secondary' className={s.buttonTitle}> ????????????????????</Typography></div>
                        </Button>
                        {((nameDirty && nameError) || (mailDirty && mailError) || (phoneDirty && phoneError))
                        && <div className={s.unselectable}>???? ?????????????????? ??????????</div>}
                    </div>
                </div>
                {
                    <Modal
                        setActive={() => setRecordActive(!recordActive)}
                        active={recordActive}
                    >
                        <div className={css.margin_B10}>
                            <div className={css.df_jc}>
                                <Typography weight={"medium"} className={css.margin_B10}>
                                    ???????????????? ???????????????????????? ????????????????????????
                                </Typography>
                            </div>
                            {
                                condition.map((cond, index: number) => (
                                    <RecordPriceLine
                                        onPay={(date, price) => redirectPay(date, price)}
                                        key={index}
                                        disable={index !==0}
                                        date={cond.date}
                                        price={cond.price}
                                    />
                                ))
                            }
                        </div>
                    </Modal>
                }

            </ContentContainer>
        </div>
    )
})

export const ContentContainer: React.FC<{}> = ({children}) => {
    return (
        <div className="general_container">
            {children}
        </div>
    )
}

