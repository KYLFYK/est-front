import React, {FC} from 'react';
import Typography from "../../../../../../../shared/Typography/Typography";
import {Card} from "../../../../../../../shared/Mortgage/Card";
import css from "../../../PersonalCabinetTab/components/Statistics/Statistics.module.scss";
import {Chart} from "../../../../../../../shared/DynamicsPrice/Chart";

const table = [
    {name: '0:00', price: '0'},
    {name: '2:00', price: '15'},
    {name: '4:00', price: '20'},
    {name: '6:00', price: '39'},
    {name: '8:00', price: '42'},
    {name: '10:00', price: '36'},
    {name: '12:00', price: '28'},
    {name: '14:00', price: '11'},
    {name: '16:00', price: '12'},
    {name: '18:00', price: '22'},
    {name: '20:00', price: '32'},
    {name: '22:00', price: '12'},
    {name: '24:00', price: '2'},
]

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