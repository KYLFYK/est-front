import React, {useState} from 'react';
import Typography from '../Typography/Typography';
import css from './VerticalTabs.module.scss'

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


const VerticalTabs = () => {
    const [active, setActive] = useState<number>(1)
    return (
        <div className={css.body}>
            <MenuUser active={active} onActive={setActive} menu={['Агенства','Застройщики','Собственники','Статистика']}/>
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
    menu:Array<string>
}

const MenuUser: React.FC<MenuUserType> = ({active, onActive,menu}) => {

    return (
        <div className={css.menu}>
            {
                menu.map((name,index)=>(
                    <div
                        key={index}
                        className={css.menuItem}
                        style={{color: active === index ? '#C5A28E' : ''}}
                        onClick={() => onActive(index)}
                    >
                        <Typography size={'default'} color={active === index ? 'nude' : 'tertiary'} weight="bold">
                            {name}
                        </Typography>
                    </div>
                ))
            }
        </div>
    );
};


export default VerticalTabs;