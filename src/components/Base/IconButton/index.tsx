import { ReactNode } from "react";

interface IconButtonProps {
  title: string;
  Icon: ReactNode;
  onClick: () => void;
  className?: string;
  color?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  title,
  Icon,
  onClick,
  className = "",
  color = "bg-green-500",
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={onClick}
        className={` p-2 ${color} hover:bg-green-700 focus:outline-none ${className}`}
      >
        {Icon}
      </button>
      <span>{title}</span>
    </div>
  );
};
