import AgencyRoleTabs from "../../src/components/tabs/Account/Agency/AgencyRoleTabs";
import AgentRoleTabs from "../../src/components/tabs/Account/Agent/AgentRoleTabs";
import {DeveloperRoleTabs} from "../../src/components/tabs/Account/Developer/DeveloperRoleTabs";
import OwnerRoleTabs from "../../src/components/tabs/Account/Owner/OwnerRoleTabs";

const Cabinet = () =>{

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
}
export default Cabinet