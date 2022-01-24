import { getLocalStorage } from "../../src/lib/localStorage/localStorage";
import { MainContainer } from "../../src/components/containers/MainContainer/MainContainer";
import { searchCabinet } from "../cabinet";

const CheckObject = () => {
  return (
    <MainContainer footerColor={"accent"} cabinetStyle={true}>
      {searchCabinet(getLocalStorage())}
    </MainContainer>
  );
};
export default CheckObject;
