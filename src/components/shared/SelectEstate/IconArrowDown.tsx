import React from 'react'

type IconArrowDownPropsType ={
    open: boolean
    setOpen: (open: boolean) => void
}

export const IconArrowDown :React.FC<IconArrowDownPropsType>  = ({open , setOpen}) => {
    return (
        <span onClick={() => setOpen(!open)} >
            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.85156 6.45312C5.0625 6.66406 5.41406 6.66406 5.625 6.45312L10.1953 1.90625C10.4062 1.67188 10.4062 1.32031 10.1953 1.10938L9.65625 0.570312C9.44531 0.359375 9.09375 0.359375 8.85938 0.570312L5.25 4.17969L1.61719 0.570312C1.38281 0.359375 1.03125 0.359375 0.820312 0.570312L0.28125 1.10938C0.0703125 1.32031 0.0703125 1.67188 0.28125 1.90625L4.85156 6.45312Z" fill="#BDBDBD"/>
            </svg>
        </span>
    );
};
