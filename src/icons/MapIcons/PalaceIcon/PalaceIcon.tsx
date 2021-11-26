import s from '../hover.module.scss';

export const PalaceIcon = () => {
    return (
      <>
        <svg className={s.icon} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="#F2F2F2"/>
          <path d="M34 22V24H32V16H30V18H28V16H26V18H24V16H22V18H20V16H18V24H16V22H14V34H23V31C23 29.9 23.9 29 25 29C26.1 29 27 29.9 27 31V34H36V22H34ZM34 32H29V31C29 28.79 27.21 27 25 27C22.79 27 21 28.79 21 31V32H16V26H20V20H30V26H34V32Z" fill="#1A4862"/>
          <path d="M24 22H22V25H24V22Z" fill="#1A4862"/>
          <path d="M28 22H26V25H28V22Z" fill="#1A4862"/>
        </svg>
      </>
    )
  };