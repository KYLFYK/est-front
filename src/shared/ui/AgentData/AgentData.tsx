import React from 'react';
import { IconMail } from '../../icons/Agent/IconMail';
import { IconTelegram } from '../../icons/Agent/IconTelegram';
import { IconWhatsapp } from '../../icons/Agent/IconWhatsapp';
import css from "./AgentData.module.scss";
import Typography from "../Typography/Typography";

type AgentDataPropsType ={

}

export const AgentData :React.FC<AgentDataPropsType> = ({}) => {
    return (
        <>
            <img className={css.photoAgent} src="https://cana-da.ru/wp-content/uploads/2020/08/day-1-2048x2048.jpg" alt="agent"/>
            <Typography size={'default'} color="accent" weight={'medium'} className={css.marginTop} >
                Валерий Сидоров
            </Typography>
            <Typography size={'default'} color="accent" >
                старший агент
            </Typography>
            <div className={css.gridWork}>
                <div className={css.marginWork}>
                    <Typography size={'default'} color="accent"  >
                        Работает
                    </Typography>
                    <Typography size={'default'} color="accent" weight={'medium'} >
                        5лет
                    </Typography>
                </div>
                <div className={css.marginWork}>
                    <Typography size={'default'} color="accent"  >
                        Завершенных
                    </Typography>
                    <Typography size={'default'} color="accent" weight={'medium'} >
                        43 проекта
                    </Typography>
                </div>
                <div className={css.marginWork}>
                    <Typography size={'default'} color="accent"  >
                        В работе
                    </Typography>
                    <Typography size={'default'} color="accent" weight={'medium'} >
                        2 проекта
                    </Typography>
                </div>
            </div>
            <div className={css.gridConnection}>
                <div className={css.marginData}>
                    <IconWhatsapp />
                    <Typography size={'default'} color="accent"  >
                        +7 912 426 30 98
                    </Typography>
                </div>
                <div className={css.marginData}>
                    <IconMail/>
                    <Typography size={'default'} color="accent"  >
                        +7 912 426 30 98
                    </Typography>
                </div>
                <div className={css.marginData}>
                    <IconTelegram/>
                    <Typography size={'default'} color="accent"  >
                        +7 912 426 30 98
                    </Typography>
                </div>
                <div className={css.marginData}>
                    <IconMail/>
                    <Typography size={'default'} color="accent"  >
                        marketPlace@mail.ru
                    </Typography>
                </div>
            </div>
        </>
    );
};

