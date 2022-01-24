import {FC, useState} from "react";
import {
    HorizontalTabs,
    ITabItem,
} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import {Statistic} from "./Statistic";
import {ResComplexes} from "./ResComplexes";
import {MyHouses} from "./MyHouses";

import styles from "./MyObjects.module.scss";
import ResComplexObjects from "./ResComplexObjects";

// const MyObjectsList: ITabItem[] = [
//     {
//         title: "Статистика",
//         Component: <Statistic/>,
//     },
//     {
//         title: "Мои ЖК",
//         Component: <ResComplexes onComplex={()=>setComplex(1)}/>,
//     },
//     {
//         title: "Мои дома",
//         Component: <MyHouses/>,
//     },
// ];

export const MyObjects: FC = () => {
    const [complex, setComplex] = useState<boolean>(false)

    return (
        <>
            {
                !complex
                    ? <HorizontalTabs
                        tabs={[
                            {title: "Статистика", Component: <Statistic/>,},
                            {title: "Мои ЖК", Component: <ResComplexes onComplex={()=>setComplex(true)}/>,},
                            {title: "Мои дома", Component: <MyHouses/>,},
                        ]}
                        wrapperClassName={styles.tabsWrapper}/>
                    : <ResComplexObjects onComplex={()=>setComplex(false)}/>
            }
        </>
    );
};
