import React, { useState } from "react";
import BaseButton from "../../shared/BaseButton/BaseButtons";
import { BaseInput } from "../../shared/BaseInput/Input";
import HeadLine from "../../shared/HeadLine/HeadLine";
import css from "./offerNews.module.scss";
import { mailPage } from "../../../api/mainPage/mainPage";
import { Modal } from "../../shared/Modal/Modal";
import Typography from "../../shared/Typography/Typography";
import IconOfferThanks from "./IconOfferThanks";
import IconOfferError from "./IconOfferError";

export const OfferNews = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [messageNews, setMessageNews] = useState(
    "Спасибо что подписались на новости"
  );

  const newsSubscription = async () => {
    let message;
    if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "") {
      message = await mailPage.newSubscription(name, email, phone);
    }
    setMessageNews(message);
    setActiveModal(true);
  };

  return (
    <div className={css.offerNews}>
      <div className={css.container}>
        <HeadLine
          title={
            "Хотите получать новости о новых предложениях и избранных домах?"
          }
        >
          <div className={css.grid}>
            <BaseInput
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <BaseInput
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <BaseInput
              placeholder="Телефон"
              type={"number"}
              value={phone}
              onChange={(e) => setPhone(e.currentTarget.value)}
            />
            <BaseButton onClick={newsSubscription} type="primary">
              Подписаться на новости
            </BaseButton>
          </div>
        </HeadLine>
      </div>
      <div className={css.minResContainer}>
        <HeadLine title={"Хотите получать новости о новых предложениях?"}>
          <div className={css.grid}>
            <div className={css.mobileMargin}>
              <BaseInput
                label="Имя"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </div>
            <div className={css.mobileMargin}>
              <BaseInput
                label="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <div className={css.mobileMargin}>
              <BaseInput
                label="Телефон"
                placeholder="Телефон"
                type={"number"}
                value={phone}
                onChange={(e) => setPhone(e.currentTarget.value)}
              />
            </div>
            <BaseButton onClick={newsSubscription} type="primary">
              Подписаться на новости
            </BaseButton>
          </div>
        </HeadLine>
      </div>
      {
        <Modal
          className={css.modalIndex}
          setActive={() => setActiveModal(!activeModal)}
          active={activeModal}
        >
          {messageNews === "Спасибо что подписались на новости"
              ? <IconOfferThanks />
              : <IconOfferError />
          }

          <Typography className={css.textMessage}>{messageNews}</Typography>
        </Modal>
      }
    </div>
  );
};
