import React, {FC, useEffect, useState} from 'react';
import Typography from "../../../../../shared/Typography/Typography";
import css from './SavedSearches.module.scss'
import FavoriteOffIcon from "../../../../../shared/FavoriteOffIcon/FavoriteOffIcon";
import {BaseDropDown} from "../../../../../shared/BaseDropDown/BaseDropDown";
import {makeStyles} from "@material-ui/core";
import {useStoreOwnerSaveSearch} from "../../../../../../mobx/role/owner/saveSearch/saveSearch";

type SavedSearchesType = {
}

const SavedSearches: FC<SavedSearchesType> = ({}) => {

    const store = useStoreOwnerSaveSearch()

    return (
        <div>
            <Typography weight={"bold"} className={css.title}>Мои поиски</Typography>
            {
                store.initialData.search.map((search) => (
                    <CardObjectSaveSearch
                        nameObject={search.nameObject}
                        id={search.id}
                        newAds={search.ads}
                        locations={search.locations}
                        alertStatus={search.alertStatus}
                        key={search.id}
                    />
                ))
            }
        </div>
    );
};

type CardObjectSaveSearchType = {
    id: string
    nameObject: string
    locations: string
    newAds: number
    alertStatus: string
}

export const useStyles = makeStyles(() => ({
    root: {
        fontSize: '14px',
        backgroundColor: "#fff",
        borderRadius: 8,
        fontFamily: "RobotoRegular",
        border: '0px solid #CAD1DA',
        "&::before": {
            display: 'none'
        },
        "&.MuiInput-underline::after": {
            display: 'none'
        },
        "& > .MuiSelect-root": {
            padding: '0 !important',
            margin: '0',
            "&:focus": {
                backgroundColor: 'inherit'
            }
        }
    },
}))

const option = [
    {label: 'Не получать оповещения', value: 'none'},
    {label: 'Получать каждый час', value: 'hour'},
    {label: 'Получать каждый день', value: 'day'},
    {label: 'Получать еженедельно', value: 'daily'},
]

const CardObjectSaveSearch: FC<CardObjectSaveSearchType> = ({id, nameObject, locations, newAds, alertStatus}) => {

    const classes = useStyles()

    // search alert ADS
    const alertAdsSearch = (status:string) =>{
        switch (status){
            case 'none':return 'Не получать оповещения'
            case 'hour':return 'Получать каждый час'
            case 'day':return 'Получать каждый день'
            case 'daily':return 'Получать еженедельно'
            default:return 'Не получать оповещения'
        }
    }
    useEffect(()=>{
        alertAdsSearch(alertStatus)
    },[alertStatus])


    const [value, setValue] = useState<string>(alertAdsSearch(alertStatus))
    return (
        <div className={css.card} key={id}>
            <div className={css.df_jc}>
                <Typography weight={"bold"}>{nameObject}</Typography>
                <FavoriteOffIcon onClick={(id) => console.log(id)} id={id}/>
            </div>
            <Typography className={css.margin10}>{locations}</Typography>
            <Typography color={newAds > 0 ? "nude" : "tertiary"}>
                {newAds > 0 ? `${newAds} новых объявлений` : 'Нет новых объявлений'}
            </Typography>
            <div className={css.marginT10}>
                <BaseDropDown
                    options={option}
                    placeholder={value}
                    onChange={setValue}
                    value={value}
                    className={classes.root}
                />
            </div>

        </div>
    )
}

export default SavedSearches;