import React, {useEffect, useState} from 'react';
import {AdminLocationStore} from "../../../../../../mobx/role/admin/location/location";
import Typography from "../../../../../shared/Typography/Typography";
import {observer} from "mobx-react-lite";
import {Modal} from "../../../../../shared/Modal/Modal";
import css from "./location.module.scss";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";
import AddIcon from "@mui/icons-material/Add";
import {BaseInput} from "../../../../../shared/BaseInput/Input";
import {BaseDropDown} from "../../../../../shared/BaseDropDown/BaseDropDown";
import {statusActiveApi} from "../../../../../shared/Loader/Loader";

const City = observer(() => {

    const {fetchCity, city, fetchRegion,region,addCity,editCity , loaded,statusLoaded} = AdminLocationStore

    useEffect(() => {
        fetchCity()
        fetchRegion()
    }, [])
    useEffect(()=>{
        setValueOptionDropDown ( region.map((r:any)=>({value:r.id,label:r.name})) )
    },[region])

    const [editModalCity, setEditModalCity] = useState<boolean>(false)
    // const [removeModalCity, setRemoveModalCity] = useState<boolean>(false)
    const [addModalCity, setAddModalCity] = useState<boolean>(false)

    const [activeCityObject, setActiveCityObject] = useState<{ id: number, name: string, region: { id: number, name: string } }>(city[0])
    const [valueCity,setValueCity]=useState<string>('')

    const [valueDropDown, setValueDropDown]=useState<string>("")
    const [valueOptionDropDown, setValueOptionDropDown]=useState<Array<{label:string,value:string}>>( [] )

    const onActiveEditCity = (index: number) => {
        setEditModalCity(true)
        setActiveCityObject(city[index])
        setValueCity(city[index].name)
        setValueDropDown(city[index].region.id)
    }

    const onAddCity = () => {
        setAddModalCity(!addModalCity)
        addCity({name:valueCity,regionId:+valueDropDown})
    }

    const cancelAddCity = () => {
        setAddModalCity(!addModalCity)
    }

    const onEditCity = async() => {
        setEditModalCity(!editModalCity)
        await editCity(activeCityObject.id,{regionId:+valueDropDown, name:valueCity})
    }

    const cancelEditCity = () => {
        setEditModalCity(!editModalCity)
    }

    console.log(loaded)
    return (
        <div className={css.df_jc}>
            <div>
                {
                    loaded ? city.map((reg: any, index: number) => (
                        <div key={reg.id} className={css.df}>
                            <Typography className={css.mR_5}>
                                {`${reg.name} - (${reg.region.name})`}
                            </Typography>
                            <div onClick={() => onActiveEditCity(index)} style={{cursor: 'pointer'}}>
                                <ModeEditOutlineOutlinedIcon fontSize={'small'}/>
                            </div>
                        </div>
                    ))
                        : statusActiveApi(statusLoaded)
                }
            </div>
            <div onClick={() => setAddModalCity(true)}>
                <BaseButton icon={<AddIcon/>}>
                </BaseButton>
            </div>
            {
                <Modal
                    setActive={() => setEditModalCity(!editModalCity)}
                    active={editModalCity}
                >
                    <svg width="162" height="20" viewBox="0 0 162 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.01125 0.104263C5.3618 0.279708 3.80975 1.14857 2.26634 2.76047C1.23207 3.84045 0.606584 4.93931 0.210997 6.37084C0.0207767 7.05914 0.0051651 7.32091 0.000425862 9.90203C-0.00384874 12.2234 0.0223565 12.8111 0.156821 13.4146C0.585675 15.3391 1.60173 16.9644 3.13232 18.1748C4.35355 19.1405 5.52777 19.6698 6.93477 19.889C7.43034 19.9662 11.9585 19.9871 23.5986 19.9661C38.5941 19.9391 39.6164 19.9271 40.1394 19.7721C42.3753 19.1098 44.3714 17.4489 45.4125 15.3847C46.0785 14.0645 46.3184 12.6434 46.3188 10.0182L46.319 8.27582H36.457H26.5948L26.6401 7.55564C26.7232 6.23767 27.2492 5.15406 28.34 4.05409C29.1048 3.28271 30.0286 2.75563 30.9623 2.55779C31.4881 2.44638 33.5128 2.42444 43.4151 2.42305L55.24 2.42147V11.203V19.9845H56.6803H58.1207V11.203V2.42147H66.9487C71.8041 2.42147 75.7766 2.44275 75.7766 2.46877C75.7766 2.51626 67.1698 18.5784 66.6524 19.4967L66.3774 19.9845H68.005H69.6326L70.7135 17.8931L71.7944 15.8018L79.7096 15.8255L87.6247 15.8493L88.6933 17.9169L89.7619 19.9845H91.3698H92.9778L92.5645 19.2179C92.3372 18.7963 90.4273 15.1895 88.3204 11.203C86.2134 7.21646 84.3029 3.60981 84.0749 3.18811L83.6603 2.42147H92.9605H102.261V11.203V19.9845H103.701H105.141V11.203V2.42147H109.602H114.062V7.09343C114.062 11.9262 114.115 12.8796 114.445 13.9875C115.273 16.7723 117.988 19.246 120.865 19.8373C121.921 20.0542 129.807 20.0542 130.863 19.8373C133.86 19.2213 136.499 16.7675 137.401 13.7585C137.601 13.0895 137.611 12.8946 137.643 8.90308C137.661 6.61597 137.705 4.74686 137.74 4.74964C137.776 4.75234 140.004 8.17091 142.691 12.3464L147.578 19.9381L148.273 19.9649L148.967 19.9917L153.887 12.494L158.806 4.99636L158.83 12.4904L158.854 19.9845H160.201H161.548V9.99226V0L160.319 0.0259264L159.089 0.0518528L153.744 8.1566C150.804 12.6142 148.366 16.2518 148.326 16.2402C148.286 16.2285 145.878 12.5815 142.975 8.1355L137.697 0.0518528H136.264H134.831L134.785 6.37084L134.738 12.6898L134.489 13.3714C134.132 14.3491 133.717 14.9974 132.956 15.7646C132.187 16.54 131.294 17.0989 130.384 17.3752C129.784 17.5574 129.53 17.5684 125.937 17.5684C122.762 17.5684 122.032 17.5439 121.556 17.4212C119.964 17.0102 118.407 15.6918 117.604 14.0739C116.986 12.8273 117.003 13.0405 116.967 6.20821L116.934 0.00538973H74.6207C45.575 0.00538973 32.0051 0.0361483 31.3445 0.10352C28.4506 0.398746 25.8119 2.24844 24.5246 4.88402C23.9106 6.14084 23.7357 6.98498 23.6722 8.996L23.6186 10.6919H33.5408H43.463L43.4141 11.8767C43.3785 12.7388 43.313 13.2077 43.1736 13.5982C42.3805 15.8207 40.6697 17.2318 38.3644 17.565C37.5006 17.6899 9.14864 17.6913 8.28582 17.5666C6.84324 17.358 5.6299 16.7417 4.56478 15.6766C3.44808 14.5599 2.82956 13.0761 2.82956 11.5138V10.7859L11.2162 10.7621L19.6027 10.7384V9.53033V8.32229L11.2162 8.29859L2.82956 8.2748L2.83068 7.92689C2.83235 7.40873 3.06095 6.64274 3.44762 5.85983C4.04495 4.65059 5.44785 3.41894 6.89239 2.83564C7.81757 2.46208 8.64926 2.42147 15.3739 2.42147H21.7435L22.6711 1.51321C23.3358 0.862355 23.7697 0.521316 24.2026 0.309723L24.8066 0.0144965L16.2574 0.0223023C11.5553 0.0265769 7.39457 0.0634686 7.01125 0.104263ZM83.5532 7.94621C85.1025 10.9593 86.3702 13.4369 86.3702 13.4521C86.3702 13.4672 83.3803 13.4797 79.726 13.4797C75.8069 13.4797 73.0818 13.4451 73.0818 13.3953C73.0818 13.3269 78.4867 2.86584 78.7022 2.517C78.743 2.45093 79.11 2.42454 79.7506 2.44164L80.7361 2.46793L83.5532 7.94621Z"
                              fill="#1A4862"/>
                    </svg>
                    <Typography weight={"medium"} className={css.mT_20}>
                        Редактировать
                    </Typography>
                    <div>
                        <div  className={css.mT_10}>
                            <BaseInput
                                label={'Город'}
                                value={valueCity}
                                onChange={e=>setValueCity(e.currentTarget.value)}
                            />
                        </div>
                        <div className={css.mT_10}>
                            <Typography color={"tertiary"} className={css.colorGrey} >
                                Регионы
                            </Typography>
                            <BaseDropDown
                                className={css.mT_5}
                                options={valueOptionDropDown}
                                onChange={(e)=>setValueDropDown(e)}
                                placeholder={'Выбериге Регион'}
                                value={valueDropDown}
                            />
                        </div>
                        <div className={css.df_mT_10}>
                            <BaseButton
                                type={"secondary"}
                                isActive
                                className={css.mR_10px}
                                onClick={onEditCity}
                            >
                                сохранить
                            </BaseButton>
                            <BaseButton onClick={cancelEditCity}>
                                отмена
                            </BaseButton>
                        </div>

                    </div>
                </Modal>
            }
            {
                <Modal
                    setActive={() => setAddModalCity(!addModalCity)}
                    active={addModalCity}
                >
                    <svg width="162" height="20" viewBox="0 0 162 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.01125 0.104263C5.3618 0.279708 3.80975 1.14857 2.26634 2.76047C1.23207 3.84045 0.606584 4.93931 0.210997 6.37084C0.0207767 7.05914 0.0051651 7.32091 0.000425862 9.90203C-0.00384874 12.2234 0.0223565 12.8111 0.156821 13.4146C0.585675 15.3391 1.60173 16.9644 3.13232 18.1748C4.35355 19.1405 5.52777 19.6698 6.93477 19.889C7.43034 19.9662 11.9585 19.9871 23.5986 19.9661C38.5941 19.9391 39.6164 19.9271 40.1394 19.7721C42.3753 19.1098 44.3714 17.4489 45.4125 15.3847C46.0785 14.0645 46.3184 12.6434 46.3188 10.0182L46.319 8.27582H36.457H26.5948L26.6401 7.55564C26.7232 6.23767 27.2492 5.15406 28.34 4.05409C29.1048 3.28271 30.0286 2.75563 30.9623 2.55779C31.4881 2.44638 33.5128 2.42444 43.4151 2.42305L55.24 2.42147V11.203V19.9845H56.6803H58.1207V11.203V2.42147H66.9487C71.8041 2.42147 75.7766 2.44275 75.7766 2.46877C75.7766 2.51626 67.1698 18.5784 66.6524 19.4967L66.3774 19.9845H68.005H69.6326L70.7135 17.8931L71.7944 15.8018L79.7096 15.8255L87.6247 15.8493L88.6933 17.9169L89.7619 19.9845H91.3698H92.9778L92.5645 19.2179C92.3372 18.7963 90.4273 15.1895 88.3204 11.203C86.2134 7.21646 84.3029 3.60981 84.0749 3.18811L83.6603 2.42147H92.9605H102.261V11.203V19.9845H103.701H105.141V11.203V2.42147H109.602H114.062V7.09343C114.062 11.9262 114.115 12.8796 114.445 13.9875C115.273 16.7723 117.988 19.246 120.865 19.8373C121.921 20.0542 129.807 20.0542 130.863 19.8373C133.86 19.2213 136.499 16.7675 137.401 13.7585C137.601 13.0895 137.611 12.8946 137.643 8.90308C137.661 6.61597 137.705 4.74686 137.74 4.74964C137.776 4.75234 140.004 8.17091 142.691 12.3464L147.578 19.9381L148.273 19.9649L148.967 19.9917L153.887 12.494L158.806 4.99636L158.83 12.4904L158.854 19.9845H160.201H161.548V9.99226V0L160.319 0.0259264L159.089 0.0518528L153.744 8.1566C150.804 12.6142 148.366 16.2518 148.326 16.2402C148.286 16.2285 145.878 12.5815 142.975 8.1355L137.697 0.0518528H136.264H134.831L134.785 6.37084L134.738 12.6898L134.489 13.3714C134.132 14.3491 133.717 14.9974 132.956 15.7646C132.187 16.54 131.294 17.0989 130.384 17.3752C129.784 17.5574 129.53 17.5684 125.937 17.5684C122.762 17.5684 122.032 17.5439 121.556 17.4212C119.964 17.0102 118.407 15.6918 117.604 14.0739C116.986 12.8273 117.003 13.0405 116.967 6.20821L116.934 0.00538973H74.6207C45.575 0.00538973 32.0051 0.0361483 31.3445 0.10352C28.4506 0.398746 25.8119 2.24844 24.5246 4.88402C23.9106 6.14084 23.7357 6.98498 23.6722 8.996L23.6186 10.6919H33.5408H43.463L43.4141 11.8767C43.3785 12.7388 43.313 13.2077 43.1736 13.5982C42.3805 15.8207 40.6697 17.2318 38.3644 17.565C37.5006 17.6899 9.14864 17.6913 8.28582 17.5666C6.84324 17.358 5.6299 16.7417 4.56478 15.6766C3.44808 14.5599 2.82956 13.0761 2.82956 11.5138V10.7859L11.2162 10.7621L19.6027 10.7384V9.53033V8.32229L11.2162 8.29859L2.82956 8.2748L2.83068 7.92689C2.83235 7.40873 3.06095 6.64274 3.44762 5.85983C4.04495 4.65059 5.44785 3.41894 6.89239 2.83564C7.81757 2.46208 8.64926 2.42147 15.3739 2.42147H21.7435L22.6711 1.51321C23.3358 0.862355 23.7697 0.521316 24.2026 0.309723L24.8066 0.0144965L16.2574 0.0223023C11.5553 0.0265769 7.39457 0.0634686 7.01125 0.104263ZM83.5532 7.94621C85.1025 10.9593 86.3702 13.4369 86.3702 13.4521C86.3702 13.4672 83.3803 13.4797 79.726 13.4797C75.8069 13.4797 73.0818 13.4451 73.0818 13.3953C73.0818 13.3269 78.4867 2.86584 78.7022 2.517C78.743 2.45093 79.11 2.42454 79.7506 2.44164L80.7361 2.46793L83.5532 7.94621Z"
                              fill="#1A4862"/>
                    </svg>

                     <Typography weight={"medium"} className={css.mT_20}>
                         Добавить город
                     </Typography>
                    <div className={css.mT_10}>
                        <BaseInput
                            value={valueCity}
                            onChange={e=>setValueCity(e.currentTarget.value)}
                        />
                    </div>

                    <BaseDropDown
                        className={css.mT_10}
                        options={valueOptionDropDown}
                        onChange={(e)=>setValueDropDown(e)}
                        placeholder={'Выберите Регион'}
                        value={valueDropDown}
                    />
                    <div className={css.df_mT_10} >
                        <BaseButton
                            type={"secondary"}
                            isActive
                            className={css.mR_10px}
                            onClick={onAddCity}
                        >
                            создать
                        </BaseButton>
                        <BaseButton onClick={cancelAddCity}>
                            отмена
                        </BaseButton>
                    </div>
                </Modal>
            }
        </div>
    );
})

export default City;