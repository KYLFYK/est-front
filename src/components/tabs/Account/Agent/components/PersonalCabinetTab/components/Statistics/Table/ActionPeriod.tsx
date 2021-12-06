import React, { FC } from 'react';
import Typography from "../../../../../../../../shared/Typography/Typography";
import css from './../Statistics.module.scss'
import {Card} from "../../../../../../../../shared/Mortgage/Card";

type ActionPeriodType ={
    title:string
    agentActivity:{
        month:string
        active:string
        notActive:string
        allRevenue:string
        year:string
        yearActive:string
        yearNotActive:string
        allYearRevenue:string
    }

}

const ActionPeriod :FC<ActionPeriodType> = ({title,agentActivity}) => {
    return (
        <div>
            <Typography weight={"bold"}>
                {title}
            </Typography>
            <Card className={css.marginCard}>
                <div style={{display: 'flex',marginBottom:'10px'}}>
                    <Typography>
                        За месяц:
                    </Typography>

                    <Typography weight={"bold"}>
                        {agentActivity.month}
                    </Typography>
                </div>

                <div className={css.activeColumn}>
                    <Typography className={css.marginTypo} weight={"light"}>
                        Активно
                        <Typography color={"accent"} size={"subheaderBig"} className={css.marginTypo}>
                            {agentActivity.active}
                        </Typography>
                    </Typography>
                    <Typography className={css.marginTypo} weight={"light"}>
                        Неактивно
                        <Typography color={"tertiary"} size={"subheaderBig"} className={css.marginTypo}>
                            {agentActivity.notActive}
                        </Typography>
                    </Typography>
                    <Typography className={css.marginTypo} weight={"light"}>
                        Общая выручка
                        <Typography color={"nude"} size={"subheaderBig"} className={css.marginTypo}>
                            {agentActivity.allRevenue} ₽
                        </Typography>
                    </Typography>
                </div>

                <div style={{display: 'flex',marginBottom:'10px',marginTop:'10px'}}>
                    <Typography className={css.marginTypo}>
                        За год:
                    </Typography>

                    <Typography weight={"bold"} className={css.marginTypo}>
                        {agentActivity.year}
                    </Typography>
                </div>

                <div className={css.activeColumn}>
                    <Typography className={css.marginTop1} weight={"light"}>
                        Активно
                        <Typography color={"accent"} size={"subheaderBig"} className={css.marginTop1}>
                            {agentActivity.yearActive}
                        </Typography>
                    </Typography>
                    <Typography className={css.marginTop1} weight={"light"}>
                        Неактивно
                        <Typography color={"tertiary"} size={"subheaderBig"} className={css.marginTop1}>
                            {agentActivity.yearNotActive}
                        </Typography>
                    </Typography>
                    <Typography className={css.marginTop1} weight={"light"}>
                        Общая выручка
                        <Typography color={"nude"} size={"subheaderBig"} className={css.marginTop1}>
                            {agentActivity.allYearRevenue} ₽
                        </Typography>
                    </Typography>
                </div>
            </Card>
        </div>
    );
};

export default ActionPeriod;