import React, {FC} from 'react';
import Typography from "../../../../../../../shared/Typography/Typography";
import {Chart} from "../../../../../../../shared/DynamicsPrice/Chart";
import css from "../../../../../Agency/components/MyObjectsTab/components/PersonalCabinetTab/components/Statistics/Statistics.module.scss";
import {Card} from "../../../../../../../shared/Mortgage/Card";


type ClosedApplicationsMonthType={
    title:string
    table:Array<{name:string,price:string}>
}

const ClosedApplicationsMonth :FC<ClosedApplicationsMonthType> = ({title,table}) => {
    return (
        <div>
            <Typography weight={"bold"}>{title}</Typography>
            <Card className={css.cardStyle}>
                <Chart heightValue={0} language={'ru'} table={table} divider={10} height={214} width={467} />
            </Card>
        </div>
    );
};

export default ClosedApplicationsMonth;