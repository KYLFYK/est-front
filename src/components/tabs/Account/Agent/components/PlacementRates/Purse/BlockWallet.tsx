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
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%',whiteSpace: 'nowrap',textOverflow: 'ellipsis',width:"150px"}}>
            {searchIcon(typeIcon)}
            <div title={title}>
                <Typography className={css.margin_5_substr}>{title}</Typography>
            </div>

            <Typography color={"nude"}>{info}</Typography>
        </div>
    );
};

export default BlockWallet;