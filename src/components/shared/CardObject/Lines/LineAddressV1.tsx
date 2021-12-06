import React, {FC} from 'react';
import Typography from "../../Typography/Typography";
import css from "./Lines.module.scss";

type LinesV1Type = {
    address: string
}

const LinesV1: FC<LinesV1Type> = ({address}) => {
    return (
        <div className={css.df}>
            <Typography weight={"light"} className={css.paddingRight_5}>
                Адрес:
            </Typography>
            <Typography>
                {address}
            </Typography>
        </div>
    );
};

export default LinesV1;