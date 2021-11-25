import { IPropsGeneral } from "../../utils/interfaces/general";

export const ZoomIn: React.FC<IPropsGeneral> = ({className}) => {
    return (
        <svg className={className} width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.73438 3.89844H7.90625V5.26562H4.73438V8.85938H3.28125V5.26562H0.109375V3.89844H3.28125V0.578125H4.73438V3.89844Z" fill="#7F96A3"/>
        </svg>
    )
}