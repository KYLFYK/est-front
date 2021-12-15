import React, {FC} from 'react';
import css from "./Lines.module.scss";
import Typography from "../../Typography/Typography";
import FavoriteOffIcon from "../../FavoriteOffIcon/FavoriteOffIcon";

type LinesV2Type={
    totalArea:string
    name:string
    datePublic:string
    fromPublic:string
}

const LineV2 :FC<LinesV2Type> = ({totalArea,name,datePublic,fromPublic}) => {
    const favoriteOff = (id:string) =>{
        console.log(id,"favoriteOff")
    }
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
                <FavoriteOffIcon onClick={favoriteOff}  id={'1'}/>

        </div>
    );
};

export default LineV2;