import React, {useState} from 'react';
import BaseSlider from "../../shared/BaseSlider/BaseSlider";
import {ToggleButtons} from "../../shared/ToggleButtons/ToggleButtons";
// import css from "../cottages/СottagesComponents/cottages.module.scss";
import css from './cottagesGallery.module.scss'
const CottagesGallery = () => {

    const [ active ,setActive]=useState<string>('3D-тур')

    const activeMenu =(active:string) =>{
        switch (active){
            case '3D-тур': return <Cottages3D/>
            case 'Галерея':return <CottagesPhotos/>
            case 'Видео':return <CottagesVideo/>
            default: return <Cottages3D/>
        }
    }

    return (
        <div style={{margin: '20px 60px'}}>
            <div>
                <div style={{height:'595px'}}>
                    {/*<Image*/}
                    {/*    src={}*/}
                    {/*/>*/}
                    {activeMenu(active)}
                </div>
                <div className={css.positionButton}>
                    <ToggleButtons
                        items={[
                            {label: '3D-тур', value: '3D-тур'},
                            {label: 'Галерея', value: 'Галерея'},
                            {label: 'Видео', value: 'Видео'}
                        ]}
                        onChange={setActive}
                        activeValue={active}
                        classNameButton={css.buttonToggleCottages}
                        className={css.buttonToggleCottagesColor}
                    />
                </div>

            </div>

        </div>
    )
};

export default CottagesGallery;


export const Cottages3D = () => {
    return (
        <div>
            <iframe style={{borderRadius:'6px'}} width="100%" height="595" src={'https://3d-tur.ru/010/'} title="YouTube video player"
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture" allowFullScreen> </iframe>
        </div>
    )
}
export const CottagesPhotos = () => {
    return (
        <div style={{width:"100%", height:"595px",marginTop:'5px'}}>
            <BaseSlider
                images={['https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',
                    'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
                    'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270']}
                height={595}
                withArrows
            />
        </div>
    )
}
export const CottagesVideo = () => {
    return (
        <div style={{width:"100%", height:"595px",marginTop:'5px'}}>
            <iframe style={{borderRadius:'6px'}} width="100%" height="595" src={'https://www.youtube.com/embed/Ke3qyQYNob4'} title="YouTube video player"
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture" allowFullScreen> </iframe>
        </div>
    )
}