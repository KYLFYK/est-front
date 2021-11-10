import s from './BaseButtons.module.scss'

interface Props {
    className?: string
}


const BaseButton: React.FC<Props> = ({children, className}) => {
    return (
        <button className={s.basebutton}>
            {children}
        </button>
    )
}

export default BaseButton