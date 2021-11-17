import React, {FC} from "react"
import FaceBook from "../../../shared/icons/Footer/FaceBook";
import Vk from "../../../shared/icons/Footer/Vk";
import Twitter from "../../../shared/icons/Footer/Twitter";
import Youtube from "../../../shared/icons/Footer/Youtube";
import FooterCopyRight from "../../../shared/icons/Footer/FooterCopyRight";
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