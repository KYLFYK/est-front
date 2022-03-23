import React from 'react';
import {AdminCabinetWrapper} from "../../src/components/tabs/Account/Admin/AdminCabinetWrapper";
import Location from "../../src/components/tabs/Account/Admin/components/location/Location";

const Index = () => {
    return (
        <AdminCabinetWrapper>
            <Location/>
        </AdminCabinetWrapper>
    );
};

export default Index;