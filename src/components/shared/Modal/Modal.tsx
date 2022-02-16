import css from './Modal.module.scss'
import {ModalClose} from "./ModalClose";
import {ReactNode} from "react";
import classNames from "classnames";

export type ModalPropsType = {
    setActive?: (e: boolean) => void
    active: boolean
    children: ReactNode
    className?:string
}

export const Modal = (props: ModalPropsType) => {

    let active = `${css.modal} ${css.active}`
    let modal_content = `${css.modal_content} ${css.active} `
    return (

        <div
            className={classNames(props.active ? active : css.modal,props.className)}
            // onClick={() =>props.setActive && props.setActive(false)}
        >
            <div
                className={props.active ? modal_content : css.modal_content}
                onClick={e => e.stopPropagation()}
            >
                <div className={css.button}>
                    <div className={css.position}>
                        <ModalClose setActive={() =>props.setActive && props.setActive(false)}/>
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