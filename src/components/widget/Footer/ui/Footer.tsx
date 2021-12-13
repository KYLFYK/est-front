import React, {FC} from "react"
import css from './Footer.module.scss'
import classNames from "classnames";
import FooterCopyRight from "../../../../icons/Footer/FooterCopyRight";
import FaceBook from "../../../../icons/Footer/FaceBook";
import Vk from "../../../../icons/Footer/Vk";
import Twitter from "../../../../icons/Footer/Twitter";
import Youtube from "../../../../icons/Footer/Youtube";

type FooterPropsType ={
    color: 'nude' | 'accent'
    className?: string
}

export const Footer :FC<FooterPropsType>= ({color, className}) => {

    return (
        <div style={{backgroundColor: `${color==='nude' ? '#C5A28E' : '#1A4862'}`}} className={classNames(css.footer,className)}>
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