import React, {useEffect} from 'react';
import {AdminLocationStore} from "../../../../../../mobx/role/admin/location/location";
import Typography from "../../../../../shared/Typography/Typography";

const Country = () => {

    const {fetchCountry,country} = AdminLocationStore

    useEffect(() => {
        fetchCountry()
    }, [])

    return (
        <div>
            {
                country.map((reg:any)=>(
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

export default Country;