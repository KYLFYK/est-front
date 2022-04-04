import css from "../../../../pages/pay/pay.module.scss";
import Typography from "../../shared/Typography/Typography";
import BaseButton from "../../shared/BaseButton/BaseButtons";
import React from "react";

export const CardFree = () =>{
    return(
        <div className={css.cardFree} >
            <svg width="403" height="189" viewBox="0 0 403 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M270 143H310V189H270V143Z" fill="#F2F2F2"/>
                <path d="M120 143H160V189H120V143Z" fill="#F2F2F2"/>
                <path d="M170 143H210V189H170V143Z" fill="#F2F2F2"/>
                <path d="M220 143H260V189H220V143Z" fill="#F2F2F2"/>
                <path d="M120 39C120 35.6863 122.686 33 126 33H304C307.314 33 310 35.6863 310 39V143H120V39Z" fill="#CAD1DA"/>
                <path d="M270 143H310L300.379 181.485C300.156 182.375 299.356 183 298.438 183H262.562C261.26 183 260.306 181.777 260.621 180.515L270 143Z" fill="#CAD1DA"/>
                <path d="M120 143H160L150.379 181.485C150.156 182.375 149.356 183 148.438 183H112.562C111.26 183 110.306 181.777 110.621 180.515L120 143Z" fill="#CAD1DA"/>
                <path d="M170 143H210L200.379 181.485C200.156 182.375 199.356 183 198.438 183H162.562C161.26 183 160.306 181.777 160.621 180.515L170 143Z" fill="#90CAF9"/>
                <path d="M220 143H260L250.379 181.485C250.156 182.375 249.356 183 248.438 183H212.562C211.26 183 210.306 181.777 210.621 180.515L220 143Z" fill="#CAD1DA"/>
                <circle cx="358.5" cy="88.5" r="5.5" fill="#F37041"/>
                <circle cx="165.5" cy="12.5" r="2.5" fill="#F37041"/>
                <circle cx="95.5" cy="78.5" r="5.5" fill="#577FFF"/>
                <circle cx="350" cy="27" r="3" fill="#577FFF"/>
                <circle cx="400" cy="53" r="3" fill="#FFC61A"/>
                <circle cx="290" cy="3" r="3" fill="#FFC61A"/>
                <circle cx="83" cy="6" r="3" fill="#FFC61A"/>
                <ellipse cx="320" cy="89.5" rx="3" ry="2.5" fill="#58B80A"/>
                <circle cx="3" cy="42" r="3" fill="#58B80A"/>
                <ellipse cx="57" cy="79.5" rx="3" ry="2.5" fill="#F37041"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M146.532 78.0971C144.996 78.2606 143.55 79.0701 142.112 80.5719C141.148 81.5782 140.565 82.602 140.197 83.9358C140.019 84.5771 140.005 84.821 140 87.2258C139.996 89.3887 140.021 89.9362 140.146 90.4985C140.546 92.2915 141.492 93.8059 142.918 94.9336C144.056 95.8333 145.15 96.3265 146.461 96.5307C146.923 96.6027 151.142 96.6222 161.987 96.6026C175.958 96.5774 176.911 96.5662 177.398 96.4218C179.481 95.8048 181.341 94.2573 182.311 92.334C182.932 91.104 183.155 89.78 183.156 87.334L183.156 85.7106H173.967H164.779L164.821 85.0397C164.898 83.8117 165.388 82.8021 166.405 81.7772C167.117 81.0585 167.978 80.5674 168.848 80.3831C169.338 80.2793 171.224 80.2589 180.45 80.2576L191.467 80.2561V88.4379V96.6197H192.809H194.151V88.4379V80.2561H202.377C206.9 80.2561 210.602 80.2759 210.602 80.3002C210.602 80.3444 202.583 95.3096 202.101 96.1652L201.844 96.6197H203.361H204.877L205.884 94.6712L206.891 92.7227L214.266 92.7448L221.641 92.7669L222.636 94.6933L223.632 96.6197H225.13H226.628L226.243 95.9055C226.031 95.5126 224.252 92.1522 222.289 88.4379C220.326 84.7236 218.546 81.3633 218.333 80.9704L217.947 80.2561H226.612H235.277V88.4379V96.6197H236.619H237.961V88.4379V80.2561H242.117H246.273V84.609C246.273 89.1118 246.322 90 246.629 91.0323C247.401 93.6268 249.931 95.9317 252.611 96.4826C253.594 96.6847 260.942 96.6847 261.926 96.4826C264.718 95.9087 267.177 93.6224 268.018 90.8189C268.204 90.1956 268.213 90.014 268.243 86.2951C268.26 84.1642 268.301 82.4227 268.334 82.4253C268.367 82.4278 270.443 85.6129 272.947 89.5032L277.5 96.5764L278.147 96.6015L278.794 96.6264L283.378 89.6408L287.961 82.6552L287.983 89.6374L288.005 96.6197H289.26H290.515V87.3099V78L289.37 78.0242L288.225 78.0483L283.244 85.5996C280.505 89.7527 278.234 93.1419 278.196 93.1311C278.159 93.1203 275.916 89.7222 273.211 85.5799L268.293 78.0483H266.958H265.623L265.58 83.9358L265.537 89.8232L265.305 90.4583C264.972 91.3692 264.585 91.9732 263.876 92.688C263.16 93.4105 262.328 93.9312 261.48 94.1886C260.92 94.3584 260.684 94.3687 257.337 94.3687C254.378 94.3687 253.698 94.3458 253.255 94.2314C251.771 93.8486 250.321 92.6202 249.573 91.1127C248.997 89.9513 249.013 90.15 248.979 83.7842L248.949 78.005H209.525C182.463 78.005 169.819 78.0337 169.204 78.0965C166.508 78.3715 164.049 80.0949 162.85 82.5505C162.278 83.7215 162.115 84.508 162.056 86.3816L162.006 87.9617H171.25H180.495L180.449 89.0656C180.416 89.8688 180.355 90.3057 180.225 90.6695C179.486 92.7403 177.892 94.055 175.744 94.3655C174.94 94.4818 148.524 94.4831 147.72 94.3669C146.376 94.1726 145.245 93.5984 144.253 92.606C143.213 91.5655 142.636 90.1831 142.636 88.7275V88.0493L150.45 88.0271L158.264 88.005V86.8795V85.7539L150.45 85.7319L142.636 85.7097L142.637 85.3855C142.639 84.9028 142.852 84.1891 143.212 83.4597C143.769 82.333 145.076 81.1855 146.422 80.642C147.284 80.2939 148.059 80.2561 154.324 80.2561H160.259L161.123 79.4099C161.742 78.8035 162.146 78.4857 162.55 78.2886L163.113 78.0135L155.147 78.0208C150.766 78.0248 146.89 78.0591 146.532 78.0971ZM217.847 85.4035C219.291 88.2108 220.472 90.5192 220.472 90.5334C220.472 90.5475 217.686 90.5591 214.281 90.5591C210.63 90.5591 208.091 90.5269 208.091 90.4805C208.091 90.4168 213.127 80.6701 213.327 80.3451C213.366 80.2835 213.707 80.259 214.304 80.2749L215.222 80.2994L217.847 85.4035Z" fill="#FCFCFC"/>
            </svg>
            <Typography className={css.mT_20}>
                Иван Петрович, Ваша заявка на бронирование дома принята.
            </Typography>
            <Typography>
                С Вами свяжутся в течение суток, чтобы уточнить статус бронирования
            </Typography>
            <div style={{display:'flex'}} className={css.mT_20}>
                <BaseButton type={"secondary"} isActive>
                    На главную
                </BaseButton>
                <BaseButton className={css.mL_10}>
                    В личный кабинет
                </BaseButton>
            </div>
            <div style={{display:"flex",flexDirection:"column" ,alignItems:"center",marginTop:'150px'}}>
                <Typography color={"tertiary"}>
                    Если у Вас остались вопросы,
                </Typography>
                <Typography color={"tertiary"}>
                    свяжитесь с нами по номеру телефона
                    <Typography color={"nude"} className={css.mL_5}>
                        777 777 777
                    </Typography>
                </Typography>
            </div>
        </div>
    )
}