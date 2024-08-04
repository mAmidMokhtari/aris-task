interface IconButtonProps {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
  className?: string;
  color?: string;
}

export function IconButton({
  title,
  Icon,
  onClick,
  className = "",
  color = "bg-green-500",
}: IconButtonProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={onClick}
        className={` p-2 ${color} hover:bg-green-700 focus:outline-none ${className}`}
      >
        <Icon className="w-5 h-5 mr-2" />
      </button>
      <span>{title}</span>
    </div>
  );
}
