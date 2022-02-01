import React, { FC } from 'react';
import css from "../../../../Agency/components/MyObjectsTab/components/PersonalCabinetTab/components/AccountEdit/AccountEdit.module.scss";
import Typography from "../../../../../../shared/Typography/Typography";

type BackPageType={
    onBackPage:()=>void
    title:string
}

const BackPage:FC<BackPageType> = ({onBackPage,title}) => {
    return (
        <div className={css.marginB_30}>
            <div className={css.title} onClick={onBackPage}>
                <svg style={{marginRight:'4px'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#3D4550"/>
                </svg>
                <Typography weight={'bold'}>{title}</Typography>
            </div>
            <hr color={'#F2F2F2'}/>
        </div>
    );
};

export default BackPage;