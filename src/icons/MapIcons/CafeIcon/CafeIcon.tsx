import s from '../hover.module.scss';

export const CafeIcon = () => {
    return (
      <>
        <svg className={s.icon} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="#F2F2F2"/>
          <circle cx="25" cy="25" r="25" fill="#F2F2F2"/>
          <path d="M21.1 26.3395L23.93 23.5095L16.91 16.4995C15.35 18.0595 15.35 20.5895 16.91 22.1595L21.1 26.3395ZM27.88 24.5295C29.41 25.2395 31.56 24.7395 33.15 23.1495C35.06 21.2395 35.43 18.4995 33.96 17.0295C32.5 15.5695 29.76 15.9295 27.84 17.8395C26.25 19.4295 25.75 21.5795 26.46 23.1095L16.7 32.8695L18.11 34.2795L25 27.4095L31.88 34.2895L33.29 32.8795L26.41 25.9995L27.88 24.5295Z" fill="#1A4862"/>
        </svg>
      </>
    )
  };