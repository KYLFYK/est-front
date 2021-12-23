import React, {FC, useState, useEffect} from 'react';
import Metro from "../../../icons/OurOffice/Metro";
import Dot from "../../../icons/OurOffice/Dot";
import Time from "../../../icons/OurOffice/Time";
import Phone from "../../../icons/OurOffice/Phone";
import Printer from "../../../icons/OurOffice/Printer";
import Email from "../../../icons/OurOffice/Email";
import Typography from "../../shared/Typography/Typography";
import Link from 'next/link'
import css from './ContractOffice.module.scss'

type ContactOfficeType = {
    contactOffice: Array<{ title: string, value: string, href?: string}>
    link: string
    destination: any
}

const ContactOffice: FC<ContactOfficeType> = ({contactOffice, link, destination}) => {

    const [currentLocation, setCurrentLocation] = useState<GeolocationPosition>()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => setCurrentLocation(position))
    }, [])

    const searchIcon = (title: string) => {
        switch (title) {
            case 'metro':
                return <Metro/>
            case 'dot':
                return <Dot/>
            case 'time':
                return <Time/>
            case 'phone':
                return <Phone/>
            case 'printer':
                return <Printer/>
            case 'email':
                return <Email/>
            default:
                return <Dot/>
        }
    }

    return (
        <div className={css.contactOfficeBlock}>
            <div>
                {
                    contactOffice.map((co, index) => (
                        co.href 
                        ? <a key={index} href={`${co.href}${co.value}`} style={{textDecoration:'none'}}><Typography key={index} >
                                <div className={css.position} style={{marginTop : index ===3? '40px':'' }}>
                                    {
                                        searchIcon(co.title)
                                    }
                                    <div className={css.margin}>
                                        {co.value}
                                    </div>
                                </div>
                            </Typography></a>
                        : <Typography key={index} >
                                <div className={css.position} style={{marginTop : index ===3? '40px':'' }}>
                                    {
                                        searchIcon(co.title)
                                    }
                                    <div className={css.margin}>
                                        {co.value}
                                    </div>
                                </div>
                            </Typography>
                    ))
                }
            </div>
            <Link href={link}>
                <a href={`https://yandex.by/maps/?ll=${destination.lng}%2C${destination.lat}&mode=routes&rtext=${currentLocation?.coords.latitude}%2C${currentLocation?.coords.longitude}~44.962107%2C34.104277&rtt=auto&ruri=~&z=7`} 
                    style={{textDecoration:'none'}} target={'_blank'} rel={'noreferrer'}>
                    <Typography color={'nude'} weight={'bold'}>
                        Проложить маршрут
                    </Typography>
                </a>
            </Link>

        </div>
    );
};

export default ContactOffice;