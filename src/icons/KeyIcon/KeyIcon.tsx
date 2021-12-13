import { IPropsGeneral } from "../../utils/interfaces/general";

const KeyIcon: React.FC<IPropsGeneral> = ({className}) => (
    <svg className={className} width="46" height="25" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.7506 8.33333H24.3548C22.6465 3.47917 18.0215 0 12.584 0C5.68815 0 0.0839844 5.60417 0.0839844 12.5C0.0839844 19.3958 5.68815 25 12.584 25C18.0215 25 22.6465 21.5208 24.3548 16.6667H25.084L29.2507 20.8333L33.4173 16.6667L37.584 20.8333L45.9173 12.4167L41.7506 8.33333ZM12.584 18.75C9.14648 18.75 6.33398 15.9375 6.33398 12.5C6.33398 9.0625 9.14648 6.25 12.584 6.25C16.0215 6.25 18.834 9.0625 18.834 12.5C18.834 15.9375 16.0215 18.75 12.584 18.75Z" fill="#1A4862" />
    </svg>
)

export default KeyIcon