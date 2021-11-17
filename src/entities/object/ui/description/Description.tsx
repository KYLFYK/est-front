import Typography from "../../../../shared/ui/Typography/Typography"
import s from './Description.module.scss'

interface Props {
    items: string[]
}

// TODO: Article wrapper
const Description: React.FC<Props> = ({items}) => {
    return (
        <>
            {items.map((item, idx) => <Typography key={idx} className={s.descriptionItem}> {item}</Typography>)}
        </>
    )
}

export default Description