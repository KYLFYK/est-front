import React, {FC} from "react"
import FaceBook from "../../Icons/Footer/FaceBook";
import Vk from "../../Icons/Footer/Vk";
import Twitter from "../../Icons/Footer/Twitter";
import Youtube from "../../Icons/Footer/Youtube";
import FooterCopyRight from "../../Icons/Footer/FooterCopyRight";
import css from './Footer.module.scss'
import classNames from "classnames";

type FooterPropsType ={
    className?:string
}

export const Footer :FC<FooterPropsType>= ({className}) => {

    return (
        <div className={classNames(css.footer,className)}>
            <FooterCopyRight/>
            <div>
                <FaceBook/>
                <Vk/>
                <Twitter/>
                <Youtube/>
            </div>
        </div>
    )
}