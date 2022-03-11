import React from 'react';
import {AdminCabinetWrapper} from "../../src/components/tabs/Account/Admin/AdminCabinetWrapper";
import Editing from "../../src/components/tabs/Account/Admin/components/Editing/Editing";

const Index = () => {
    return (
        <AdminCabinetWrapper>
            <Editing/>
        </AdminCabinetWrapper>
    );
};

export default Index;