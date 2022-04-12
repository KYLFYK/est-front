import {FC, useEffect, useState} from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import {useBankCabinetStore} from '../../../../../mobx/role/bank/cabinet/BankCabinet'
import { BackIcon } from "../../../../../icons/BackIcon";
import { Trash } from "../../../../../icons/Trash";
import { ShowPassword } from "../../../../../icons/ShowPassword";

import commonStyles from "../../Admin/components/UsersTab/agency/agency.module.scss";
import styles from "./EditPage.module.scss";

interface PasswordProps {
  placeholder?: string;
  defaultValue?: string;
  name: string;
}

const PasswordField: FC<PasswordProps> = ({ placeholder, defaultValue }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const store = useBankCabinetStore()
  return (
    <span className={styles.input}>
      <input
        type={visible ? "text" : "password"}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      <div
        className={styles.show}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <ShowPassword className={styles.ico} visible={visible} />
      </div>
    </span>
  );
};

export const BankEditPage: FC = observer(() => {

  const store = useBankCabinetStore()

  useEffect(()=>{
    store.fetch()
  },[])

  useEffect(()=>{
    setValuePhone(store.initialData.phone)
    setValueLogin(store.initialData.email)
  },[store.initialData.phone,store.initialData.email,])

  const [valuePhone , setValuePhone]=useState<string>(store.initialData.phone)
  const [valueLogin , setValueLogin]=useState<string>(store.initialData.email)

  console.log(store.initialData.phone)
  return (
    <div className={commonStyles.pageWrapper}>
      <div className={commonStyles.header}>
        <Link href={"/cabinet"}>
          <a className={commonStyles.link}>
            <BackIcon width={24} height={24} color={"#3D4550"} />
            <span>Редактирование настроек</span>
          </a>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <section className={styles.section}>
            <span className={styles.title}>Телефоны</span>
            <div className={styles.list}>
              <div className={styles.elem}>
                <span className={styles.name}>Телефон 1</span>
                <span className={styles.input}>
                  {/*<input*/}
                  {/*  type="tel"*/}
                  {/*  defaultValue={"+7 (365) 2-550-500"}*/}
                  {/*  placeholder={"Введите"}*/}
                  {/*/> */}
                  <input
                    type="tel"
                    value={valuePhone}
                    onChange={e=>setValuePhone(e.currentTarget.value.replace(/[a-z]/g, ''))}
                    placeholder={"Введите"}
                  />
                </span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Телефон 2 ( мок ) </span>
                <span className={styles.input}>
                  <input
                    type="tel"
                    defaultValue={"+7 (365) 2-550-500"}
                    placeholder={"Введите"}
                  />
                  <div className={styles.delete}>
                    <Trash
                      width={18}
                      height={18}
                      fill={"#CAD1DA"}
                      className={styles.ico}
                    />
                  </div>
                </span>
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <span className={styles.title}>Данные регистрации</span>
            <div className={styles.list}>
              <div className={styles.elem}>
                <span className={styles.name}>Логин</span>
                <span className={styles.input}>
                  {/*<input*/}
                  {/*  type="text"*/}
                  {/*  defaultValue={"RNCB"}*/}
                  {/*  placeholder={"Логин"}*/}
                  {/*/>*/}
                  <input
                    type="text"
                    value={valueLogin}
                    onChange={e=>setValueLogin(e.currentTarget.value)}
                    placeholder={"Логин"}
                  />
                </span>
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.elem}>
                <span className={styles.name}>Старый пароль</span>
                <PasswordField
                  name={"passwordOld"}
                  placeholder={"Пароль"}
                  defaultValue={"password"}
                />
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>Новый пароль</span>
                <PasswordField
                  name={"passwordNew"}
                  placeholder={"Пароль"}
                  defaultValue={"password"}
                />
              </div>
              <div className={styles.elem}>
                <span className={styles.name}> </span>
                <span className={styles.value}>
                  <span className={styles.textButton}>Сохранить</span>
                </span>
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <span className={styles.title}>Уведомления</span>
            <div className={styles.list}>
              <div className={styles.elem}>
                <span className={styles.name}>Телефон</span>
                <span className={styles.input}>
                  {/*<input*/}
                  {/*  type="tel"*/}
                  {/*  defaultValue={"+7 (365) 2-550-500"}*/}
                  {/*  placeholder={"Введите"}*/}
                  {/*/>*/}
                  <input
                      type="tel"
                      value={valuePhone}
                      onChange={e=>setValuePhone(e.currentTarget.value.replace(/[a-z]/g, ''))}
                      placeholder={"Введите"}
                  />
                </span>
              </div>
              <div className={styles.elem}>
                <span className={styles.name}>E-mail</span>
                <span className={styles.input}>
                  {/*<input*/}
                  {/*  type="email"*/}
                  {/*  defaultValue={"rncb@rncb.ru"}*/}
                  {/*  placeholder={"Введите"}*/}
                  {/*/>*/}
                  <input
                      type="text"
                      value={valueLogin}
                      onChange={e=>setValueLogin(e.currentTarget.value)}
                      placeholder={"Логин"}
                  />
                </span>
              </div>
            </div>
          </section>
        </div>
        <div>
          <span className={styles.textButton}>+ Добавить телефон</span>
        </div>
      </div>
      <div className={styles.saveButtons}>
        <div className={styles.buttonsContainer}>
          <span className={styles.text}>Есть несохранённые изменения</span>
          <span className={styles.button}>Сохранить</span>
        </div>
      </div>
    </div>
  );
});
