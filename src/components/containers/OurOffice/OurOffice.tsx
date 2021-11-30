import React, {FC} from 'react';
import HeadLine from "../../shared/HeadLine/HeadLine";
import Map from "../Maps/MapStart";
import ContactOffice from "./ContactOffice";
import css from './OurOffice.module.scss'

export type OurOfficeType ={
    ourOffice:{
        positionMap:{
            lat: number
            lng: number
        },
        location:"finder" | "start" | "infrastructure" | "payback",
        contactsOffice:Array<{title:string,value:string}>
        plotRoute:string
    }
}

const OurOffice :FC<OurOfficeType> = ({ourOffice}) => {

    return (
        <div className={css.marginContainer}>
            <HeadLine title={'Наш офис'} >
                <div className={css.position}>
                    <Map center={ourOffice.positionMap} location={ourOffice.location} />
                    <div className={css.marginContract}>
                        <ContactOffice contactOffice={ourOffice.contactsOffice} link={ourOffice.plotRoute}/>
                    </div>
                </div>
            </HeadLine>
        </div>
    );
};

export default OurOffice;