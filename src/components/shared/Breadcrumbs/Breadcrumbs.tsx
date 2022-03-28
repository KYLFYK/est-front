import React from 'react'
import { observer } from "mobx-react-lite"
import { useRouter } from 'next/router'
import s from './Breadcrumbs.module.scss'
import Typography from "../Typography/Typography"
import {useBreadcrumbsStore} from '../../../mobx/stores/BreadcrumbsStore/BreadcrumbsStore'
import {useSearchStore} from '../../../mobx/stores/SearchStore/SearchStore'
import {ArrowIconRight} from '../../../icons/Search&Crumbs/ArrowIconRight'
import {FILTER_ACTIONS_OPTIONS, FILTER_HOUSE_TYPES} from '../../containers/Filter/config'
import {paramsForGet} from '../../../lib/params/params';

type BreadcrumbsPropsType = {
    items?: string[]
    text?: string
    variant?: "primary" | "secondary",
    className?: string,
    location?: 'object' | 'search',
}

export const Breadcrumbs: React.FC<BreadcrumbsPropsType> = observer(({ className, items, text, location, variant = "primary" }) => {
    const breadCrumbsStore = useBreadcrumbsStore()
    const searchStore = useSearchStore()
    const router = useRouter()
    // console.log("breadCrumbsStore",JSON.parse(JSON.stringify(breadCrumbsStore)))
    const onReturntoSearch = () => {
        FILTER_ACTIONS_OPTIONS.filter((a: any) => a.label === breadCrumbsStore.get()[1].split(' ')[0])[0] 
            && searchStore.setOrderType(FILTER_ACTIONS_OPTIONS.filter((a: any) => a.label === breadCrumbsStore.get()[1].split(' ')[0])[0].value)
        
        if(FILTER_HOUSE_TYPES.filter((a: any) => a.label === breadCrumbsStore.get()[1].split(' ')[1])[0]) {
            searchStore.setHouseType(FILTER_HOUSE_TYPES.filter((a: any) => a.label === breadCrumbsStore.get()[1].split(' ')[1])[0].value)
        } else {
            searchStore.setHouseType('apartment')
        }
        router.push(
            {
              pathname: '/search',
              query: paramsForGet(searchStore.getFilter()),
            })
        searchStore.fetch()
    }

    return (
        <div className={s.blockAdvantage}>
            {breadCrumbsStore.get().map((i: string, id: number) => {
                return (
                    <div key={id} className={s.item}>
                        <Typography className={id < breadCrumbsStore.get().length-1 ? s.secondaryItem : s.primaryItem} size={'small'} weight={'regular'} >
                            <div onClick={location === 'object' ? onReturntoSearch : () => {}}>{i}</div>
                        </Typography>
                        {id < breadCrumbsStore.get().length-1 && <ArrowIconRight/>}
                    </div>
                )
            })}
        </div>
    );
});

