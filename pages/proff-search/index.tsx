import React from 'react';
import AgencyRoleTabs from "../../src/components/tabs/Account/Agency/AgencyRoleTabs";
import AgentRoleTabs from "../../src/components/tabs/Account/Agent/AgentRoleTabs";
import OwnerRoleTabs from "../../src/components/tabs/Account/Owner/OwnerRoleTabs";
import {DeveloperRoleTabs} from "../../src/components/tabs/Account/Developer/DeveloperRoleTabs";

const ProffSearch = () => {
    const searchCabinet = (type:string) => {
        switch (type) {
            case 'Agency':return <AgencyRoleTabs/>
            case 'Agent':return <AgentRoleTabs/>
            case 'Owner':return <OwnerRoleTabs />
            case 'Developer':return <DeveloperRoleTabs/>
            case 'admin':return 'admin'
            case 'bank':return 'bank'
        }
    }

    return(
        <div>
            {
                searchCabinet('Agent')
            }
        </div>
    )
};

export default ProffSearch;