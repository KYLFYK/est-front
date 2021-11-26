import { IPropsGeneral } from "../../utils/interfaces/general";

export const AltCenter: React.FC<IPropsGeneral> = ({className}) => {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 0.5L0.5 6.775V7.59167L6.2 9.8L8.4 15.5H9.21667L15.5 0.5Z" fill="#96A2B5"/>
        </svg>
    )
}