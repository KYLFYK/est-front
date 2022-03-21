import React from 'react';
import {SearchOffice} from "../../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import LineV10 from "../../../../../../shared/CardObject/Lines/LineV10";
import css from "../MyObjectActive/MyObjectActive.module.scss";
import CardObject from "../../../../../../shared/CardObject/CardObject";
import LineV9 from 'src/components/shared/CardObject/Lines/LineV9';
import EnumerationColumn from "../../../../../../shared/EnumerationColumn/EnumerationColumn";
import ParamsColumn from "../../../../../../shared/ParamsColumn/ParamsColumn";
import Typography from "../../../../../../shared/Typography/Typography";
import {useStoreOwnerMyObjects} from "../../../../../../../mobx/role/owner/myObject/OwnerMyObject";

const MyObjectDraft = () => {

    const store = useStoreOwnerMyObjects()

    const onDelete = (id: string) => {
        console.log(id, 'onDelete')
    }
    return (
        <div style={{padding:"0px 20px"}}>
            <SearchOffice type={'archive'}/>
            <FilterSearch/>
            {
                store.initialData.objects_drafts.map((object)=>(
                    <div key={object.id} className={css.borderCard}>
                        <CardObject
                            img={object.img}
                            className={css.padding}
                        >
                            <LineV10
                                id={object.id}
                                onDelete={onDelete}
                                nameObject={object.nameObject}
                                totalArea={object.totalArea}
                                dateArchive={object.dateArchive}
                            />
                            <LineV9
                                address={object.address}
                            />
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
                                            Восстановить
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

export default MyObjectDraft;