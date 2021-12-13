import { IPropsGeneral } from "../../utils/interfaces/general";

const PlusIcon: React.FC<IPropsGeneral> = ({ className }) => (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.5 20.5H20.5V35.5H15.5V20.5H0.5V15.5H15.5V0.5H20.5V15.5H35.5V20.5Z" fill="#1A4862" />
    </svg>
)

export default PlusIcon