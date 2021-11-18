import css from './Modal.module.scss'
import React, {FC} from "react";
import { LogoClose } from '../../../icons/LogoClose/LogoClose';


type ModalClosePropsType ={
    setActive: () => void
}

export const ModalClose :FC<ModalClosePropsType> = ({setActive})  => {
    return (
        <button
            className={css.button}
            onClick={()=>setActive()}
        >
            <div style={{position:'relative',left:'45px',top:'5px'}}>
                <LogoClose/>
            </div>
        </button>
    );
};