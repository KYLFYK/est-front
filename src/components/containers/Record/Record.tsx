import React, {useState, useEffect, FC,} from 'react';
import RomanSafonov from '../../../Pics/persons/РоманСафонов.png'
import {Button} from "@mui/material";
import {IconWhatsapp} from "../../../icons/Agent/IconWhatsapp";
import {IconTelegram} from "../../../icons/Agent/IconTelegram";
import {IconMail} from "../../../icons/Agent/IconMail";
import {IconPhone} from "../../../icons/Agent/IconPhone";
import s from './Record.module.scss';
import Typography from "../../shared/Typography/Typography";
import {BaseInput} from "../../shared/BaseInput/Input";
import Image from "next/image";

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
}

export const Record: FC<AgentRecordType> = ({Record}) => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [time, setTime] = useState('')

    const [nameDirty, setNameDirty] = useState(false)
    const [mailDirty, setMailDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [timeDirty, setTimeDirty] = useState(false)

    const [nameError, setNameError] = useState('не указано имя')
    const [mailError, setMailError] = useState('не заполнен e-mail')
    const [phoneError, setPhoneError] = useState('не указан телефон')
    const [timeError, setTimeError] = useState('не выбрано время')

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (nameError || mailError || phoneError || timeError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, mailError, phoneError, timeError])

    const [hover, setHover] = useState(false)
    const [clicked, setClicked] = useState(false)

    const onClickHandler = () => {
        const form = new FormData();
        // form.append("object_id", (choosedHouse.object_id || '').toString());
        // form.append("object_name", (choosedHouse.name || '').toString());
        form.append("name", name.toString());
        form.append("email", mail.toString());
        form.append("phone", phone.toString());
        form.append("time", time.toString());
        setName('');
        setNameError('не указано имя');
        setNameDirty(false)
        setMail('');
        setMailError('не заполнен e-mail');
        setMailDirty(false)
        setPhone('');
        setPhoneError('не указан телефон');
        setPhoneDirty(false)
        setTime('');
        setTimeError('не выбрано время');
        setTimeDirty(false)
        // dispatch(sendOrderTC(form));
        setClicked(true);
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

    const onTimeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value)
        if (!e.target.value) {
            setTimeError('не выбрано время')
        } else {
            setTimeError('')
        }
    }

    const onBlurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.value) {
            case 'name':
                if (!e.target.value) setNameError('не указано имя')
                setNameDirty(true)
                break
            case 'mail':
                if (!e.target.value) setMailError('не заполнен e-mail')
                setMailDirty(true)
                break
            case 'phone':
                if (!e.target.value) setPhoneError('не указан телефон')
                setPhoneDirty(true)
                break
            case 'time':
                if (!e.target.value) setTimeError('не выбрано время')
                setTimeDirty(true)
                break
            default:
                break
        }
    }

    const searchIcon = (title:string) => {
        switch (title) {
            case "telegram": return <IconTelegram/>
            case "phone": return <IconPhone/>
            case "email": return <IconMail/>
            case "whatsApp": return <IconWhatsapp/>
            default:return <IconPhone/>
        }
    }

    return (
        <div className={s.container}>
            <ContentContainer>
                <div className={s.title}>
                    <Typography size={'big'} color='secondary'> Хотите посмотреть Объект?</Typography>
                </div>
                <div className={s.subTitle}>
                    <Typography color='secondary'> Запишитесь на просмотр. Мы перезвоним Вам для уточнения даты и
                        времени встречи</Typography>
                </div>
                <div className={s.blockInputButton}>
                    <div className={s.blockInputs}>
                        <div className={s.input}>
                            <div className={s.inputTitle}><Typography size={'small'} color='tertiary'>Имя</Typography>
                            </div>
                            <BaseInput
                                name='name'
                                placeholder={'Имя'}
                                onBlur={e => onBlurHandler(e)}
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
                                onBlur={e => onBlurHandler(e)}
                                value={mail}
                                onChange={(e) => onEmailHandler(e)}
                                className={s.paddingInput}
                            />
                            {(mailDirty && mailError) && <div style={{color: 'red'}}>{mailError}</div>}
                        </div>
                        <div className={s.input}>
                            <div className={s.inputTitle}><Typography size={'small'}
                                                                      color='tertiary'>Телефон</Typography></div>
                            <BaseInput
                                name='phone'
                                placeholder={'Телефон'}
                                onBlur={e => onBlurHandler(e)}
                                value={phone}
                                onChange={(e) => onPhoneHandler(e)}
                                className={s.paddingInput}
                            />
                            {(phoneDirty && phoneError) && <div style={{color: 'red'}}>{phoneError}</div>}
                        </div>
                        <div className={s.input}>
                            <div className={s.inputTitle}><Typography size={'small'} color='tertiary'>Удобное
                                время</Typography></div>
                            <BaseInput
                                name='time'
                                placeholder={'12:00–18:00'}
                                onBlur={e => onBlurHandler(e)}
                                value={time}
                                onChange={(e) => onTimeHandler(e)}
                                className={s.paddingInput}
                            />
                            {(timeDirty && timeError) && <div style={{color: 'red'}}>{timeError}</div>}
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
                        {((nameDirty && nameError) || (mailDirty && mailError) || (phoneDirty && phoneError) || (timeDirty && timeError))
                        && <div className={s.unselectable}>не заполнена форма</div>}
                    </div>
                </div>
                <div className={s.card}>
                    <div className={s.avatar}>
                        <div style={{width: '100px', height: '100px', borderRadius: '100px', marginLeft: '30px'}}>
                            <Image unoptimized src={RomanSafonov} width={100} height={100} className={s.image}
                                   alt={`property agent`}
                                   loader={() => '../../../Pics/persons/РоманСафонов.png'}/>
                        </div>
                        <div className={s.fullName}>
                            <div className={s.bold}>
                                <Typography weight={'bold'}>
                                    {Record.fullName}
                                </Typography>
                            </div>
                            <div>
                                <Typography>
                                    {Record.heldPost}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={s.portfolioContacts}>
                        <div className={s.portfolio}>
                            <div className={s.portfolioPosition}>
                                <Typography> Работает: </Typography>
                                <span className={s.bold}>
                                    <Typography weight={'bold'}>
                                        {Record.workExperience}
                                    </Typography>
                                </span>
                            </div>
                            <div className={s.portfolioPosition}>
                                <Typography> Завершено: </Typography>
                                <span className={s.bold}>
                                    <Typography weight={'bold'}>
                                        {Record.completed}
                                    </Typography>
                                </span>
                            </div>
                            <div className={s.portfolioPosition}>
                                <Typography> В работе: </Typography>
                                <span className={s.bold}>
                                    <Typography weight={'bold'}>
                                         {Record.inWork}
                                    </Typography>
                                </span>
                            </div>
                        </div>
                        <div className={s.contacts}>
                            {
                                Record.connection.map((i, id) => (
                                    <a key={id} style={{color: '#3d4550', textDecoration: 'none'}}
                                       href={`${i.url}${i.value}`}>
                                        <div key={id} className={s.contact}>
                                            <div style={{marginRight: '8px'}}>{
                                                searchIcon(i.title)
                                            }</div>
                                            <Typography size={'small'}> {i.value}</Typography>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
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