import React, { FC } from 'react';
import LineV4 from "../../../../../../shared/CardObject/Lines/LineV4";
import LineV5 from "../../../../../../shared/CardObject/Lines/LineV5";
import ParamsColumn from "../../../../../../shared/ParamsColumn/ParamsColumn";
import css from "../CardOwner.module.scss";
import EnumerationColumn from "../../../../../../shared/EnumerationColumn/EnumerationColumn";
import FavoriteOffIcon from "../../../../../../shared/FavoriteOffIcon/FavoriteOffIcon";

type ApartmentType={
    objectInfo:{
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
}

const Apartment :FC<ApartmentType> = ({objectInfo}) => {

    const favoriteOff = (id:string) =>{
        console.log(id,"favoriteOff")
    }

    return (
        <div>
           <LineV4
               allApartment={objectInfo.allApartment}
               developerCompany={objectInfo.developerCompany}
               developerName={objectInfo.developerName} />
            <LineV5
                phone={objectInfo.phone}
                city={objectInfo.city}
                street={objectInfo.street}
                countApartmentAgent={objectInfo.countApartmentAgent}
                stageConstruction={objectInfo.stageConstruction} />
            <EnumerationColumn>
                {
                    objectInfo.params.map((param, index) => (
                        <ParamsColumn
                            key={index}
                            title={param.title}
                            value={param.value}
                            className={css.paramPadding}
                        />
                    ))
                }
            </EnumerationColumn>
            <FavoriteOffIcon onClick={favoriteOff}  id={'1'}/>
        </div>
    );
};

export default Apartment;