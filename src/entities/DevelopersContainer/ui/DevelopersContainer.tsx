import React, {FC} from 'react';
import css from './developers.module.scss'
import {EstateDevelopers} from "../../../shared/ui/EstateDeveloper/EstateDeveloper";
import HeadLine from "../../../shared/ui/HeadLine/HeadLine";

type DevelopersContainerType = {

}

const mock = ['EMAAR','EMAAR','EMAAR','EMAAR','EMAAR',]

const DevelopersContainer :FC<DevelopersContainerType> = () => {
    return (
        <div className={css.containerDevelopersBlock}>
            <HeadLine title={'Застройщики и агества, которые нам доверяют'} >
                <div className={css.containerDevelopers}>
                    {
                        mock.map((name,index)=>(
                            <EstateDevelopers key={index} title={name}/>
                        ))
                    }
                </div>
            </HeadLine>
        </div>
    );
};

export default DevelopersContainer;