import React, { FC } from 'react';
import Typography from "../../../../../../../shared/Typography/Typography";
import css from '../../../PersonalCabinetTab/components/Statistics/Statistics.module.scss'
import {Card} from "../../../../../../../shared/Mortgage/Card";

type ActionPeriodType ={
    left:string
    center:string
    right:string

    title:string
    agentActivity:{
        month:string
        monthActive:string
        monthNotActive:string
        monthAll:string
        year:string
        yearActive:string
        yearNotActive:string
        allYear:string
    }
}

const ActionPeriod :FC<ActionPeriodType> = ({title,agentActivity,left,center,right}) => {
    return (
        <div>
            <Typography weight={"bold"}>
                {title}{left}{center}{right}
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
                        {left}
                        <Typography color={"accent"} size={"subheaderBig"} className={css.marginTypo}>
                            {agentActivity.monthActive}
                        </Typography>
                    </Typography>
                    <Typography className={css.marginTypo} weight={"light"}>
                        {center}
                        <Typography color={"tertiary"} size={"subheaderBig"} className={css.marginTypo}>
                            {agentActivity.monthNotActive}
                        </Typography>
                    </Typography>
                    <Typography className={css.marginTypo} weight={"light"}>
                        {right}
                        <Typography color={"nude"} size={"subheaderBig"} className={css.marginTypo}>
                            {agentActivity.monthAll}
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
                        {left}
                        <Typography color={"accent"} size={"subheaderBig"} className={css.marginTop1}>
                            {agentActivity.yearActive}
                        </Typography>
                    </Typography>
                    <Typography className={css.marginTop1} weight={"light"}>
                        {center}
                        <Typography color={"tertiary"} size={"subheaderBig"} className={css.marginTop1}>
                            {agentActivity.yearNotActive}
                        </Typography>
                    </Typography>
                    <Typography className={css.marginTop1} weight={"light"}>
                        {right}
                        <Typography color={"nude"} size={"subheaderBig"} className={css.marginTop1}>
                            {agentActivity.yearNotActive}
                        </Typography>
                    </Typography>
                </div>
            </Card>
        </div>
    );
};

export default ActionPeriod;