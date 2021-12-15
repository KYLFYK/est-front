import React, {FC} from 'react';
import css from "../CardOwner.module.scss";
import LineV2 from "../../../../../../shared/CardObject/Lines/LineV2";
import LineV3 from "../../../../../../shared/CardObject/Lines/LineV3";
import EnumerationColumn from "../../../../../../shared/EnumerationColumn/EnumerationColumn";
import ParamsColumn from "../../../../../../shared/ParamsColumn/ParamsColumn";

type HouseType={
    objectInfo:{
        totalArea:string
        name:string
        fromPublic:string
        datePublic:string
        country:string
        city:string
        dateUpdate:string
        phone:string
        params:Array<{title:string, value:string}>
    }
}

const House :FC<HouseType> = ({objectInfo}) => {
    return (
        <div>
            <div className={css.paddingInfo}>
                <LineV2
                    totalArea={objectInfo.totalArea}
                    name={objectInfo.name}
                    fromPublic={objectInfo.fromPublic}
                    datePublic={objectInfo.datePublic}/>
                <LineV3
                    country={objectInfo.country}
                    city={objectInfo.city}
                    dateUpdate={objectInfo.dateUpdate}
                    phone={objectInfo.phone}/>

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
            </div>
        </div>
    );
};

export default House;