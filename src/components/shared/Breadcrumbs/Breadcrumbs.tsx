import React from 'react'
import { observer } from "mobx-react-lite"
import { useRouter } from 'next/router'
import s from './Breadcrumbs.module.scss'
import Typography from "../Typography/Typography"
import {useBreadcrumbsStore} from '../../../mobx/stores/BreadcrumbsStore/BreadcrumbsStore'
import {useSearchStore} from '../../../mobx/stores/SearchStore/SearchStore'

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

    const onReturntoSearch = () => {
        router.push(
            {
              pathname: '/search',
              query: searchStore.getParams(),
            })
        searchStore.fetch()
    }

    return (
        <div className={s.blockAdvantage}>
            {breadCrumbsStore.get().map((i: string, id: number) => {
                return (
                    <div key={id} style={{display: 'flex'}}>
                        <Typography className={id < breadCrumbsStore.get().length-1 ? s.secondaryItem : s.primaryItem} size={'small'} weight={'light'} >
                            <div className={location === 'object' && id === 1 ? s.clickedItem : ''} onClick={location === 'object' ? onReturntoSearch : () => {}}>{i}</div>
                        </Typography>
                        {id < breadCrumbsStore.get().length-1 && 
                            <Typography className={s.secondaryItem} size={'small'} weight={'light'} >
                                {'>'}
                            </Typography>}
                    </div>
                )
            })}
        </div>
    );
});

