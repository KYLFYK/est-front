import React, {FC} from 'react';
import css from "./Lines.module.scss";
import Typography from "../../Typography/Typography";

type LineV5Type = {
    city: string
    street: string
    stageConstruction: string
    countApartmentAgent: string
    phone: string
}

const LineV5: FC<LineV5Type> = ({city, street, stageConstruction, countApartmentAgent, phone}) => {
    return (
        <div className={css.lineGridV5}>
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
                    {city}, {street}
                </Typography>
            </div>
            <Typography
                className={css.paddingRight_10}
            >
                {stageConstruction}
            </Typography>


            <Typography weight={"light"} color={"tertiary"}>
                {countApartmentAgent}
            </Typography>
            <div>
                <Typography>
                    {phone}
                </Typography>
            </div>

        </div>
    );
};

export default LineV5;