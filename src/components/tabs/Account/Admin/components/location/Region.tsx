import React, {useEffect} from 'react';
import {AdminLocationStore} from "../../../../../../mobx/role/admin/location/location";
import Typography from "../../../../../shared/Typography/Typography";

const Region = () => {

    const {fetchRegion,region} = AdminLocationStore


    useEffect(() => {
        fetchRegion()
    }, [])

    return (
        <div>
            {
                region.map((reg:any)=>(
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

export default Region;