import React from 'react'
import { observer } from "mobx-react-lite"
import { useSearchStore } from "../../../../mobx/stores/SearchStore/SearchStore"
import BaseButton from '../../../shared/BaseButton/BaseButtons'
import {GridView} from '../../../../icons/FinderPageIcon/GridView'
import {MapView} from '../../../../icons/FinderPageIcon/MapView'
import s from './styles.module.scss'
import { ToggleButtonsWithIcons } from '../../../shared/ToggleButtonsWithIcons/ToggleButtonsWithIcons'
import FilterIcon from "../../../../icons/FilterIcon/FilterIcon";
import { DesktopOnly } from 'src/components/containers/Adaptive/DesktopOnly'

interface Props {
    onActiveFilter?: any
}

export const ToggleButtons: React.FC<Props> = observer(({onActiveFilter}) => {
    const searchStore = useSearchStore()
    const toggleButtonOptions = [
        { icon: <GridView fill={searchStore.views.grid ? '#96A2B5' : '#CAD1DA'}/>, onclick: () => searchStore.setView('grid') },
        { icon: <MapView fill={searchStore.views.map ? '#96A2B5' : '#CAD1DA'}/>, onclick: () => searchStore.setView('map') },
    ]

    return (
        <div className={s.finderButtons}>
                    {/*<div style={{width:'114px',border:'1px solid #f2f2f'}}>*/}
                    {/*    <Typography>*/}
                    {/*        Фильтры*/}
                    {/*    </Typography>*/}
                    {/*</div>*/}
                    <BaseButton
                        icon={<FilterIcon />}
                        iconPosition={"start"}
                        type={"secondary"}
                        className={s.paddingButton}
                        onClick={onActiveFilter}
                    >
                        Фильтры
                    </BaseButton>
                    {/*<BaseButton*/}
                    {/*    type={'secondary'}*/}
                    {/*    isActive={false}*/}
                    {/*    icon={<FavoriteIcon />}*/}
                    {/*    iconActive={''}*/}
                    {/*>*/}
                    {/*    Сохранить поиск*/}
                    {/*</BaseButton>*/}
                    <div className={s.toggleButtonsWrap}>
                        <ToggleButtonsWithIcons
                            items={toggleButtonOptions}
                        />
                    </div>
                </div>
    )
})