import { IPropsGeneral } from "../../utils/interfaces/general";

export const RestIcon: React.FC<IPropsGeneral> = ({ className }) => (
    <svg className={className} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="24.5" fill="white" stroke="#F2F2F2" />
        <path d="M14 18H28L22 27V31H24V33H18V31H20V27L14 18ZM23.1 22L24.5 20H17.49L18.89 22H23.1ZM30 18H35V21H32V30C32 31.66 30.66 33 29 33C27.34 33 26 31.66 26 30C26 28.34 27.34 27 29 27C29.35 27 29.69 27.06 30 27.17V18Z" fill="#1A4862" />
    </svg>



)