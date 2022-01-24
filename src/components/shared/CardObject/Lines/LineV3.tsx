import React, {FC} from 'react';
import css from "./Lines.module.scss";
import Typography from "../../Typography/Typography";

type LinesV3Type={
    city:string
    country:string
    dateUpdate:string
    phone:string
}

const LineV3 :FC<LinesV3Type> = ({city,country,dateUpdate,phone}) => {
    return (
        <div className={css.lineGridV3}>
            <div className={css.df}>
                <Typography
                    className={css.paddingRight_10}
                    weight={"light"}
                >
                   Адрес:
                </Typography>
                <Typography
                    className={css.paddingRight_10}
                >
                    {country}, {city}
                </Typography>
            </div>
                <div className={css.df}>
                    <Typography weight={"light"} color={"tertiary"} className={css.paddingRight_5}>
                        Дата обновления:
                    </Typography>
                    <Typography color={"tertiary"} >
                        {dateUpdate}
                    </Typography>
                </div>
                <div>
                    <Typography >
                        {phone}
                    </Typography>
                </div>

        </div>
    );
};

export default LineV3;