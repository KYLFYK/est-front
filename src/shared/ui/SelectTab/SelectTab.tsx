import React, {useState} from 'react';
import css from './SelectTab.module.scss'
import Typography from "../Typography/Typography";

function searchMenu(num: number) {
    switch (num) {
        case 1:
            return <div>1</div>
        case 2:
            return <div>2</div>
        case 3:
            return <div>3</div>
        case 4:
            return <div>4</div>
        case 5:
            return <div>5</div>
        default:
            return <div>1</div>
    }
}


const SelectTab = () => {
    const [active, setActive] = useState<number>(1)
    return (
        <div className={css.body}>
            <MenuUser active={active} onActive={setActive}/>
            <div className={css.information}>
                {
                    searchMenu(active)
                }
            </div>

        </div>
    );
};


type MenuUserType = {
    active: number
    onActive: (num: number) => void
}

const MenuUser: React.FC<MenuUserType> = ({active, onActive}) => {

    return (
        <div className={css.menu}>
            <div
                className={css.menuItem}
                style={{color: active === 1 ? '#C5A28E' : ''}}
                onClick={() => onActive(1)}
            >
                <Typography size={'default'} color={active === 1 ? 'nude' : 'tertiary'} weight="bold">
                    Агенства
                </Typography>
            </div>
            <div
                className={css.menuItem}
                style={{color: active === 2 ? '#C5A28E' : ''}}
                onClick={() => onActive(2)}
            >
                <Typography size={'default'} color={active === 2 ? 'nude' : 'tertiary'} weight="bold">
                    Застройщики
                </Typography>
            </div>
            <div
                className={css.menuItem}
                onClick={() => onActive(3)}
            >
                <Typography size={'default'} color={active === 3 ? 'nude' : 'tertiary'} weight="bold">
                    Собственники
                </Typography>
            </div>
            <div
                className={css.menuItem}
                onClick={() => onActive(4)}
            >
                <Typography size={'default'} color={active === 4 ? 'nude' : 'tertiary'} weight="bold">
                    Статистика
                </Typography>
            </div>
            <div
                className={css.menuItem}
                onClick={() => onActive(5)}
            >
                <Typography size={'default'} color={active === 5 ? 'nude' : 'tertiary'} weight="bold">
                    Добавления объектов ( old admin )
                </Typography>
            </div>
        </div>
    );
};


export default SelectTab;