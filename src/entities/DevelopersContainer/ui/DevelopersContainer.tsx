import React, {FC} from 'react';
import css from './developers.module.scss'
import {EstateDevelopers} from "../../../shared/ui/EstateDeveloper/EstateDeveloper";
import Typography from "../../../shared/ui/Typography/Typography";

type DevelopersContainerType = {

}

const mock = ['EMAAR','EMAAR','EMAAR','EMAAR','EMAAR',]

const DevelopersContainer :FC<DevelopersContainerType> = () => {
    return (
        <div className={css.containerDevelopersBlock}>
            <div className={css.margin}>
                <Typography size={'medium'} weight="bold"> Застройщики и агества, которые нам доверяют </Typography>
            </div>
            <div className={css.containerDevelopers}>
                {
                    mock.map((name,index)=>(
                        <EstateDevelopers key={index} title={name}/>
                    ))
                }
            </div>
        </div>
    );
};

export default DevelopersContainer;