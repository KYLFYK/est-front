import css from './Modal.module.scss'
import {ModalClose} from "./ModalClose";
import {ReactNode} from "react";

export type ModalPropsType = {
    setActive: (e: boolean) => void
    active: boolean
    children: ReactNode
}

export const ModalPersonal = (props: ModalPropsType) => {

    let active = `${css.modal} ${css.active}`
    let modal_content = `${css.modal_content} ${css.active} `
    return (

        <div
            className={props.active ? active : css.modal}
            onClick={() => props.setActive(false)}
        >
            <div
                className={props.active ? modal_content : css.modal_content}
                onClick={e => e.stopPropagation()}
            >
                <div className={css.button}>
                    <div className={css.position}>
                        <ModalClose setActive={() => props.setActive(false)}/>
                    </div>
                    <div className={css.padding}>
                        <div className={css.positionContent}>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}