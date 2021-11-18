interface Props {
    className: string,
    isActive: boolean
}

export const SliderDocIcon:React.FC<Props> = ({className, isActive}) => {
    return (
        <svg className={className} width="11" height="11" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="4.5" fill={isActive ? "#1A4862" : "white"} stroke="#F2F2F2" />
        </svg>

    )
}