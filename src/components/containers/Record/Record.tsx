import React, {useState, useEffect, FC, ChangeEvent,} from 'react';
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
}

export const useStyles = makeStyles({
        root: {
            height:'40px !important',
            borderRadius:'6px',
            width:'120px',
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                borderRadius:'6px',
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
            "& > .MuiInputBase-root":{
                height:'40px',
            }
        }
})

export const Record: FC<AgentRecordType> = ({Record, title}) => {

    const router = useRouter()

    const classes = useStyles()

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [timeStart, setTimeStart] = useState('08:00')
    const [timeEnd, setTimeEnd] = useState('18:00')


    const [nameDirty, setNameDirty] = useState(false)
    const [mailDirty, setMailDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)

    const [nameError, setNameError] = useState('не указано имя')
    const [mailError, setMailError] = useState('не заполнен e-mail')
    const [phoneError, setPhoneError] = useState('не указан телефон')

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (nameError || mailError || phoneError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, mailError, phoneError])

    const [hover, setHover] = useState(false)
    const [clicked, setClicked] = useState(false)

    const onClickHandler = () => {
        setName('');
        // setNameError('не указано имя');
        setNameDirty(false)
        setMail('');
        // setMailError('не заполнен e-mail');
        setMailDirty(false)
        setPhone('');
        // setPhoneError('не указан телефон');
        setPhoneDirty(false)
        // dispatch(sendOrderTC(form));
        setClicked(true);

        const routerApi = router.asPath.split('/')
        RecordApi.RecordPost(routerApi[1], routerApi[2],{
            name:name,
            email:mail,
            phone:phone,
            status:'Новая заявка',
            comfortableTimeFrom:timeStart,
            comfortableTimeTo:timeEnd
        })
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
            setNameError('не указано имя')
        } else {
            setNameError('')
        }
    }

    const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setMailError('некорректный e-mail')
        } else {
            setMailError('')
        }
    }

    const onPhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value)
        if (!e.target.value) {
            setPhoneError('не указан телефон')
        } else {
            setPhoneError('')
        }
    }
    console.log("nameError--", setName)
    const onBlurHandler = (e: string) => {
        switch (e) {
            case 'name':
                if (!setName) setNameError('не указано имя')
                setNameDirty(true)
                break
            case 'mail':
                if (!setMail) setMailError('не заполнен e-mail')
                setMailDirty(true)
                break
            case 'phone':
                if (!setPhone) setPhoneError('не указан телефон')
                setPhoneDirty(true)
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
                    <Typography size={'headerLow'} color='secondary'> Хотите
                        посмотреть {title ? title : "Объект"}?</Typography>
                </div>
                <div className={s.subTitle}>
                    <Typography color='secondary' weight={"bold"}> Запишитесь на просмотр. Мы перезвоним Вам для
                        уточнения даты и
                        времени встречи</Typography>
                </div>
                <div className={s.blockInputButton}>
                    <div className={s.blockInputs}>
                        <div className={s.input}>
                            <div className={s.inputTitle}>
                                <Typography size={'small'} color='tertiary'>
                                    Имя
                                </Typography>
                            </div>
                            <BaseInput
                                name='name'
                                placeholder={'Иван Петрович'}
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
                                value={mail}
                                onChange={(e) => onEmailHandler(e)}
                                className={s.paddingInput}
                            />
                            {(mailDirty && mailError) && <div style={{color: 'red'}}>{mailError}</div>}
                        </div>
                        <div className={s.input}>
                            <div className={s.inputTitle}>
                                <Typography size={'small'} color='tertiary'>
                                    Телефон
                                </Typography>
                            </div>
                            <BaseInput
                                name='phone'
                                placeholder={'Телефон'}
                                onBlur={() => onBlurHandler('phone')}
                                type={'number'}
                                value={phone}
                                onChange={(e) => onPhoneHandler(e)}
                                className={s.paddingInput}
                            />
                            {(phoneDirty && phoneError) && <div style={{color: 'red'}}>{phoneError}</div>}
                        </div>
                        <div className={s.input}>
                            <div className={s.inputTitle}>
                                <Typography size={'small'} color='tertiary'>
                                    Удобное время
                                </Typography>
                            </div>
                            <div style={{backgroundColor:'white',borderRadius:'8px',display:'flex',justifyContent:'space-around'}}>
                                <TextField
                                    id="time"
                                    type="time"
                                    variant="outlined"
                                    defaultValue="08:00"
                                    value={timeStart}
                                    onChange={e=>setTimeStart(e.currentTarget.value)}
                                    className={classes.root}
                                    inputProps={{
                                        step: 60, // 1 min
                                    }}
                                />
                                <span style={{color:'black',marginTop:'8px',display:'inline-block'}}>
                                    -
                                </span>
                                <TextField
                                    id="time"
                                    type="time"
                                    variant="outlined"
                                    defaultValue="18:00"
                                    value={timeEnd}
                                    onChange={e=>setTimeEnd(e.currentTarget.value)}
                                    className={classes.root}
                                    inputProps={{
                                        step: 60, // 1 min
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={s.sendButton}>
                        <Button
                            disabled={!formValid}
                            onMouseEnter={onMouseHoverHandler}
                            onMouseLeave={onMouseOutHandler}
                            onMouseDown={onClickHandler}
                            className={(clicked && s.buttonClicked) || (hover && s.buttonHovered) || s.buttons}
                            style={{width: '100%', cursor: !formValid ? 'not-allowed' : ''}}
                        >
                            <div><Typography color='secondary' className={s.buttonTitle}> Записаться</Typography></div>
                        </Button>
                        {((nameDirty && nameError) || (mailDirty && mailError) || (phoneDirty && phoneError))
                        && <div className={s.unselectable}>не заполнена форма</div>}
                    </div>
                </div>

                {/* Старая верстка +  фото */}
                {/*<div className={s.margin_40_20}>*/}
                {/*    <Typography color='secondary' weight={"bold"}>*/}
                {/*        За домом закреплён агент*/}
                {/*    </Typography>*/}
                {/*</div>*/}
                {/*<div className={s.card}>*/}
                {/*    <div className={s.avatar}>*/}
                {/*        <div className={s.divImage}>*/}
                {/*            <Image unoptimized src={RomanSafonov} width={100} height={100} className={s.image}*/}
                {/*                   alt={`property agent`}*/}
                {/*                   loader={() => '../../../Pics/persons/РоманСафонов.png'}/>*/}
                {/*        </div>*/}
                {/*        <div className={s.fullName}>*/}
                {/*            <div className={s.bold}>*/}
                {/*                <Typography weight={'bold'}>*/}
                {/*                    {Record.fullName}*/}
                {/*                </Typography>*/}
                {/*            </div>*/}
                {/*            <div style={{marginLeft: '5px'}}>*/}
                {/*                <Typography>*/}
                {/*                    {Record.heldPost}*/}
                {/*                </Typography>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={s.portfolioContacts}>*/}
                {/*        <div className={s.portfolio}>*/}
                {/*            <div className={s.portfolioPosition}>*/}
                {/*                <Typography> Работает: </Typography>*/}
                {/*                <span className={s.bold}>*/}
                {/*                    <Typography weight={'bold'}>*/}
                {/*                        {Record.workExperience}*/}
                {/*                    </Typography>*/}
                {/*                </span>*/}
                {/*            </div>*/}
                {/*            <div className={s.portfolioPosition}>*/}
                {/*                <Typography> Завершено: </Typography>*/}
                {/*                <span className={s.bold}>*/}
                {/*                    <Typography weight={'bold'}>*/}
                {/*                        {Record.completed}*/}
                {/*                    </Typography>*/}
                {/*                </span>*/}
                {/*            </div>*/}
                {/*            <div className={s.portfolioPosition}>*/}
                {/*                <Typography> В работе: </Typography>*/}
                {/*                <span className={s.bold}>*/}
                {/*                    <Typography weight={'bold'}>*/}
                {/*                         {Record.inWork}*/}
                {/*                    </Typography>*/}
                {/*                </span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={s.contacts}>*/}
                {/*            {*/}
                {/*                Record.connection.map((i, id) => (*/}
                {/*                    <a key={id} style={{color: '#3d4550', textDecoration: 'none'}}*/}
                {/*                       href={`${i.url}${i.value}`}>*/}
                {/*                        <div key={id} className={s.contact}>*/}
                {/*                            <div style={{marginRight: '8px'}}>{*/}
                {/*                                searchIcon(i.title)*/}
                {/*                            }</div>*/}
                {/*                            <Typography> {i.value}</Typography>*/}
                {/*                        </div>*/}
                {/*                    </a>*/}
                {/*                ))*/}
                {/*            }*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </ContentContainer>
        </div>
    )
};

export const ContentContainer: React.FC<{}> = ({children}) => {
    return (
        <div className="general_container">
            {children}
        </div>
    )
}