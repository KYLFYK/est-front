import React, {FC} from 'react';
import Typography from "../../../../../../../shared/Typography/Typography";
import {Chart} from "../../../../../../../shared/DynamicsPrice/Chart";
import css from "../../../PersonalCabinetTab/components/Statistics/Statistics.module.scss";
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
                <Chart heightValue={0} language={'ru'} table={table} divider={10} height={244} width={497} />
            </Card>
        </div>
    );
};

export default ClosedApplicationsMonth;