import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {makeStyles} from "@material-ui/core";
import {FC} from "react";
import Link from 'next/link'
const ITEM_HEIGHT = 48;

export const useStyles = makeStyles(() => ({
        icon: {
            color: '#C5A28E',
            transform: 'rotate(90deg)',
        },
        link:{
            color:'black',
            textDecoration:'none',
        }
    }
))

type LongMenuType = {
    urlObject: string
    urlUser: string
    idChat: string
    archive:boolean
}



const LongMenu: FC<LongMenuType> = ({urlObject, urlUser, idChat,archive}) => {
    const classes = useStyles()

    const switchActive = (title: string, active: string,archive:boolean) => {
        switch (title) {
            case 'Профиль':
                return <Link  href={active} ><a href={active}  target={"_blank"} rel='noreferrer'>{title}</a></Link>
            case 'Посмотреть объект':
                return <Link  href={active} ><a className={classes.link} href={active} target={"_blank"} rel="noreferrer">{title}</a></Link>
            case 'В архив':
                return <div onClick={()=>console.log(active)}>{title}</div> //!archive?'В архив':'Восстановить чат'
            case 'Удалить переписку':
                return <div onClick={()=>console.log(active)}>{title}</div>
            default:
                return <div>{title}</div>
        }
    }

    const options = [
        {active: urlUser, title: 'Профиль'},
        {active: urlObject, title: 'Посмотреть объект'},
        {active: idChat, title: !archive?'В архив':'Восстановить чат'},
        {active: idChat, title: 'Удалить переписку'}
    ]

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls="long-menu"
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon className={classes.icon}/>
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '23ch',
                    },
                }}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} selected={option.title === 'Pyxis'} onClick={handleClose}>
                        {

                            switchActive(option.title,option.active,archive)
                        }

                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
export default LongMenu