import { FC } from "react";

interface Props {
  fill?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  onClick?: () => void;
}

export const Trash: FC<Props> = ({
  width,
  height,
  fill,
  className,
  onClick,
}) => {
  return (
    <svg
      width={width ? width : 25}
      height={height ? height : 24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M16.5 9V19H8.5V9H16.5ZM15 3H10L9 4H5.5V6H19.5V4H16L15 3ZM18.5 7H6.5V19C6.5 20.1 7.4 21 8.5 21H16.5C17.6 21 18.5 20.1 18.5 19V7Z"
        fill={fill ? fill : "#EB5757"}
      />
    </svg>
  );
};
