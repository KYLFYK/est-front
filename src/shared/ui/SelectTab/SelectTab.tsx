import React, {useState} from 'react';
import css from './SelectTab.module.scss'

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
                Агенства
            </div>
            <div
                className={css.menuItem}
                style={{color: active === 2 ? '#C5A28E' : ''}}
                onClick={() => onActive(2)}
            >
                Застройщики
            </div>
            <div
                className={css.menuItem}
                style={{color: active === 3 ? '#C5A28E' : ''}}
                onClick={() => onActive(3)}
            >
                Собственники
            </div>
            <div
                className={css.menuItem}
                style={{color: active === 4 ? '#C5A28E' : ''}}
                onClick={() => onActive(4)}
            >
                Статистика
            </div>
            <div
                className={css.menuItem}
                style={{color: active === 5 ? '#C5A28E' : ''}}
                onClick={() => onActive(5)}
            >
                Добавления объектов ( old admin )
            </div>
        </div>
    );
};


export default SelectTab;