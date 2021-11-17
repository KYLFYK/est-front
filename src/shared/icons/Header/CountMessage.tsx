import React, {FC} from 'react';

type CountMessageType ={
    messageCount:number
}

const CountMessage :FC<CountMessageType>= ({messageCount}) => {
    return (
        <span>
             <span style={{color:"white",position:'relative',fontSize:'8px',left:messageCount > 9?'13px':'11px',bottom:'6px'}} >{messageCount}</span>
             <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.5" cy="8.5" r="8.5" fill="#C5A28E"/>
            </svg>
        </span>
    );
};

export default CountMessage;