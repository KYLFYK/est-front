import React, {FC} from 'react';
import Typography from "../../Typography/Typography";
import css from './Lines.module.scss'
type LineV7Type={
    address:string
    datePublish:string

}

const LineV7 :FC<LineV7Type> = ({address,datePublish}) => {
    return (
        <div className={css.lineGridV6}>
            <div className={css.df}>
                <Typography weight={"light"}>
                    Адрес:
                </Typography>
                <Typography>
                    {address}
                </Typography>
            </div>
            <div className={css.df}>
                <Typography weight={"light"} color={"tertiary"}>
                    Дата публикации:
                </Typography>
                <Typography color={"tertiary"}>
                    {datePublish}
                </Typography>
            </div>
            <div>

            </div>
        </div>
    );
};

export default LineV7;