import React, { useState } from "react";
import BaseButton from "../../shared/BaseButton/BaseButtons";
import { BaseInput } from "../../shared/BaseInput/Input";
import HeadLine from "../../shared/HeadLine/HeadLine";
import css from "./offerNews.module.scss";
import { mailPage } from "../../../api/mainPage/mainPage";
import { Modal } from "../../shared/Modal/Modal";
import Typography from "../../shared/Typography/Typography";

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
          {messageNews === "Спасибо что подписались на новости" ? (
            <svg
              width="340"
              height="159"
              viewBox="0 0 340 159"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M228 120H262V159H228V120Z" fill="#F2F2F2" />
              <path d="M101 120H135V159H101V120Z" fill="#F2F2F2" />
              <path d="M143 120H177V159H143V120Z" fill="#F2F2F2" />
              <path d="M186 120H219V159H186V120Z" fill="#F2F2F2" />
              <path
                d="M101 33C101 29.6863 103.686 27 107 27H256C259.314 27 262 29.6863 262 33V120H101V33Z"
                fill="#CAD1DA"
              />
              <path
                d="M227.6 120H262L253.782 152.49C253.557 153.378 252.759 154 251.843 154H221.569C220.265 154 219.31 152.773 219.63 151.51L227.6 120Z"
                fill="#90CAF9"
              />
              <path
                d="M101.4 120H135L126.976 152.48C126.755 153.373 125.954 154 125.034 154H95.5543C94.2554 154 93.3011 152.781 93.6126 151.52L101.4 120Z"
                fill="#90CAF9"
              />
              <path
                d="M143.4 120H177L168.976 152.48C168.755 153.373 167.954 154 167.034 154H137.554C136.255 154 135.301 152.781 135.613 151.52L143.4 120Z"
                fill="#90CAF9"
              />
              <path
                d="M185.4 120H219L210.976 152.48C210.755 153.373 209.954 154 209.034 154H179.554C178.255 154 177.301 152.781 177.613 151.52L185.4 120Z"
                fill="#CAD1DA"
              />
              <circle cx="302.5" cy="74.5" r="4.5" fill="#F37041" />
              <circle cx="140" cy="10" r="2" fill="#F37041" />
              <circle cx="80.5" cy="65.5" r="4.5" fill="#577FFF" />
              <circle cx="295.5" cy="22.5" r="2.5" fill="#577FFF" />
              <circle cx="337.5" cy="44.5" r="2.5" fill="#FFC61A" />
              <circle cx="244.5" cy="2.5" r="2.5" fill="#FFC61A" />
              <ellipse cx="70" cy="4.5" rx="3" ry="2.5" fill="#FFC61A" />
              <ellipse cx="270" cy="75" rx="3" ry="2" fill="#58B80A" />
              <ellipse cx="2.5" cy="35" rx="2.5" ry="3" fill="#58B80A" />
              <ellipse cx="48.5" cy="67" rx="2.5" ry="2" fill="#F37041" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M123.512 65.0782C122.215 65.2098 120.995 65.8614 119.782 67.0703C118.969 67.8803 118.477 68.7045 118.166 69.7781C118.016 70.2944 118.004 70.4907 118 72.4265C117.997 74.1676 118.018 74.6083 118.123 75.061C118.46 76.5043 119.259 77.7233 120.462 78.6311C121.423 79.3554 122.346 79.7523 123.452 79.9167C123.841 79.9747 127.401 79.9903 136.552 79.9746C148.341 79.9543 149.144 79.9453 149.555 79.8291C151.313 79.3324 152.882 78.0867 153.701 76.5385C154.224 75.5484 154.413 74.4826 154.413 72.5136L154.414 71.2069H146.661H138.907L138.943 70.6667C139.008 69.6783 139.422 68.8655 140.279 68.0406C140.881 67.462 141.607 67.0667 142.341 66.9183C142.754 66.8348 144.346 66.8183 152.131 66.8173L161.427 66.8161V73.4022V79.9884H162.559H163.691V73.4022V66.8161H170.631C174.448 66.8161 177.572 66.8321 177.572 66.8516C177.572 66.8872 170.805 78.9338 170.399 79.6225L170.182 79.9884H171.462H172.741L173.591 78.4198L174.441 76.8514L180.663 76.8691L186.886 76.887L187.726 78.4377L188.566 79.9884H189.83H191.094L190.769 79.4134C190.591 79.0972 189.089 76.3922 187.433 73.4022C185.776 70.4123 184.274 67.7074 184.095 67.3911L183.769 66.8161H191.081H198.392V73.4022V79.9884H199.524H200.656V73.4022V66.8161H204.163H207.67V70.3201C207.67 73.9447 207.711 74.6597 207.97 75.4907C208.622 77.5792 210.756 79.4345 213.018 79.878C213.847 80.0407 220.047 80.0407 220.877 79.878C223.233 79.416 225.308 77.5756 226.017 75.3189C226.175 74.8171 226.182 74.671 226.207 71.6773C226.222 69.962 226.256 68.5601 226.284 68.5622C226.312 68.5643 228.063 71.1282 230.176 74.2598L234.018 79.9535L234.564 79.9737L235.11 79.9938L238.978 74.3705L242.845 68.7473L242.864 74.3678L242.882 79.9884H243.941H245V72.4942V65L244.034 65.0194L243.068 65.0389L238.865 71.1174C236.554 74.4606 234.637 77.1888 234.606 77.1801C234.575 77.1714 232.682 74.4361 230.399 71.1016L226.25 65.0389H225.123H223.997L223.96 69.7781L223.924 74.5174L223.728 75.0286C223.448 75.7618 223.121 76.248 222.523 76.8234C221.918 77.405 221.217 77.8242 220.501 78.0314C220.029 78.168 219.83 78.1763 217.005 78.1763C214.509 78.1763 213.935 78.1579 213.561 78.0659C212.309 77.7577 211.085 76.7689 210.454 75.5554C209.968 74.6204 209.982 74.7804 209.953 69.6562L209.928 65.004H176.663C153.829 65.004 143.161 65.0271 142.641 65.0776C140.366 65.2991 138.292 66.6863 137.28 68.663C136.797 69.6056 136.66 70.2387 136.61 71.747L136.568 73.0189H144.368H152.168L152.13 73.9075C152.102 74.5541 152.05 74.9058 151.941 75.1986C151.317 76.8655 149.972 77.9238 148.16 78.1738C147.481 78.2674 125.192 78.2685 124.514 78.1749C123.38 78.0185 122.426 77.5563 121.589 76.7574C120.711 75.9199 120.224 74.8071 120.224 73.6354V73.0894L126.818 73.0715L133.411 73.0538V72.1477V71.2417L126.818 71.2239L120.224 71.2061L120.225 70.9452C120.227 70.5565 120.406 69.9821 120.71 69.3949C121.18 68.4879 122.283 67.5642 123.418 67.1267C124.146 66.8466 124.8 66.8161 130.086 66.8161H135.094L135.823 66.1349C136.345 65.6468 136.686 65.391 137.027 65.2323L137.502 65.0109L130.781 65.0167C127.084 65.0199 123.813 65.0476 123.512 65.0782ZM183.685 70.9597C184.903 73.2194 185.9 75.0776 185.9 75.0891C185.9 75.1004 183.549 75.1098 180.676 75.1098C177.595 75.1098 175.453 75.0838 175.453 75.0465C175.453 74.9952 179.702 67.1494 179.871 66.8877C179.904 66.8382 180.192 66.8184 180.696 66.8312L181.47 66.851L183.685 70.9597Z"
                fill="#FCFCFC"
              />
            </svg>
          ) : (
            <svg
              style={{ marginTop: "40px" }}
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.2228 80.0003C47.132 80.0003 51.1117 76.0207 51.1117 71.1115C51.1117 66.2023 47.132 62.2227 42.2228 62.2227C37.3137 62.2227 33.334 66.2023 33.334 71.1115C33.334 76.0207 37.3137 80.0003 42.2228 80.0003Z"
                fill="#CAD1DA"
              />
              <path d="M33.334 0H51.1117V53.333H33.334V0Z" fill="#CAD1DA" />
            </svg>
          )}

          <Typography className={css.textMessage}>{messageNews}</Typography>
        </Modal>
      }
    </div>
  );
};
