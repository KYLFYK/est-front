import React from 'react';
import {MainContainer} from "../src/components/containers/MainContainer/MainContainer";
import Error404 from "../public/Error404";
import Link from 'next/link'
import Typography from "../src/components/shared/Typography/Typography";
import BaseButton from "../src/components/shared/BaseButton/BaseButtons";
import css from './../public/Error404.module.scss'
const ErrorPage= () => {
    return (
        <MainContainer>
            <div className={css.container404}>
                <div>
                    <Error404/>
                    <div className={css.centerInfo}>
                        <div>
                            <div className={css.margin}>
                                <Typography weight={"light"}>
                                    К сожалению, данная страница недоступна
                                </Typography>
                            </div>
                            <div className={css.centerInfo}>
                                <Link href={'/'}>
                                    <BaseButton type={"secondary"} isActive>
                                        Вернуться на главную страницу
                                    </BaseButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default ErrorPage;