import { FC, useState } from "react";
import { HorizontalTabs } from "../../../../../shared/HorizontalTabs/HorizontalTabs";
// import { Statistic } from "./Statistic";
import { ResComplexes } from "./ResComplexes";
import { MyHouses } from "./MyHouses";
import ResComplexObjects from "./ResComplexObjects";

import styles from "./MyObjects.module.scss";

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
  const [complex, setComplex] = useState<boolean>(false);
  const [complexId, setComplexId] = useState<{ id: number; name: string }>({
    id: 0,
    name: "",
  });

  return (
    <>
      {!complex ? (
        <HorizontalTabs
          tabs={[
            /*{title: "Статистика", Component: <Statistic/>,},*/
            {
              title: "Мои ЖК",
              Component: (
                <ResComplexes
                  setComplexId={setComplexId}
                  onComplex={setComplex}
                />
              ),
            },
            /*{ 
              title: "Мои дома", 
              Component: (
                <MyHouses 
                
                />
              ) 
            },*/
          ]}
          wrapperClassName={styles.tabsWrapper}
        />
      ) : (
        <ResComplexObjects complexId={complexId} onComplex={setComplex} />
      )}
    </>
  );
};
