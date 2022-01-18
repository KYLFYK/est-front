import React, {FC} from "react";
import VerticalTabs from "../../../shared/VerticalTabs/VerticalTabs";
import {PersonalArea} from "./components/PersonalArea";
import {Notifications} from "./components/Notifications";
import {MyObjects} from "./components/MyObjects";
import {MainContainer} from "../../../containers/MainContainer/MainContainer";

export const DeveloperRoleTabs: FC = () => {
    return (
        <MainContainer>
            <VerticalTabs
                link={true}
                tabs={[
                    {title: "Личный кабинет", Component: <PersonalArea/>},
                    {title: "Мои объекты", Component: <MyObjects/>},
                    {title: "Уведомления", Component: <Notifications/>},
                ]}
            />
        </MainContainer>
    );
};
