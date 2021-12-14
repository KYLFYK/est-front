import React from 'react'
import { makeStyles } from "@material-ui/core"
import ObjectCard from '../Card/index'
import {BaseDropDown} from '../../shared/BaseDropDown/BaseDropDown'
import BaseButton from '../../shared/BaseButton/BaseButtons'
import FavoriteIcon from '../../../icons/Favorite/Favorite'
import {GridView} from '../../../icons/FinderPageIcon/GridView'
import {MapView} from '../../../icons/FinderPageIcon/MapView'
import { OpenCloseMapButton } from "./OpenCloseMapButton";
import s from './styles.module.scss'
import {  DROPDOWN_PLACEHOLDER, SORT_FILTER_OPTIONS } from "../PlanningFilter/config"
import { ToggleButtonsWithIcons } from '../../shared/ToggleButtonsWithIcons/ToggleButtonsWithIcons'

// TODO: Take types from 'model' folder, when global state gets its types

interface IObjectPlanningItem {
    image: string,
    price: number,
    title: string,
    housing: number,
    deadline: string,
    floor: number
}

interface Props {
    mapData: any
    view: string
    setView: any
}

const useStyles = makeStyles(() => ({
    sortDropdown: {
        minWidth: 260
    }
}))

const CardContainer: React.FC<Props> = ({ mapData, view, setView }) => {
    
    const classes = useStyles()
    const toggleButtonOptions = [
        { icon: <GridView fill={view === 'gridView' ? '#96A2B5' : '#CAD1DA'}/>, onclick: () => setView('gridView') }, 
        { icon: <MapView fill={view === 'mapView' ? '#96A2B5' : '#CAD1DA'}/>, onclick: () => setView('mapView') },
    ]
    return (
        <div className={view === 'mapView' ? s.openContainer : s.closeContainer}>
            <div className={s.finderControls}>
                <div className={s.finderDropdown}>
                    <BaseDropDown 
                        className={classes.sortDropdown}
                        onChange={() => {}}
                        placeholder={DROPDOWN_PLACEHOLDER}
                        options={SORT_FILTER_OPTIONS}
                        value={SORT_FILTER_OPTIONS[0].value as string} 
                    />
                </div>
                <div className={s.finderButtons}>
                    <BaseButton
                        type={'secondary'}
                        isActive={false}
                        icon={<FavoriteIcon />}
                        iconActive={''}
                    >
                        Сохранить поиск
                    </BaseButton>
                    <div className={s.toggleButtonsWrap}>
                        <ToggleButtonsWithIcons
                            items={toggleButtonOptions}
                        />
                    </div>
                </div>
            </div>
            <div className={s.content}>
                {mapData.length && mapData.map((cp: any, i: number) => <div key={i} style={{padding:'5px'}}><ObjectCard key={i} houseData={cp}/></div>)}
            </div>
            <OpenCloseMapButton view={view} setView={setView}/>
        </div>
    )
}

export default CardContainer