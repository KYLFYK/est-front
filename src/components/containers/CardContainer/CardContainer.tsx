import React from 'react'
import { useRouter } from 'next/router'
import { observer } from "mobx-react-lite"
import { useStore } from "../../../mobx/stores/SearchStore/SearchStore"
import { makeStyles } from "@material-ui/core"
import ObjectCard from '../Card/index'
import {BaseDropDown} from '../../shared/BaseDropDown/BaseDropDown'
import BaseButton from '../../shared/BaseButton/BaseButtons'
import FavoriteIcon from '../../../icons/Favorite/Favorite'
import {GridView} from '../../../icons/FinderPageIcon/GridView'
import {MapView} from '../../../icons/FinderPageIcon/MapView'
import { OpenCloseMapButton } from "./OpenCloseMapButton";
import s from './styles.module.scss'
import { DROPDOWN_PLACEHOLDER, SORT_FILTER_OPTIONS } from "../PlanningFilter/config"
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

const CardContainer: React.FC<Props> = observer(({ mapData, view, setView }) => {
    const router = useRouter()
    const store = useStore()
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
                        onChange={(e) => {store.setSort(e)}}
                        placeholder={DROPDOWN_PLACEHOLDER}
                        options={SORT_FILTER_OPTIONS}
                        value={store.sort} 
                    />
                </div>
                <div className={s.finderButtons}>
                    {/*<BaseButton
                        type={'secondary'}
                        isActive={false}
                        icon={<FavoriteIcon />}
                        iconActive={''}
                    >
                        Сохранить поиск
                    </BaseButton>*/}
                    <div className={s.toggleButtonsWrap}>
                        <ToggleButtonsWithIcons
                            items={toggleButtonOptions}
                        />
                    </div>
                </div>
            </div>
            <div className={s.content}>
                {store.fetching 
                    ? <h1>Loading...</h1>
                    : store.initialData && store.initialData.length 
                        ? store.initialData.map((i: any, id: number) => {
                            return(<>
                                <div key={id} style={{padding:'5px'}}><ObjectCard key={i} route={router.query['object-type']} houseData={mapData[0]} data={i} /></div>
                            </>)
                        })
                        : <h1>Объекты отсутствуют</h1>
                }
            </div>
            <OpenCloseMapButton view={view} setView={setView}/>
        </div>
    )
})

export default CardContainer