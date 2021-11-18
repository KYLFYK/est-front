import React, {FC} from "react"
import css from './Footer.module.scss'
import classNames from "classnames";
import FooterCopyRight from "../../../../icons/Footer/FooterCopyRight";
import FaceBook from "../../../../icons/Footer/FaceBook";
import Vk from "../../../../icons/Footer/Vk";
import Twitter from "../../../../icons/Footer/Twitter";
import Youtube from "../../../../icons/Footer/Youtube";

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