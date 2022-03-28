import classNames from "classnames"
import s from "./Loader.module.scss"
import Typography from '../Typography/Typography'


export type statusActiveApiType = {
    status: 'Loader' | 'Empty' | 'Error' | ''
}

export const statusActiveApi = (status: 'loader' | 'empty' | 'error' | string) => {
    switch (status) {
        case 'loader':
            return <Loader/>
        case 'empty':
            return <Empty/>
        case 'error':
            return <Error/>
        default:
            return <></>
    }
}

export const Loader = () => {

    return (
        <Typography className={s.content} size={'header'}>Загрузка...</Typography>
    )

};

export const Empty = () => {

    return (
        <Typography size={'subheaderBig'}>Объекты отсутствуют</Typography>
    )

}

export const Error = () => {

    return (
        <Typography size={'subheaderBig'} color={'red'}>Ошибка запроса</Typography>
    )

}
