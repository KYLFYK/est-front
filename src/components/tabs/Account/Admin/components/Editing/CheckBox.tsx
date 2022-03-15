import React, { FC } from 'react';

type CheckBoxType ={
    disable?:boolean
}

export const CheckBoxOn:FC<CheckBoxType> = ({disable }) => {
    return (
        <>
            {
                !disable
                    ?
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="18" height="18" rx="4" fill="#CAD1DA"/>
                        <path d="M7.31251 11.1202L5.07122 8.87893L4.95001 8.75771L4.82879 8.87893L4.04129 9.66643L3.92007 9.78765L4.04129 9.90886L7.19129 13.0589L7.31251 13.1801L7.43372 13.0589L14.1837 6.30886L14.3049 6.18765L14.1837 6.06643L13.3962 5.27893L13.275 5.15771L13.1538 5.27893L7.31251 11.1202Z" fill="white" stroke="white" strokeWidth="0.342857"/>
                    </svg>
                    :
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="18" height="18" rx="4" fill="#146695"/>
                        <path d="M7.31251 11.1202L5.07122 8.87893L4.95001 8.75771L4.82879 8.87893L4.04129 9.66643L3.92007 9.78765L4.04129 9.90886L7.19129 13.0589L7.31251 13.1801L7.43372 13.0589L14.1837 6.30886L14.3049 6.18765L14.1837 6.06643L13.3962 5.27893L13.275 5.15771L13.1538 5.27893L7.31251 11.1202Z" fill="white" stroke="white" strokeWidth="0.342857"/>
                    </svg>
            }
        </>

    );
};
export const CheckBoxOff:FC<CheckBoxType> = ({disable}) => {
    return (
        <>
            {
                !disable
                    ?
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" stroke="#F2F2F2"/>
                    </svg>
                    :
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" stroke="#146695"/>
                    </svg>
            }
        </>


    );
};
