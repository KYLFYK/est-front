import React, { FC } from 'react';
import IconBank from "./icons/IconBank";
import IconMoney from "./icons/IconMoney";
import IconWallet from "./icons/IconWallet";
import IconDollar from "./icons/IconDollar";
import Typography from "../../../../../../shared/Typography/Typography";
import css from './Purse.module.scss'
type BlockWalletType={
    title:string
    info:string
    typeIcon:string
}

const BlockWallet :FC<BlockWalletType> = ({title,info,typeIcon}) => {

    const searchIcon = (title:string) =>{
        switch (title){
            case 'Bank':return <IconBank/>
            case 'Wallet':return <IconWallet/>
            case 'Сash':return <IconMoney/>
            default:return <IconDollar/>
        }
    }

    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%'}}>
            {searchIcon(typeIcon)}
            <Typography className={css.margin_5px}>{title}</Typography>
            <Typography color={"nude"}>{info}</Typography>
        </div>
    );
};

export default BlockWallet;