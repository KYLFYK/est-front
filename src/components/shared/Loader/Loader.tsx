import classNames from "classnames"
import s from "./Loader.module.scss"
import Typography from '../Typography/Typography'

export const Loader = () => {
  
  return (
    <Typography size={'header'}>Loading...</Typography>
  )

};

export const Empty = () => {

  return (
    <Typography size={'subheaderBig'}>Объекты отсутствуют</Typography>
  )
  
}
