import AgencyRoleTabs from "../../src/components/tabs/Account/Agency/AgencyRoleTabs";
import AgentRoleTabs from "../../src/components/tabs/Account/Agent/AgentRoleTabs";
import {DeveloperRoleTabs} from "../../src/components/tabs/Account/Developer/DeveloperRoleTabs";
import OwnerRoleTabs from "../../src/components/tabs/Account/Owner/OwnerRoleTabs";
import {getLocalStorage} from '../../src/lib/localStorage/localStorage';

const Cabinet = () =>{
    console.log(getLocalStorage())
    const searchCabinet = (type: string | null) => {
        switch (type) {
            case 'agency':return <AgencyRoleTabs/>
            case 'agent':return <AgentRoleTabs/>
            case 'owner':return <OwnerRoleTabs />
            case 'developer':return <DeveloperRoleTabs/>
            case 'admin':return 'admin'
            case 'bank':return 'bank'
        }
    }

    return(
        <div>
            {
                searchCabinet(getLocalStorage())
            }
        </div>
    )
}
export default Cabinet