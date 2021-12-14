import React, { FC } from 'react';
import Typography from "../../Typography/Typography";
import css from './Lines.module.scss'

type LineArrayType={
    mainSpecifications:Array<string>
}

const LineArray :FC<LineArrayType> = ({mainSpecifications}) => {
    return (
        <div className={css.df}>
            {
                mainSpecifications.map((spec, index) => {
                        let length = mainSpecifications.length
                        return <div key={index} style={{display: "flex", alignItems: 'center'}}>
                            <Typography>{spec}</Typography>
                            {
                                index+1 < length && <Vertical/>
                            }
                        </div>
                    }
                )
            }
        </div>
    );
};

const Vertical = () => {
    return (
        <svg style={{padding: '0 5px'}} width="1" height="11" viewBox="0 0 1 11" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <rect width="1" height="11" fill="#CAD1DA"/>
        </svg>
    )
}
export default LineArray;