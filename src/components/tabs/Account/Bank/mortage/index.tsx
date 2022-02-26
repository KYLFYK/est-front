import { observer } from "mobx-react-lite";
import {useMortGageStore} from '../../../../../mobx/role/bank/mortgage/MortGage'
import {
  HorizontalTabs,
  ITabItem,
} from "../../../../shared/HorizontalTabs/HorizontalTabs";
import { Catalog } from "./Catalog";
import { Statistics } from "./Statistics";
import {OrderInfoPage} from './OrderInfoPage';

import commonStyles from "../../Admin/AdminRoleStyles.module.scss";

const BankMortageTabs: ITabItem[] = [
  {
    title: "Каталог заявок",
    Component: <Catalog />,
  },
  {
    title: "Статистика",
    Component: <Statistics />,
  },
];

export const Mortage = observer(() => {
  const store = useMortGageStore()
  return (
    !store.initialData.detail.detail 
      ? <HorizontalTabs wrapperClassName={commonStyles.horizontalTabs} tabs={BankMortageTabs}/> 
      : <OrderInfoPage req={store.initialData.getAllData.filter((d: any) => d.id === store.initialData.detail.id)}/>
  );
});
