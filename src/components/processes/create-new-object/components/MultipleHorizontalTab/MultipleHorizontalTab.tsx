import React from 'react'
import Typography from '../../../../shared/Typography/Typography'
import s from './MultipleHorizontalTab.module.scss'

const test = ['Об объекте', 'Основная информация', 'Инфраструктура', '5', '6']

// isDone

interface ITabs {
    label: string,
    Components: JSX.Element | JSX.Element[]
}

interface Props {
    activeTabIdx: number,
    activeSubTabIdx: number,
    tabs: ITabs[]
}

const MultipleHorizontalTab: React.FC<Props> = ({ activeSubTabIdx, activeTabIdx, tabs }) => {
    return (
        <div>
            <div className={s.nav}>
                {tabs.map((item, idx) => {
                    const underlineWidth = item.Components instanceof Array ? 100 / item.Components.length : 100
                    const subTabsAmmount = item.Components instanceof Array ? item.Components.length : 1
                    const UnderlineComponent = Array(subTabsAmmount).fill('').map((item, idx) => <div className={s.underlineItem} key={idx} style={{ width: `${underlineWidth}%` }} />)

                    return (
                        <div key={idx} className={s.navItem}>
                            <Typography> {item.label} </Typography>
                            <div className={s.navUnderline}>
                                {UnderlineComponent}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MultipleHorizontalTab