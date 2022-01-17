import React, {FC, KeyboardEvent, useState} from 'react';
import Typography from "../../../../../../../../shared/Typography/Typography";
import {Card} from "../../../../../../../../shared/Mortgage/Card";
import Image from "next/image";
import {BaseInput} from "../../../../../../../../shared/BaseInput/Input";
import {makeStyles} from "@material-ui/core";
import {myLoader} from "../../../../../../../../../utils/image/image";

export const useStyles = makeStyles(() => ({
        card: {
            backgroundColor: "#FFFFFF",
            border: '1px solid #f2f2f2',
            padding: '10px 20px',
            margin: "20px 0",
        },
        marginMessage: {
            margin: '30px 0 20px 0'
        },
        marginRight_20: {
            marginRight: 20,
        },
        jc: {
            display: "flex",
            justifyContent: 'center',
            width: "100%",
        },
        marginR_5: {
            marginRight: 5
        },
        margin_5:{
            margin:5
        }
    })
)
type ViewingLetterType = {
    statusOrDate: string
    // statusLetter:Array<string>
    statusLetter: string
    timeActive: string
    dateActive: string
    theme: string
    messages: Array<{ message: string, date: string, time: string }>
    name: string
    agentName: string
    email: string
    onAddMessage:(mes:{ message: string, date: string, time: string })=>void
}
const ViewingLetter: FC<ViewingLetterType> = ({
                                                  statusOrDate,
                                                  statusLetter,
                                                  timeActive,
                                                  theme,
                                                  messages,
                                                  name,
                                                  email,
                                                  agentName,
                                                  onAddMessage
                                              }) => {
    const classes = useStyles()

    const lengthZero = (e:number) => {
        if(e.toString().length > 1) return e
        return '0'+e
    }

    const [value ,setValue]=useState<string>('')
    const addDescription = (e : KeyboardEvent) => {
        if(e.key === 'Enter'){
            const date = new Date
            const day = date.getDate()
            const year = date.getFullYear()
            const month = date.getMonth()
            const minutes = date.getMinutes()
            const hours = date.getHours()

            const message = {
                message: value,
                date: `${lengthZero(day)}.${lengthZero(month+1)}.${lengthZero(year)}`,
                time: `${lengthZero(hours)}:${lengthZero(minutes)}`
            }
            setValue('')
            onAddMessage(message)
            console.log(message)
        }
    }
    return (
        <>
            <div className={classes.jc}>
                <Typography>
                    {statusOrDate}
                </Typography>
            </div>
            <Card className={classes.card}>
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <div>
                        <div style={{display: 'flex', marginBottom: '10px'}}>
                            <Typography color={"accent"} weight={"bold"} className={classes.marginRight_20}>
                                Исходящее письмо
                            </Typography>
                            <Typography color={"nude"} className={classes.marginRight_20}>
                                {statusLetter}
                            </Typography>
                            <Typography color={"tertiary"}>
                                {timeActive}
                            </Typography>
                        </div>
                        <div style={{display: 'flex', marginBottom: '10px'}}>
                            <Typography className={classes.marginR_5} weight={"light"}>
                                Кому:
                            </Typography>
                            <Typography className={classes.marginRight_20}>
                                {name},{email}
                            </Typography>
                            <Typography className={classes.marginR_5} weight={"light"}>
                                От кого:
                            </Typography>
                            <Typography>
                                {agentName}
                            </Typography>
                        </div>
                        <div style={{display: 'flex', marginBottom: '10px'}}>
                            <Typography className={classes.marginR_5} weight={"light"}>
                                Тема:
                            </Typography>
                            <Typography weight={"bold"} className={classes.marginRight_20}>
                                {theme}
                            </Typography>
                        </div>
                        {
                            messages.map((mes, index) => (
                                <div key={index} style={{display: 'flex'}}>
                                    <Typography className={classes.margin_5} color={"tertiary"}>
                                        {mes.date}
                                    </Typography>
                                    <Typography className={classes.margin_5} color={"tertiary"}>
                                        {mes.time}
                                    </Typography>
                                    <Typography className={classes.margin_5}>
                                        {mes.message}
                                    </Typography>
                                </div>
                            ))
                        }

                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{margin: '0 10px', cursor: 'pointer'}}
                             onClick={() => window.open(`mailto:${email}`)}>
                            <svg
                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                                    fill="#1A4862"/>
                            </svg>
                        </div>
                        <div style={{width: "50px", height: '50px'}}>
                            <Image
                                src={'https://test-estatum.f-case.ru/static/media/%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D0%A1%D0%B0%D1%84%D0%BE%D0%BD%D0%BE%D0%B2.b38acd57.png'}
                                width={'50px'}
                                height={'50px'}
                                alt={'photo'}
                                loader={e=>myLoader(e.src,e.width,e.quality)}
                            />
                        </div>
                    </div>
                </div>
                <BaseInput
                    onKeyDown={e=>addDescription(e)}
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    placeholder={'Добавить комментарий'}
                />
            </Card>
        </>
    );
};

export default ViewingLetter;