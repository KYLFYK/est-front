import AgencyRoleTabs from "../../src/components/tabs/Account/Agency/AgencyRoleTabs";
import AgentRoleTabs from "../../src/components/tabs/Account/Agent/AgentRoleTabs";
import OwnerRoleTabs from "../../src/components/tabs/Account/Owner/OwnerRoleTabs";
import {DeveloperRoleTabs} from "../../src/components/tabs/Account/Developer/DeveloperRoleTabs";
import {getLocalStorage} from '../../src/lib/localStorage/localStorage';

const Favorites = () =>{

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
        <div>
            {
                searchCabinet(getLocalStorage())
            }
        </div>
    )
}

export default Favorites