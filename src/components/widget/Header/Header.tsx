import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { SelectUser } from "./SelectUser/SelectUser";
import LogoMain from "../../../icons/Header/LogoMain";
import IconLocation from "../../../icons/Header/IconLocation";
import Typography from "../../shared/Typography/Typography";
import { SelectEstate } from "../../shared/SelectCustom/SelectCustom";
import { LoginIcon } from "../../../icons/Header/LoginIcon";
import { Modal } from "../../shared/Modal/Modal";
import { Login } from "../Login/login/Login";
import { Recovery } from "../Login/recovery/Recovery";
import { Registration } from "../Login/registration/Registration";
import classNames from "classnames";
import { AddressConfirmation } from "../Login/AddressConfirmation/AddressConfirmation";
import { RecoveryMail } from "../Login/RecoveryMail/RecoveryMail";
import NewPassword from "../Login/NewPassword/NewPassword";
import { ConfirmationNewPassword } from "../Login/ConfirmationNewPassword/ConfirmationNewPassword";
import { AuthApi } from "../../../api/auth/auth";
import { EmailConformation } from "../Login/EmailConfirmation/EmailConfirmation";
import { useRouter } from "next/router";
import { ThankRegistering } from "../Login/ThankRegistering/ThankRegistering";

import css from "./Header.module.scss";

type HeaderPropsType = {
  className?: string;
  city: Array<string>;
  personalAccount: Array<{ title: string; href: string; message: number }>;
  auth?: boolean;
  modalActive?: string;
};

const moc = [
  {
    href: "/search?object-type=apartment&order-type=buy&privateType=house",
    title: "Купить",
  },
  /*{
    href: "/search?object-type=apartment&order-type=rent&privateType=house",
    title: "Снять",
  },*/
  { href: "/calculator", title: "Ипотека" },
  // { href: "/construction", title: "Строящиеся дома" },
  { href: "/#contact", title: "Контакты" },
];

const personalAcc = [
  [
    //'agency'
    { title: "Профиль: Агентство", href: "/", message: 0 },
    { title: "Личный кабинет", href: "/cabinet", message: 0 },
    { title: "Заявки", href: "/requests", message: 0 },
    { title: "Мои объявления", href: "/ads", message: 0 },
    { title: "Тарифы размещения", href: "/tariff", message: 12 },
    // { title: "Профпоиск", href: "/search", message: 3 },
    // { title: "Сообщения", href: "/messages", message: 0 },
    { title: "Уведомления", href: "/notifications", message: 0 },
  ],
  [
    //'agent'
    { title: "Профиль: Агент", href: "/", message: 0 },
    { title: "Личный кабинет", href: "/cabinet", message: 0 },
    { title: "Заявки", href: "/requests", message: 0 },
    { title: "Мои объявления", href: "/ads", message: 0 },
    // { title: "Тарифы размещения", href: "/tariff", message: 12 },
    // { title: "Профпоиск", href: "/search", message: 3 },
    /*{ title: "Сообщения", href: "/messages", message: 0 },
    { title: "Уведомления", href: "/notifications", message: 0 },*/
  ],
  [
    //'owner'(customer)
    { title: "Профиль: Собственник", href: "/", message: 0 },
    { title: "Личный кабинет", href: "/cabinet", message: 0 },
    { title: "Избранное", href: "/favorites", message: 0 },
    { title: "Сохраненые поиски", href: "/saved-searches", message: 0 },
    // { title: "Сообщения", href: "/messages", message: 12 },
    { title: "Уведомления", href: "/notifications", message: 3 },
    { title: "Мои объекты", href: "/ads", message: 0 },
    { title: "Проверка объекта", href: "/check-object", message: 0 },
  ],
  [
    //'developer'
    { title: "Профиль: Застройшик", href: "/", message: 0 },
    { title: "Личный кабинет", href: "/cabinet", message: 0 },
    { title: "Мои объекты", href: "/ads", message: 0 },
    /*{ title: "Уведомления", href: "/notifications", message: 5 },*/
  ],
  [
    //'admin'
    { title: "Профиль: Админ", href: "/", message: 0 },
    { title: "Пользователи", href: "/cabinet", message: 0 },
    { title: "Объявления", href: "/ads", message: 0 },
    // { title: "Сообщения", href: "/messages", message: 4 },
    { title: "Редактирование", href: "/editing", message: 0 },
    // { title: "Локация", href: "/location", message: 0 },
  ],
  [
    //'bank'
    { title: "Профиль: Банк", href: "/", message: 0 },
    { title: "Личный кабинет", href: "/cabinet", message: 0 },
    { title: "Заявки на ипотеку", href: "/mortgage-orders", message: 0 },
  ],
];

export const Header: FC<HeaderPropsType> = ({
  className,
  city,
  personalAccount,
  modalActive,
  auth = false,
}) => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");

  // for test modal
  // http://localhost:3000/?text=confirmationNewPassword
  // http://localhost:3000/?text=login

  // http://localhost:3000/?text=email-conformation
  // http://localhost:3000/?text=reset-password

  // const [modalSearch, setModalSearch]=useState(modalActive)
  const [authorization, setAuthorization] = useState<boolean>(auth);
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");
  const [edit, setEdit] = useState<string>(modalActive ? modalActive : "");

  const tokenConformation = router.query.token && router.query.token;

  const searchModal = (menu: string) => {
    switch (menu) {
      case "login":
        return <Login onEdit={(e) => setEdit(e)} setActive={loginActive} />;
      case "recovery": // password
        return (
          <Recovery
            email={email}
            onValueEmail={setEmail}
            onEdit={(e) => setEdit(e)}
          />
        );
      case "recoveryMail":
        return <RecoveryMail onEdit={activeEdit} email={email} />;
      case "thankRegistering":
        return <ThankRegistering onEdit={activeEdit} email={email} />;
      case "registration":
        return <Registration onEdit={(e) => setEdit(e)} onEmail={setEmail} />;
      case "addressConfirmation":
        return <AddressConfirmation onEdit={(e) => setEdit(e)} />;
      case "reset-password":
        return (
          <NewPassword
            onBack={() => setEdit("login")}
            onPassword={setNewPassword}
            password={newPassword}
            onEdit={() => setEdit("confirmationNewPassword")}
          />
        );
      case "confirmationNewPassword":
        return <ConfirmationNewPassword onEdit={() => setEdit("login")} />;
      case "email-conformation":
        return (
          <EmailConformation
            onEdit={(e) => setEdit(e)}
            tokenConformationEmail={tokenConformation}
          />
        );
      default:
        return <div> </div>;
    }
  };

  const activeEdit = (e: string) => {
    setEdit(e);
    setActiveModal(false);
  };

  useEffect(() => {
    if (router.query.text === "email-conformation") {
      searchModal("email-conformation");
      setEdit("email-conformation");
      setActiveModal(true);
    }
    if (router.query.text === "reset-password") {
      searchModal("reset-password");
      setEdit("reset-password");
      setActiveModal(true);
    }
    if (router.query.text === "login") {
      searchModal("login");
      setEdit("login");
      setActiveModal(true);
    }
    if (router.query.text === "confirmationNewPassword") {
      searchModal("confirmationNewPassword");
      setEdit("confirmationNewPassword");
      setActiveModal(true);
    } // eslint-disable-next-line
  }, [router]); // if dependency searchModal - no update Modal active (date)

  useEffect(() => {
    // overflow - scroll vertical (off / on) for modal
    if (activeModal && document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    }
    if (!activeModal && document.body.style.overflow === "hidden") {
      document.body.style.overflow = "auto";
    }
  }, [activeModal]);

  const [active, setActive] = useState<number>(0);

  const [mocAccountMenu, setMocAccountMenu] = useState<
    Array<{ title: string; href: string; message: number }>
  >(personalAcc[0]);
  const searchLoginMoc = (role: string | null) => {
    if (role === "agency") {
      setAuthorization(true);
      setMocAccountMenu(personalAcc[0]);
    }
    if (role === "agent") {
      setAuthorization(true);
      setMocAccountMenu(personalAcc[1]);
    }
    if (role === "customer") {
      setAuthorization(true);
      setMocAccountMenu(personalAcc[2]);
    }
    if (role === "developer") {
      setAuthorization(true);
      setMocAccountMenu(personalAcc[3]);
    }
    if (role === "admin") {
      setAuthorization(true);
      setMocAccountMenu(personalAcc[4]);
    }
    if (role === "bank") {
      setAuthorization(true);
      setMocAccountMenu(personalAcc[5]);
    }
  };
  const logout = () => {
    localStorage.clear();
    setAuthorization(false);
    if (router.asPath === "/search") return 1;
    router.push("/");
  };

  const loginActive = () => {
    setActiveModal(!activeModal);
    searchLoginMoc(localStorage.getItem("roleEstatum"));
  };

  useEffect(() => {
    try {
      const res = async () => {
        await AuthApi.check();
        searchLoginMoc(localStorage.getItem("roleEstatum"));
      };
      res();
    } catch (e) {
      console.log("error - throw", e);
    }
  }, []);

  const mocRole = (role: string) => {
    searchLoginMoc(role);
    localStorage.setItem("roleEstatum", role);
  };

  return (
    <div className={classNames(css.header, className)}>
      <div className={css.headerLogo}>
        <Link href={"/"} passHref>
          <div style={{ cursor: "pointer" }}>
            <LogoMain />
          </div>
        </Link>
      </div>
      <div className={css.menu}>
        <div
          className={css.menuName}
          onClick={() => setActive(0)}
          style={{ color: "#C5A28E" }}
        >
          <IconLocation />
          <div className={css.textTypography}>
            <SelectEstate options={city} selectLeft={false} />
          </div>
        </div>
        {moc.map(({ href, title }, index) => (
          <Link href={href} key={index} passHref>
            <div
              className={css.menuName}
              onClick={() => setActive(0)}
              style={{ color: active === 0 ? "#C5A28E" : "#3D4550" }}
            >
              <Typography size={"default"}>{title}</Typography>
            </div>
          </Link>
        ))}
        {!authorization ? (
          <div
            className={css.menuName}
            onClick={() => {
              setActiveModal(true);
              setEdit("login");
            }}
          >
            <LoginIcon />
          </div>
        ) : (
          <div className={css.menuName}>
            <Typography size={"default"} color="nude">
              <SelectUser
                params={"housingCondition"}
                options={mocAccountMenu}
                onChangeOption={logout}
              />
            </Typography>
          </div>
        )}
        {
          <Modal
            setActive={() => setActiveModal(!activeModal)}
            active={activeModal}
          >
            {searchModal(modalActive ? modalActive : edit)}
          </Modal>
        }
      </div>
    </div>
  );
};

export default Header;
