import classNames from "classnames"
import s from "./Loader.module.scss"
import Typography from '../Typography/Typography'

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
