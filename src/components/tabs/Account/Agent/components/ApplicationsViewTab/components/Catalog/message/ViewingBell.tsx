import React, {FC, useState,KeyboardEvent} from 'react';
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
            marginRight: 20
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
type ViewingBellType = {
    statusOrDate: string
    timeActive: string
    dateActive: string
    phone: string
    name: string
    agentName: string
    email: string
    messages: Array<{ message: string, date: string, time: string }>
    onAddMessage:(mes:{ message: string, date: string, time: string })=>void
}
const ViewingBell: FC<ViewingBellType> = ({
                                              statusOrDate,
                                              timeActive,
                                              phone,
                                              name,
                                              agentName,
                                              dateActive,
                                              messages,
                                              onAddMessage
                                          }) => {
    const classes = useStyles()
    const [value ,setValue]=useState<string>('')

    const lengthZero = (e:number) => {
        if(e.toString().length > 1) return e
        return '0'+e
    }

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
                                Исходящий звонок
                            </Typography>
                            <Typography className={classes.marginR_5} color={"nude"}>
                                {dateActive.split('-').reverse().join('.')}
                            </Typography>
                            <Typography className={classes.marginR_5} color={"nude"}>
                                {timeActive}
                            </Typography>
                        </div>
                        <div style={{display: 'flex', marginBottom: '10px'}}>
                            <Typography className={classes.marginR_5} weight={"light"}>
                                Кому:
                            </Typography>
                            <Typography className={classes.marginRight_20}>
                                {name}, {phone}
                            </Typography>
                            <Typography className={classes.marginR_5} weight={"light"}>
                                От кого:
                            </Typography>
                            <Typography>
                                {agentName}
                            </Typography>
                        </div>
                        <div>
                            {messages.map((mes, index) => (
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

                            ))}
                        </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{margin: '0 10px', cursor: 'pointer'}} onClick={() => window.open(`tel:${phone}`)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
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
                    placeholder={'Добавить комментарий'}/>
            </Card>
        </>
    );
};

export default ViewingBell;

