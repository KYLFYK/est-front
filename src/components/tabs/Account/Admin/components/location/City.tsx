import React, {useEffect} from 'react';
import {AdminLocationStore} from "../../../../../../mobx/role/admin/location/location";
import Typography from "../../../../../shared/Typography/Typography";

const City = () => {

    const {fetchCity, city} = AdminLocationStore

    useEffect(() => {
        fetchCity()
    }, [])

    return (
        <div>
            {
                city.map((reg:any)=>(
                    <Typography key={reg.id}>
                        {
                            reg.name
                        }
                    </Typography>
                ))
            }
        </div>
    );
};

export default City;