import { IPropsGeneral } from "../../utils/interfaces/general";

export const FullScreen: React.FC<IPropsGeneral> = ({className}) => {
    return (
        <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9H0V14H5V12H2V9ZM0 5H2V2H5V0H0V5ZM12 12H9V14H14V9H12V12ZM9 0V2H12V5H14V0H9Z" fill="#96A2B5"/>
        </svg>
    )
}