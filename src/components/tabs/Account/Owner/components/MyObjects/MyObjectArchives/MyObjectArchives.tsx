import React from 'react';
import {SearchOffice} from "../../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import css from "../MyObjectActive/MyObjectActive.module.scss";
import CardObject from "../../../../../../shared/CardObject/CardObject";
import LineV8 from "../../../../../../shared/CardObject/Lines/LineV8";
import LineV9 from 'src/components/shared/CardObject/Lines/LineV9';
import ParamsColumn from "../../../../../../shared/ParamsColumn/ParamsColumn";
import Typography from "../../../../../../shared/Typography/Typography";
import EnumerationColumn from "../../../../../../shared/EnumerationColumn/EnumerationColumn";
import {useStoreOwnerMyObjects} from "../../../../../../../mobx/role/owner/myObject/OwnerMyObject";

const MyObjectArchives = () => {

    const store = useStoreOwnerMyObjects()

    const onDelete = (id:string) => {
        console.log(id,'onDelete')
    }
    const onEdit = (id:string) => {
        console.log(id,'onDelete')
    }

    return (
        <div style={{padding:"0px 20px"}}>
            <SearchOffice type={'draft'} />
            <FilterSearch />
            {
                store.initialData.objects_archives.map((object)=>(
                    <div key={object.id} className={css.borderCard}>
                        <CardObject
                            img={object.img}
                            className={css.padding}
                        >
                            <LineV8
                                nameObject={object.nameObject}
                                totalArea={object.totalArea}
                                onEdit={onEdit}
                                onDelete={onDelete}
                                id={object.id}
                                status={object.status}
                            />
                            <LineV9 address={object.address} />
                            <EnumerationColumn>
                                <div className={css.df_jc}>
                                    <div style={{display:'flex'}}>
                                        {
                                            object.rating.map((param, index) => (
                                                <ParamsColumn key={index} title={param.title} value={param.value}/>
                                            ))
                                        }
                                    </div>
                                    <div className={css.cursor}>
                                        <Typography color={"nude"}>
                                            Архивировать
                                        </Typography>
                                    </div>

                                </div>
                            </EnumerationColumn>
                        </CardObject>
                    </div>
                ))
            }
        </div>
    );
};

export default MyObjectArchives;