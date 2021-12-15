import React, {FC} from 'react';
import css from "./Lines.module.scss";
import Typography from "../../Typography/Typography";
import FavoriteOffIcon from "../../FavoriteOffIcon/FavoriteOffIcon";

type LineV4Type={
    developerName:string
    allApartment:string
    developerCompany:string
}

const LineV4 :FC<LineV4Type> = ({developerName,allApartment,developerCompany}) => {
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
                    {developerName}
                </Typography>
            </div>

            <div className={css.df}>
                <Typography weight={"light"} color={"tertiary"}>
                    {allApartment}
                </Typography>
            </div>
            <div>
                <Typography >
                    {developerCompany}
                </Typography>
            </div>
            <FavoriteOffIcon onClick={favoriteOff}  id={'1'}/>

        </div>
    );
};

export default LineV4;