import React, {FC} from 'react';
import css from "./cottages.module.scss";
import {searchIconsVillage} from "../../../../utils/searchIconsVillage/searchIconsVillage";
import Typography from "../../../shared/Typography/Typography";

type CottagesIcons ={
    icons:{
        icon:string
        title:string
        value:string
    }
}

const VillageIcons :FC<CottagesIcons> = ({icons}) => {
    return (
        <div style={{display:'flex',flexWrap:'wrap',width:'135px',height:'135px'}}>
            <div className={css.villageInfo}>
                {
                    searchIconsVillage(icons.icon)
                }
                <Typography weight={"bold"} className={css.margin_4}>
                    {icons.title}
                </Typography>
                <Typography>
                    {icons.value}
                </Typography>
            </div>
        </div>
    );
};

export default VillageIcons;