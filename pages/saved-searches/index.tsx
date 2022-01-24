import { getLocalStorage } from "../../src/lib/localStorage/localStorage";
import { MainContainer } from "../../src/components/containers/MainContainer/MainContainer";
import { searchCabinet } from "../cabinet";

const SavedSearches = () => {
  return (
    <MainContainer footerColor={"accent"} cabinetStyle={true}>
      {searchCabinet(getLocalStorage())}
    </MainContainer>
  );
};

export default SavedSearches;
