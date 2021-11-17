import s from './Card.module.scss'
import Image from 'next/image'
import Typography from '../../../../../shared/ui/Typography/Typography'
import { objectLib } from '../../..'

interface Props {
    image: string | StaticImageData,
    price: number,
    title: string,
    housing: number,
    floor: number,
    deadline: string

}

const Card: React.FC<Props> = ({ image, price, title, housing, floor, deadline }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.imgContainer}>
                <Image src={image} layout={'fill'} alt="Planning image" className={s.img} />
            </div>
            <div className={s.content}>
                <div className={s.contentRow}>
                    <Typography weight="bold">{title}</Typography>
                    <Typography weight="bold" color="nude" className={s.price}>{objectLib.formatNumbersToCurrency(price)} ₽</Typography>
                </div>
                <div className={s.contentRow}>
                    <div>
                        <Typography weight="light" color="tertiary">Корпус</Typography>
                        <Typography>{housing}</Typography>
                    </div>
                    <div>
                        <Typography weight="light" color="tertiary">Этаж</Typography>
                        <Typography>{floor}</Typography>
                    </div>
                    <div>
                        <Typography weight="light" color="tertiary">Срок сдачи</Typography>
                        <Typography>{deadline}</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card