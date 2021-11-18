import React, {FC, ReactNode} from 'react';
import css from './EnumerationColumn.module.scss'

type EnumerationColumnType ={
    // option:Array<{title:string,value:string}>
    children:ReactNode
}

const EnumerationColumn :FC<EnumerationColumnType>= ({children}) => {
    return (
        <div className={css.column}>
            {children}
        </div>
    );
};

export default EnumerationColumn;