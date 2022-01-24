import { FC } from "react";

interface Props {
  size?: number;
  fill?: string;
  className?: string;
}

export const IconDocument: FC<Props> = ({ size, fill, className }) => {
  return (
    <svg
      width={size ? size : 24}
      height={size ? size : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.00049 15.9995H16.0005V17.9995H8.00049V15.9995ZM8.00049 11.9995H16.0005V13.9995H8.00049V11.9995ZM14.0005 1.99951H6.00049C4.90049 1.99951 4.00049 2.89951 4.00049 3.99951V19.9995C4.00049 21.0995 4.89049 21.9995 5.99049 21.9995H18.0005C19.1005 21.9995 20.0005 21.0995 20.0005 19.9995V7.99951L14.0005 1.99951ZM18.0005 19.9995H6.00049V3.99951H13.0005V8.99951H18.0005V19.9995Z"
        fill={fill ? fill : "#C5A28E"}
      />
    </svg>
  );
};
