import React, {FC} from 'react';
import css from "./Lines.module.scss";
import Typography from "../../Typography/Typography";

type LinesV2Type={
    totalArea:string
    name:string
    datePublic:string
    fromPublic:string
}

const LineV2 :FC<LinesV2Type> = ({totalArea,name,datePublic,fromPublic}) => {
    return (
        <div className={css.lineGridV2}>
                <div >
                    <Typography
                        className={css.paddingRight_10}
                        weight={"bold"}
                    >
                        {name}, {totalArea}
                    </Typography>
                </div>

                <div className={css.df}>
                    <Typography weight={"light"} color={"tertiary"}>
                        Дата публикации:
                    </Typography>
                    <Typography color={"tertiary"} >
                        {datePublic}
                    </Typography>
                </div>
                <div>
                    <Typography >
                        {fromPublic}
                    </Typography>
                </div>
                <div>221</div>

        </div>
    );
};

export default LineV2;