import React from 'react';
import css from "../MyObjectActive/MyObjectActive.module.scss";
import CardObject from "../../../../../../shared/CardObject/CardObject";
import LineV9 from "../../../../../../shared/CardObject/Lines/LineV9";
import LineV1 from "../../../../../../shared/CardObject/Lines/LineV1";
import {SearchOffice} from "../../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import LineArray from "../../../../../../shared/CardObject/Lines/LineArray";
import Typography from "../../../../../../shared/Typography/Typography";
import {useStoreOwnerMyObjects} from "../../../../../../../mobx/role/owner/myObject/OwnerMyObject";

const MyObjectApplications = () => {

    const store = useStoreOwnerMyObjects()

    const onBook = (id: string) => {

    }

    return (
        <div style={{padding:"0px 20px"}}>
            <SearchOffice type={'owner'}/>
            <FilterSearch/>
            {
                store.initialData.objects_applications.map(object => (
                    <div key={object.id} className={css.borderCard}>
                        <CardObject
                            img={object.img}
                            className={css.padding}
                        >
                            <div>
                                <LineV1
                                    type={'Забронировать'}
                                    id={object.id}
                                    name={object.nameObject}
                                    typeObject={'Аренда'}
                                    onBook={onBook}
                                    price={object.price}
                                />
                            </div>
                            <LineV9
                                address={object.address}
                            />
                            <LineArray mainSpecifications={object.mainSpecifications}/>
                            <div style={{display: 'flex'}}>
                                <div style={{display: 'flex'}}>
                                    <Typography weight={"light"} color={"tertiary"}>
                                        Агент:
                                    </Typography>
                                    <Typography color={"tertiary"}>
                                        {object.agentObject}
                                    </Typography>
                                </div>
                                <div style={{display: 'flex', marginLeft: "20px"}}>
                                    <Typography weight={"light"} color={"tertiary"}>
                                        От:
                                    </Typography>
                                    <Typography color={"tertiary"}>
                                        {object.dateBook}
                                    </Typography>
                                </div>
                            </div>

                        </CardObject>
                    </div>
                ))
            }
        </div>
    );
};

export default MyObjectApplications;