import { IPropsGeneral } from "../../utils/interfaces/general";

export const GridView: React.FC<IPropsGeneral> = ({className, fill}) => {
    return (
        <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0V8H8V0H0ZM6 6H2V2H6V6ZM0 10V18H8V10H0ZM6 16H2V12H6V16ZM10 0V8H18V0H10ZM16 6H12V2H16V6ZM10 10V18H18V10H10ZM16 16H12V12H16V16Z" fill={fill}/>
        </svg>
    )
}