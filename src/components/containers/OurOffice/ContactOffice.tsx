import React, {FC} from 'react';
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
    contactOffice: Array<{ title: string, value: string, }>
    link:string
}

const ContactOffice: FC<ContactOfficeType> = ({contactOffice,link}) => {

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
                    contactOffice.map(({title, value}, index) => (
                        <Typography key={index} >
                            <div className={css.position} style={{marginTop : index ===3? '40px':'' }}>
                                {
                                    searchIcon(title)
                                }
                                <div className={css.margin}>
                                    {value}
                                </div>
                            </div>
                        </Typography>
                    ))
                }
            </div>
            <Link href={link}>
                <a href="" style={{textDecoration:'none'}} target={'_blank'}>
                    <Typography color={'nude'} weight={'bold'}>
                        Проложить маршрут
                    </Typography>
                </a>
            </Link>

        </div>
    );
};

export default ContactOffice;