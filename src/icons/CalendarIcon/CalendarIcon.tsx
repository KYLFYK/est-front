import { IPropsGeneral } from "../../utils/interfaces/general";

interface Props extends IPropsGeneral {
    height?: number,
    width?: number
}

const CalendarIcon: React.FC<Props> = ({ className, height = 51, width = 50 }) => (
    <svg className={className} width={`${width}`} height={`${height}`} viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5833 23.417H18.75V27.5837H14.5833V23.417ZM43.75 13.0003V42.167C43.75 44.4587 41.875 46.3337 39.5833 46.3337H10.4167C8.10417 46.3337 6.25 44.4587 6.25 42.167L6.27083 13.0003C6.27083 10.7087 8.10417 8.83366 10.4167 8.83366H12.5V4.66699H16.6667V8.83366H33.3333V4.66699H37.5V8.83366H39.5833C41.875 8.83366 43.75 10.7087 43.75 13.0003ZM10.4167 17.167H39.5833V13.0003H10.4167V17.167ZM39.5833 42.167V21.3337H10.4167V42.167H39.5833ZM31.25 27.5837H35.4167V23.417H31.25V27.5837ZM22.9167 27.5837H27.0833V23.417H22.9167V27.5837Z" fill="#1A4862" />
    </svg>
)

export default CalendarIcon