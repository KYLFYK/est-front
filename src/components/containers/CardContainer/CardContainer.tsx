import React, {useState} from 'react'
import { observer } from "mobx-react-lite"
import { useSearchStore } from "../../../mobx/stores/SearchStore/SearchStore"
import { makeStyles } from "@material-ui/core"
import ObjectCard from '../Card/index'
import {BaseDropDown} from '../../shared/BaseDropDown/BaseDropDown'
import BaseButton from '../../shared/BaseButton/BaseButtons'
import FavoriteIcon from '../../../icons/Favorite/Favorite'
import {GridView} from '../../../icons/FinderPageIcon/GridView'
import {MapView} from '../../../icons/FinderPageIcon/MapView'
import { OpenCloseMapButton } from "./OpenCloseMapButton"
import s from './styles.module.scss'
import { DROPDOWN_PLACEHOLDER, SORT_FILTER_OPTIONS } from "../PlanningFilter/config"
import { ToggleButtonsWithIcons } from '../../shared/ToggleButtonsWithIcons/ToggleButtonsWithIcons'
import {Loader, Empty} from '../../shared/Loader/Loader'
import Typography from "../../shared/Typography/Typography";
import FilterIcon from "../../../icons/FilterIcon/FilterIcon";

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
    onActiveFilter:()=>void
}

const useStyles = makeStyles(() => ({
    sortDropdown: {
        minWidth: 260
    }
}))

const CardContainer: React.FC<Props> = observer(({ mapData, view, setView,onActiveFilter }) => {
    const searchStore = useSearchStore()
    const classes = useStyles()

    const [sort, setSort] = useState(SORT_FILTER_OPTIONS[0].value)

    let sortedData: any = []
    if(sort === 'default'){
        sortedData = [...searchStore.getInitialData()]
    } else if(sort === 'bigger'){
        sortedData = [...searchStore.getInitialData()?.sort((a: any, b: any) => a.price > b.price ? 1 : -1)]
    } else if(sort === 'smaller'){
        sortedData = [...searchStore.getInitialData()?.sort((a: any, b: any) => a.price < b.price ? 1 : -1)]
    }

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
                        onChange={(e) => {setSort(e)}}
                        placeholder={DROPDOWN_PLACEHOLDER}
                        options={SORT_FILTER_OPTIONS}
                        value={sort} 
                    />
                </div>
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
            </div>
            <div className={(searchStore.fetching || !sortedData.length) ? s.contentText : s.content}>
                {searchStore.fetching 
                    ? <Loader/>
                    : sortedData.length 
                        ? sortedData && sortedData.map((i: any, id: number) => {
                            return(
                                <div key={id} style={{padding:'5px'}}>
                                    <ObjectCard 
                                        route={searchStore.getParams()['object-type']} 
                                        typeObject={searchStore.getParams()['building-type']} 
                                        houseData={mapData[0]} 
                                        data={i} 
                                    />
                                </div>
                            )
                        })
                        : <Empty/>
                }
            </div>
            <OpenCloseMapButton view={view} setView={setView}/>
        </div>
    )
})

export default CardContainer