import React from 'react';
import AgencyRoleTabs from "../../src/components/tabs/Account/Agency/AgencyRoleTabs";
import AgentRoleTabs from "../../src/components/tabs/Account/Agent/AgentRoleTabs";
import OwnerRoleTabs from "../../src/components/tabs/Account/Owner/OwnerRoleTabs";
import {DeveloperRoleTabs} from "../../src/components/tabs/Account/Developer/DeveloperRoleTabs";
import {getLocalStorage} from '../../src/lib/localStorage/localStorage';
import {MainContainer} from "../../src/components/containers/MainContainer/MainContainer";

const ProffSearch = () => {
    
    const searchCabinet = (type: string | null) => {
        switch (type) {
            case 'agency':return <AgencyRoleTabs/>
            case 'agent':return <AgentRoleTabs/>
            case 'customer':return <OwnerRoleTabs />
            case 'developer':return <DeveloperRoleTabs/>
            case 'admin':return 'admin'
            case 'bank':return 'bank'
        }
    }

    return(
        <MainContainer footerColor={"accent"} cabinetStyle={true}>
            {
                searchCabinet(getLocalStorage())
            }
        </MainContainer>
    )
};

export default ProffSearch;