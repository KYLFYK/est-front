import React, {FC, useEffect, useState} from 'react';
import {AdminEditingStore} from "../../../../../../mobx/role/admin/editing/editing";
import {observer} from "mobx-react-lite";
import Typography from "../../../../../shared/Typography/Typography";
import css from './editing.module.scss'


const Editing = observer(() => {

    const {fetch, initialState} = AdminEditingStore

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            {
                initialState?.map((t: any, index) => (
                    <GuidesHeader
                        key={index}
                        guidesHeader={t}
                    />

                ))
            }
        </div>
    );
})

export default Editing;

type GuidesHeaderType = {
    guidesHeader: any
}

const GuidesHeader: FC<GuidesHeaderType> = ({guidesHeader}) => {

    const [menu, setMenu] = useState<boolean>(false)

    return (
        <div>
            <div onClick={() => setMenu(!menu)}>
                <Typography weight={"medium"} className={css.guideHearer}>
                    {
                        guidesHeader.type_ru
                    }
                </Typography>
            </div>
            {
                menu &&
                <GuideItem
                    guides={guidesHeader}
                />
            }
        </div>
    )
}

type GuideItemType = {
    guides: any
}

const GuideItem: FC<GuideItemType> = ({guides}) => {

    const [edit, setEdit] = useState<null | string>(null)
    const [guideInfo, setGuideInfo] = useState<any>('')

    const activeMenu = (e:string | null, guide:any) => {
        setEdit(e)
        setGuideInfo(guide)
        if(e === edit){
            setEdit(null)
        }
    }

    return (
        <div style={{display:'flex'}}>
            <div >
                {
                    guides.info.map((t: any) => (
                        <div key={t.value} onClick={()=>activeMenu(t.value,t)}>
                            <Typography
                                className={css.guide}
                                size={"small"}
                                color={edit===t.value?'nude': "tertiary"}
                            >
                                {t.value}
                            </Typography>
                        </div>

                    ))
                }
            </div>
            <div style={{marginLeft : '40px'}}>
                {
                    edit !==null &&
                    <div>
                        {
                            guideInfo.for.map((objType:any)=>(
                                <div key={objType}>
                                    {objType}
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}