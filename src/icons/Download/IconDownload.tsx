import { FC } from "react";

interface Props {
  size?: number;
  fill?: string;
  className?: string;
}

export const IconDownload: FC<Props> = ({ size, fill, className }) => {
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
        d="M19 12V19H5V12H3V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V12H19ZM13 12.67L15.59 10.09L17 11.5L12 16.5L7 11.5L8.41 10.09L11 12.67V3H13V12.67Z"
        fill={fill ? fill : "#C5A28E"}
      />
    </svg>
  );
};
