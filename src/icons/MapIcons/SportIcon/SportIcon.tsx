import s from '../hover.module.scss';

export const SportIcon = () => {
    return (
      <>
        <svg className={s.icon} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="#F2F2F2"/>
          <path d="M33.57 27.86L35 26.43L33.57 25L30 28.57L21.43 20L25 16.43L23.57 15L22.14 16.43L20.71 15L18.57 17.14L17.14 15.71L15.71 17.14L17.14 18.57L15 20.71L16.43 22.14L15 23.57L16.43 25L20 21.43L28.57 30L25 33.57L26.43 35L27.86 33.57L29.29 35L31.43 32.86L32.86 34.29L34.29 32.86L32.86 31.43L35 29.29L33.57 27.86Z" fill="#1A4862"/>
        </svg>
      </>
    )
  };