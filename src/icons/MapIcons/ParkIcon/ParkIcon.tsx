import s from '../hover.module.scss';

export const ParkIcon = () => {
    return (
      <>
        <svg className={s.icon} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="#F2F2F2"/>
          <path d="M30.0001 25H32.0001L25.0001 15L18.0501 25H20.0001L16.1001 31H23.0201V35H26.9701V31H34.0001L30.0001 25ZM19.7901 29L23.6901 23H21.8801L25.0101 18.5L28.1601 23H26.2601L30.2601 29H19.7901Z" fill="#1A4862"/>
        </svg>
      </>
    )
  };