import React, {FC, useEffect, useState} from 'react';
import s from "./ScrollUp.module.scss";
import { ScrollUPIcon } from '../../../icons/ScrollUpIcon/ScrollUPIcon';

interface Props {
    refs?: any[]
}

export const ScrollUp: FC<Props> = ({refs}) => {
    
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        window.pageYOffset > (refs && refs[1] ? refs[1].offsetTop - window.innerHeight + Math.floor(refs[1].clientHeight/2) + 30 : window.innerHeight) 
                            ? setVisible(true) 
                            : setVisible(false);
    }

    const scrollingUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    } 

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);

        return () => {
            window.removeEventListener('scroll', toggleVisible);
        }
    }, [])

    return (
        visible ? <div className={s.container} onClick={scrollingUp}><ScrollUPIcon /></div> : <></>
    )
};