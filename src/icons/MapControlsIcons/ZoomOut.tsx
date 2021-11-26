import { IPropsGeneral } from "../../utils/interfaces/general";

export const ZoomOut: React.FC<IPropsGeneral> = ({className}) => {
    return (
        <svg className={className} width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5625 1.91406H0.125V0.734375H10.5625V1.91406Z" fill="#7F96A3"/>
        </svg>
    )
}