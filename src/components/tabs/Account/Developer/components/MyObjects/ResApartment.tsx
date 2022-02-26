import React, {FC} from 'react';
import Typography from "../../../../../shared/Typography/Typography";
import css from './ResComplexes.module.scss'

type ResApartmentType = {
    name: string
    price: string
    info:{
        corpus: {'Корпус':string},
        floor: {'Этаж':string},
        area: {'Площадь':string},
        status: {'Статус':string},
    }

}

const ResApartment: FC<ResApartmentType> = ({name, price, info}) => {

    return (
        <div className={css.apartmentBorder}>
            <Typography weight={"bold"}>
                {name}
            </Typography>
            <ResLine line={info.corpus} />
            <ResLine line={info.floor} />
            <ResLine line={info.area} />
            <ResStatus line={info.status} />
            <Typography className={css.marginT_5}>
                {price}
            </Typography>
        </div>
    );
};

export default ResApartment;

type ResLineType = {
    line:object
}

const ResLine: FC<ResLineType> = ({line}) => {

    const name = Object.keys(line)
    const info =Object.values(line)

    return (
        <div className={css.df_jc}>
            <Typography weight={"light"}>
                {name}
            </Typography>
            <Typography>
                {info}
            </Typography>
        </div>
    );
};

const ResStatus :FC<ResLineType> = ({line}) =>{
    const name = Object.keys(line)
    const info =Object.values(line)

    const searchColor = (type:string)=>{
        switch (type){
            case 'Продана':return "tertiary"
            case 'Свободна':return "green"
            default:return 'nude'
        }
    }

    return(
        <div className={css.df_jc}>
            <Typography weight={"light"}>
                {name}
            </Typography>
            <Typography color={searchColor(info.toString())} >
                {info}
            </Typography>
        </div>
    )
}
