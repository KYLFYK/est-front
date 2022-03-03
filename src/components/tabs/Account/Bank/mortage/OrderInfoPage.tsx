import { FC, useState } from "react";
import {useMortGageStore} from '../../../../../mobx/role/bank/mortgage/MortGage';
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { BackIcon } from "../../../../../icons/BackIcon";
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown";
import {datetoDayFormat, datetoTimeFormat} from '../../../../../lib/mapping/objectDates';
import {LEADS_REQS_OPTIONS, SYNTAX_REQS_OPTIONS} from './Config';

import commonStyles from "../../Admin/components/UsersTab/agency/agency.module.scss";
import styles from "./OrderInfo.module.scss";

export const OrderInfoPage: FC<any> = observer(({req}) => {
  const store = useMortGageStore()
  console.log('req', req)
  req && console.log('store.getEarlyPayments', req.earlyPayment.length)
  return (
    <div className={commonStyles.pageWrapper}>
      <div className={commonStyles.header}>
        <div onClick={() => store.setDetail(false, 0)} style={{cursor: 'pointer'}} className={commonStyles.link}>
          <BackIcon width={24} height={24} color={"#3D4550"} />
          <span>Информация о заявке</span>
        </div>
      </div>
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <span className={styles.title}>Данные о заявке</span>
          <div className={styles.sectionList}>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Дата заявки</span>
              <span className={styles.value}>{req && datetoDayFormat(req.createAt)}</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Время заявки</span>
              <span className={styles.value}>{req && datetoTimeFormat(req.createAt)}</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Статус заявки</span>
              <span className={styles.value}>
                <BaseDropDown
                  onChange={(obj) => {
                    store.updateLead(req.id, LEADS_REQS_OPTIONS.filter((o: any) => o.value === obj)[0].label)
                  }}
                  className={`${styles.select}${
                    req && req.status === "Новая заявка" ? ` ${styles.green}` : ""
                  }`}
                  options={LEADS_REQS_OPTIONS}
                  placeholder={req && req.status}
                  value={req && req.status}
                />
              </span>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <span className={styles.title}>Контактные данные</span>
          <div className={styles.sectionList}>
            <div className={`${styles.sectionElem} ${styles.large}`}>
              <span className={styles.key}>ФИО</span>
              <span className={styles.value}>
                {req && req.fio}
              </span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Телефон</span>
              <span className={styles.value}>{req && req.phone}</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>E-mail</span>
              <span className={styles.value}>{req && req.email}</span>
            </div>
          </div>
        </section>
        {/*<section className={styles.section}>
          <span className={styles.title}>Об объекте</span>
          <div className={styles.sectionList}>
            <div className={`${styles.sectionElem} ${styles.large}`}>
              <span className={styles.key}>Название объекта</span>
              <span className={styles.value}>
                1-комнатная квартира в ЖК «Ленинский»
              </span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Стоимость</span>
              <span className={styles.value}>150 000 000 ₽</span>
            </div>
          </div>
        </section>*/}
        <section className={styles.section}>
          <span className={styles.title}>Исходные данные</span>
          <div className={styles.sectionList}>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Стоимость недвижимости</span>
              <span className={styles.value}>{req && req.statePrice}</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Первоначальный взнос</span>
              <span className={styles.value}>{req && req.initialPayment}</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Срок кредита</span>
              <span className={styles.value}>{req && req.creditTerm} лет</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Процентная ставка</span>
              <span className={styles.value}>{req && req.percentageRate} %</span>
            </div>
          </div>
          {req && req.earlyPayment.length && req.earlyPayment.map((ep: any, i: number) => {
            return (
              <>
                <span className={styles.title}>{`Досрочный платёж ${i+1}`}</span>
                <div className={styles.sectionList}>
                  <div className={styles.sectionElem}>
                    <span className={styles.key}>Дата платежа</span>
                    <span className={styles.value}>{ep.dateOfPayment}</span>
                  </div>
                  <div className={styles.sectionElem}>
                    <span className={styles.key}>Периодичность платежей</span>
                    <span className={styles.value}>{SYNTAX_REQS_OPTIONS.filter((s) => s.value === ep.frequencyPayment)[0].label}</span>
                  </div>
                  <div className={styles.sectionElem}>
                    <span className={styles.key}>Уменьшить</span>
                    <span className={styles.value}>{SYNTAX_REQS_OPTIONS.filter((s) => s.value === ep.reduce)[0].label}</span>
                  </div>
                  <div className={styles.sectionElem}>
                    <span className={styles.key}>Сумма</span>
                    <span className={styles.value}>{ep.frequencyPrice}</span>
                  </div>
                </div>
              </>
              )}
            )}
          <span className={styles.title}>Итоговый расчёт</span>
          <div className={styles.sectionList}>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Ежемесячный платёж</span>
              <span className={styles.value}>285 474 ₽</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Кредит</span>
              <span className={styles.value}>98 999 999 ₽</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Проценты</span>
              <span className={styles.value}>89 513 816 ₽</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Проценты + кредит</span>
              <span className={styles.value}>188 513 805 ₽</span>
            </div>
            <div className={styles.sectionElem}>
              <span className={styles.key}>Необходимый доход</span>
              <span className={styles.value}>1 309 124 ₽</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});
