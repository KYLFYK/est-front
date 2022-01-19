import React, {FC} from 'react';
import css from './CardOwner.module.scss'
import Image from 'next/image'
import House from "./ObjectCard/House";
import Apartment from "./ObjectCard/Apartment";

export type CardOwnerType = {
    id:string
    url:string
    image: string
    objectInfo: ObjectInfoType
}
export type ObjectInfoType={
    typeObject: string
    totalArea: string
    name: string
    fromPublic: string
    datePublic: string
    country: string
    city: string
    dateUpdate: string
    phone: string

    developerName: string
    allApartment: string
    developerCompany: string
    street: string
    countApartmentAgent: string
    stageConstruction: string
    params: Array<{ title: string, value: string }>
}

const searchTypeObject = (type: string,objectInfo:ObjectInfoType ,id:string) => {
    //need plot card
    switch (type) {
        case 'apartment':
            return <Apartment objectInfo={objectInfo} id={id}/>
        case 'house':
            return <House objectInfo={objectInfo} id={id}/>
        case 'residentialComplex':
            return <div>1</div>
        case 'plotHouse':
            return <div>1</div>
        default :
            return <House objectInfo={objectInfo} id={id}/>
    }
}

const CardOwner: FC<CardOwnerType> = ({image, objectInfo,url,id}) => {
    //URL LINK NEED
    return (
        <div className={css.cardBorder}>
            <div className={css.image}>
                <Image
                    alt={'photo'}
                    className={css.image}
                    loader={() => image}
                    src={image}
                    width={126}
                    height={126}/>
            </div>
            {
                searchTypeObject(objectInfo.typeObject,objectInfo,id)
            }
        </div>
    );
};

export default CardOwner;