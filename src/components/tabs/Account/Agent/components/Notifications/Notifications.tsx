import React, { FC, useState } from 'react';
import Typography from "../../../../../shared/Typography/Typography";
import css from './Notifications.module.scss'
import {Modal} from "../../../../../shared/Modal/Modal";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";
import {LogoIcon} from "../../../../../../icons/Header/LogoIcon";

type AgentsNotificationsType ={
    notification:Array<{date:string, time:string, message:string,read:boolean }>
    onReadAll:()=>void
    onRead:(index:number)=>void
    onDelete:(index:number)=>void
}

const AgentsNotifications :FC<AgentsNotificationsType> = ({notification , onReadAll, onRead, onDelete}) => {

    const [view, setView]=useState<boolean>(false)

    const [modalInfo,setModalInfo]=useState('')

    return (
        <div>
            <div className={css.grid}>
                <Typography>Дата</Typography>
                <Typography>Сообщение</Typography>
                <div className={css.cursor} onClick={onReadAll}>
                    <Typography color={"nude"}>Отметить все как прочитанные</Typography>
                </div>
            </div>
            <hr color={'#F2F2F2'}/>
            {
                notification.map((not,index)=>(
                    <div key={index}>
                        <div className={css.grid_Messages}>
                            <div className={css.df_ai}>
                                <div onClick={()=>onRead(index)}>
                                    <svg style={{margin: '0 8px',cursor:'pointer'}} width="8" height="8" viewBox="0 0 8 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill={not.read ? "#9495A7" : "#C5A28E"}/>
                                    </svg>
                                </div>
                                <Typography color={not.read?'tertiary':'default'}>
                                    {not.date}
                                </Typography>
                                <Typography className={css.margin_5} color={not.read?'tertiary':'default'}>
                                    {not.time}
                                </Typography>
                            </div>
                            <div style={{display: 'flex',cursor:'pointer'}}>
                                <div onClick={()=>{
                                    setModalInfo(not.message)
                                    setView(true)
                                    onRead(index)
                                }}>
                                    <Typography color={not.read?'tertiary':'default'} className={css.lineText}>
                                        {not.message}
                                    </Typography>
                                </div>
                                <div className={css.cursor} onClick={()=>onDelete(index)}>
                                    <Typography className={css.marginL_24} color={'nude'}>
                                        Удалить
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <hr color={'#F2F2F2'}/>
                    </div>
                ))
            }
            {
                <Modal setActive={() => setView(!view)} active={view}>
                    <div className={css.modal}>
                        <div className={css.iconMargin}>
                            <LogoIcon/>
                        </div>
                        <Typography >
                            {modalInfo}
                        </Typography>
                        <BaseButton isActive type={"secondary"} onClick={()=>setView(false)} className={css.buttonWidth}>ок</BaseButton>
                    </div>

                </Modal>
            }
        </div>

    );
};

export default AgentsNotifications;