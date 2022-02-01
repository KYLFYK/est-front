import React, {FC} from 'react';
import Typography from "../../../../../../../shared/Typography/Typography";
import {Card} from "../../../../../../../shared/Mortgage/Card";
import css from "../../../../../Agency/components/MyObjectsTab/components/PersonalCabinetTab/components/Statistics/Statistics.module.scss";
import {Chart} from "../../../../../../../shared/DynamicsPrice/Chart";

type WorkloadWorkType={
    title:string
    table:Array<{name:string,price:string}>
}

const WorkloadWork :FC<WorkloadWorkType> = ({title,table}) => {
    return (
        <div>
            <Typography weight={"bold"}>{title}</Typography>
            <Card className={css.cardStyle}>
                <Chart heightValue={0} language={'ru'} table={table} divider={10} height={244} width={497} />
            </Card>
        </div>
    );
};

export default WorkloadWork;